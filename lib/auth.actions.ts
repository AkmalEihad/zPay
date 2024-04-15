"use server"

import db from "@/lib/db";
import {userTable} from "@/lib/db/schema";
import {SignInSchema, SignUpSchema} from "@/types";
import {lucia, validateRequest} from "@/lib/auth";
import {eq} from "drizzle-orm";
import {generateId} from "lucia";
import {cookies} from "next/headers";
import argon2 from "argon2";
import {z} from "zod"

export const signUp = async (values: z.infer<typeof SignUpSchema>) => {
    console.log(values)

    const hashedPassword = await argon2.hash(values.password)
    const userId = generateId(15)


    try {
        await db
            .insert(userTable)
            .values({
                id: userId,
                username: values.username,
                email: values.email,
                phone: values.phone,
                hashedPassword,
            }).returning({
                id: userTable.id,
                username: userTable.username,
                email: userTable.email,
                phone: userTable.phone,

            })

        const session = await lucia.createSession(userId, {
            expiresIn: 60 * 60 * 24 * 30,
        })

        const sessionCookie = lucia.createSessionCookie(session.id)

        cookies().set(sessionCookie.name,
            sessionCookie.value,
            sessionCookie.attributes
        )

        return {
            success: true,
            data: {
                userId,
            },
        }

    } catch (error: any) {
        return {
            error: error?.message,
        }

    }
}

export const signIn = async (values: z.infer<typeof SignInSchema>) => {
    const existingUser = await db.query.userTable.findFirst({
        where: (table: any) => eq(table.email, values.email),
    })

    if (!existingUser) {
        return {
            error: "User not Found",
        }
    }

    if (!existingUser.hashedPassword) {
        return {
            error: "User not Found",
        }
    }
    const isValidPassword = await argon2.verify(
        existingUser.hashedPassword,
        values.password
    )

    if (!isValidPassword) {
        return {
            error: "Incorrect username or password"
        }
    }

    const session = await lucia.createSession(existingUser.id, {
        expiresIn: 60 * 60 * 24 * 30,
    });

    const sessionCookie = lucia.createSessionCookie(session.id);

    cookies().set(sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
    );

    return {
        success: "Logged in successfully",
    }
}

export const signOut = async () => {
    try {
        const {session} = await validateRequest()

        if (!session) {
            return {
                error: "Unauthorized",
            }
        }

        await lucia.invalidateSession(session.id)
        const sessionCookie = lucia.createBlankSessionCookie()

        cookies().set(
            sessionCookie.name,
            sessionCookie.value,
            sessionCookie.attributes,
        )
    } catch (error:any) {
        return {
            error: error?.message,
        }
    }
}

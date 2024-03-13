"use client"

import {Button} from "@/components/ui/button"
import {Icons} from "@/components/ui/icons"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {cn} from "@/lib/utils"
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs"
import {useRouter} from "next/navigation";
import * as React from "react";
import {useEffect, useState} from "react";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function SignUp({className, ...props}: UserAuthFormProps) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        setIsLoading(true)

        // Add your sign-up logic here

        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    const supabase = createClientComponentClient();

    useEffect(() => {
        async function getUser() {
            const {data: {user}} = await supabase.auth.getUser()
            setUser(user)
        }

        getUser();
    }, [supabase])


    const handleSignUp = async () => {
        await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${location.origin}/auth/callback`
            }
        })
        setUser(supabase.auth.getUser())
        router.push('/')
        router.refresh();
        setEmail('')
        setPassword('')
    }

    if (user) {
        return router.push('/')
    }

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <form onSubmit={onSubmit}>
                <div className="grid gap-2">
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="email">Email
                        </Label>
                        <Input
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@example.com"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                        />
                        <Label className="sr-only" htmlFor="password">
                            Password
                        </Label>
                        <Input
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            type="password"
                            autoCapitalize="none"
                            autoCorrect="off"
                            disabled={isLoading}
                        />
                    </div>
                    <Button
                        onClick={handleSignUp}
                        disabled={isLoading}>
                        {isLoading && (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin"/>
                        )}
                        Register
                    </Button>
                </div>
            </form>
        </div>
    )
}
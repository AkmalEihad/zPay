
import logo from "@/app/image/logo.png"
import {Button} from "@/components/ui/button"
import UserSignupForm from "@/components/user-signup-form"
import {Metadata} from "next"
import Image from "next/image"
import Link from "next/link"
import React from "react";
export const metadata: Metadata = {
    title: "Register - zPay",
}

export default function RegisterPage() {

    return (
        <main>
            <div
                className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                <div className={"absolute right-4 top-4 md:right-8 md:top-8 lg:right-8 lg:top-8"}>
                    <Link href={"/merchant/login" }>
                        <Button variant={"ghost"}>
                            Login
                        </Button>
                    </Link>
                </div>

                {/*Image Side*/}
                <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
                    <div className="absolute inset-0 bg-zinc-900"/>
                    <div className="relative flex items-end justify-start text-lg font-medium ">
                        <Link href={'/'}>
                            <Button variant={"ghost"} className={"hover:bg-neutral-700"}>
                                <Image src={logo} alt={"logo"} width={"60"} height={"60"}/>
                            </Button>
                        </Link>
                    </div>
                    <div className="relative z-20 mt-auto">
                        <blockquote className="space-y-2">
                            <p className="text-lg">
                                &ldquo;This library has saved me countless hours of work and
                                helped me deliver stunning designs to my clients faster than
                                ever before.&rdquo;
                            </p>
                            <footer className="text-sm">Sofia Davis</footer>
                        </blockquote>
                    </div>
                </div>

                {/*Form Side*/}
                <div className="lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Create an account
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Enter your email below to create your account
                            </p>
                        </div>
                        <UserSignupForm/>

                        <p className="px-8 text-center text-sm text-muted-foreground">
                            By clicking continue, you agree to our{" "}
                            <Link
                                href={"https://account.zpay.my/merchant/ZPAY_SOLUTION_UserTermsConditions.pdf"}
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link
                                href={"https://account.zpay.my/merchant/ZPAY_SOLUTION_UserTermsConditions.pdf"}
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}
import logo from "@/app/image/logo.png";
import {Button} from "@/components/ui/button"
import UserLoginForm from "@/components/user-login-form";
import {Metadata} from "next"
import Image from "next/image";
import Link from "next/link"
import React from "react";

export const metadata: Metadata = {
    title: "Login - zPay",
}

export default function LoginPage() {
    return (
        <main>
            <div
                className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">

                <div className="lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                zPay - LOGIN
                            </h1>
                        </div>
                        <UserLoginForm/>
                    </div>
                </div>

                <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-l">
                    <div className="absolute inset-0 bg-zinc-900"/>
                    <div className="relative z-20 flex items-center justify-end text-lg font-medium">
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

                <div className={"absolute right-4 top-4  md:right-8 md:top-8 lg:left-8 lg:top-8"}>
                    <Link href={"/merchant/signup"}>
                        <Button variant={"ghost"}>
                            Register
                        </Button>
                    </Link>
                </div>
            </div>
        </main>
    )
}
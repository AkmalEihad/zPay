"use client"

import {Button} from "@/components/ui/button"
import { Lock } from 'lucide-react';
import {Icons} from "@/components/ui/icons"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {cn} from "@/lib/utils"
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs"
import Link from "next/link";
import {useRouter} from "next/navigation";
import * as React from "react";
import {useEffect, useState} from "react";
import {toast, Toaster} from "sonner";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
}

export default function Login({className, ...props}: UserAuthFormProps) {
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


    const handleSignIn = async () => {
        const res = await supabase.auth.signInWithPassword({
            email,
            password
        })
        setUser(res.data.user)
        router.push('/')
        router.refresh();
        setEmail('')
        setPassword('')
    };

    const handleBoth = () => {
        handleSignIn();
        toast.success('Successfully Logged In');
    }

    if (user) {
        return router.push('/')
    }

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <form onSubmit={onSubmit}>
                <div className="grid gap-2">
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="email">
                            Email
                        </Label>
                        <Input
                            value={email}
                            name={"email"}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={"zPay@gmail.com"}
                            type={"email"}
                            autoCapitalize={"none"}
                            autoComplete={"email"}
                            autoCorrect={"off"}
                            disabled={isLoading}
                        />
                        <Label className="sr-only" htmlFor="password">
                            Password
                        </Label>
                        <Input
                            name={"password"}
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type={"password"}
                            autoCapitalize="none"
                            autoCorrect="off"
                            disabled={isLoading}
                        />
                    </div>
                    <div className={"flex flex-row-reverse"}>
                        <Link href={"/"} className={"flex justify-center items-end"}>
                            <Lock size={20} strokeWidth={1.5} />
                            <Label className={"cursor-pointer"}>Forgot Password?</Label>
                        </Link>
                    </div>
                    <Button
                        onClick={handleBoth}
                        disabled={isLoading}>
                        {isLoading && (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin"/>
                        )}
                        Login
                    </Button>
                </div>
            </form>
            <Toaster/>
        </div>
    );
}

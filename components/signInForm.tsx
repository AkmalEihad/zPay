'use client'
import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card"
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {signIn} from "@/lib/auth.actions";
import {cn} from "@/lib/utils";
import {SignInSchema} from "@/types";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/input";
import {useRouter} from "next/navigation";
import React from 'react';
import {useForm} from "react-hook-form"
import {toast} from "sonner";
import {z} from "zod";

type Input = z.infer<typeof SignInSchema>


const SignInForm = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const router = useRouter();
    const form = useForm<Input>({
        resolver: zodResolver(SignInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (values: Input) => {
        const res = await signIn(values)
        setIsLoading(true)

        if (res.error) {
            setTimeout(() => {
                setIsLoading(false)
                toast.error(res.error)
            }, 2000)
        } else if (res.success) {
            setTimeout(() => {
                setIsLoading(false)
                toast.success("Successfully Login")
                router.push("/")
            }, 2000)
        }

    };

    return (
        <div>
            <Card className="w-[400px] drop-shadow-md">
                <CardHeader>
                    <CardTitle>Sign In</CardTitle>
                    <CardDescription>Welcome zPay Merchant!</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className=" relative overflow-x-hidden">
                            <div
                                className={cn("space-y-3 p-1")}>
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input label={"Email"} disabled={isLoading} variant={"faded"}
                                                       classNames={{
                                                           label: "text-black/50",
                                                           input: [
                                                               "bg-transparent",
                                                               "text-black/90",
                                                               "placeholder:text-default-700/50",
                                                           ],
                                                           innerWrapper: "bg-transparent",
                                                           inputWrapper: [
                                                               "shadow-md",
                                                               "bg-default-200/50",
                                                               "backdrop-blur-xl",
                                                               "backdrop-saturate-200",
                                                               "hover:bg-default-200/70",
                                                               "group-data-[focused=true]:bg-default-200/50",
                                                               "!cursor-text",
                                                           ],

                                                       }} {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input label={"Password"} disabled={isLoading} variant={"faded"}
                                                       classNames={{
                                                           label: "text-black/50",
                                                           input: [
                                                               "bg-transparent",
                                                               "text-black/90",
                                                               "placeholder:text-default-700/50",
                                                           ],
                                                           innerWrapper: "bg-transparent",
                                                           inputWrapper: [
                                                               "shadow-md",
                                                               "bg-default-200/50",
                                                               "backdrop-blur-xl",
                                                               "backdrop-saturate-200",
                                                               "hover:bg-default-200/70",
                                                               "group-data-[focused=true]:bg-default-200/50",
                                                               "!cursor-text",
                                                           ],

                                                       }} {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />

                            </div>


                            <div className={"flex items-center justify-end pt-2 px-1"}>
                                {/* Login Button */}
                                <Button type="submit" isLoading={isLoading} variant={"shadow"}
                                        color={"primary"}>Login</Button>
                            </div>

                        </form>
                    </Form>
                </CardContent>

            </Card>
        </div>
    );
};

export default SignInForm;


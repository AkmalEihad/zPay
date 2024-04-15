'use client'
import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card"
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {signUp} from "@/lib/auth.actions";
import {cn} from "@/lib/utils";
import {SignUpSchema} from "@/types";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/input";
import {motion} from "framer-motion";
import {ArrowLeft, ArrowRight} from "lucide-react";
import {useRouter} from "next/navigation";
import React from 'react';
import {useForm} from "react-hook-form"
import {toast} from "sonner";
import {z} from "zod";

type Input = z.infer<typeof SignUpSchema>


const SignUpForm = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const router = useRouter();
    const [formStep, setFormStep] = React.useState(0);
    const form = useForm<Input>({
        resolver: zodResolver(SignUpSchema),
        defaultValues: {
            username: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = async (values: Input) => {
        const res = await signUp(values)
        setIsLoading(true)

        if (values.confirmPassword !== values.password) {
            return toast.error("Password do not match!");
        }

        if (res.error) {
            setTimeout(() => {
                setIsLoading(false)
                toast.error(res.error)
            }, 2000)
        } else if (res.success) {
            setTimeout(() => {
                setIsLoading(false)
                toast.success("Account created successfully")
                router.push("/")
            }, 2000)
        }

    }

    return (
        <div>
            <Card className="w-[400px] drop=shadow-md">
                <CardHeader>
                    <CardTitle>Sign Up</CardTitle>
                    <CardDescription>Sign Up Now and Become zPay Merchant for Free!</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className=" relative overflow-x-hidden">
                            <motion.div
                                className={cn("space-y-3 p-1", {})}
                                animate={{
                                    translateX: `-${formStep * 100}%`
                                }}
                                transition={{
                                    ease: "easeInOut"
                                }}>
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input label={"Username"} variant={"faded"}
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

                                                       }}  {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input label={"Email"} variant={"faded"}
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

                                                       }}  {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input label={"Phone Number"} variant={"faded"}
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
                            </motion.div>

                            <motion.div
                                className={cn("space-y-3 px-1 p-4 absolute top-0 left-0 right-0", {})}
                                animate={{
                                    translateX: `${100 - formStep * 100}%`
                                }}
                                style={{
                                    translateX: `${100 - formStep * 100}%`
                                }}
                                transition={{
                                    ease: "easeInOut"
                                }}
                            >
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input label={"Password"} tabIndex={-1} disabled={isLoading}
                                                       variant={"faded"}
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

                                                       }}  {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="confirmPassword"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input label={"Confirm Password"} tabIndex={-1} disabled={isLoading}
                                                       variant={"faded"}
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

                                                       }}  {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                            </motion.div>

                            <div className={"relative px-1 pt-2"}>
                                <div className={"flex justify-between"}>
                                    {/* Back Button */}
                                    <Button variant={"ghost"} color={"danger"} type="button" disabled={isLoading}
                                            className={cn("pl-2", {
                                                'hidden': formStep == 0,
                                            })} onClick={() => {
                                        setFormStep(0)
                                    }}>
                                        <ArrowLeft className={"w-h h-4"}/>
                                        Go Back
                                    </Button>
                                    {/* Submit Button */}
                                    <Button type="submit" variant={"shadow"} color={"primary"} isLoading={isLoading}
                                            className={cn({
                                                'hidden': formStep == 0,
                                            })}>Submit</Button>
                                </div>



                                <div className={"flex justify-end"}>
                                    {/* Next Button */}
                                    <Button variant={"ghost"} color={"primary"} type="button" className={cn("pr-2", {
                                        'hidden': formStep == 1,
                                    })} onClick={async () => {

                                        await form.trigger(['username', 'email', 'phone']);

                                        const {
                                            isDirty: isUsernameDirty,
                                            error: usernameError
                                        } = form.getFieldState('username');
                                        const {isDirty: isEmailDirty, error: emailError} = form.getFieldState('email');
                                        const {isDirty: isPhoneDirty, error: phoneError} = form.getFieldState('phone');

                                        if (!isUsernameDirty && !isEmailDirty && !isPhoneDirty) {
                                            return toast.error("Please insert your details");
                                        } else if (!isUsernameDirty && !isEmailDirty) {
                                            return toast.error("Please insert your username and email");
                                        } else if (!isEmailDirty && !isPhoneDirty) {
                                            return toast.error("Please insert your email and phone number");
                                        } else if (!isUsernameDirty && !isPhoneDirty) {
                                            return toast.error("Please insert your username and phone number");
                                        } else if (!isUsernameDirty) {
                                            return toast.error("Please insert your username");
                                        } else if (!isEmailDirty) {
                                            return toast.error("Please insert your email");
                                        } else if (!isPhoneDirty) {
                                            return toast.error("Please insert your phone number");
                                        }

                                        if (usernameError?.message) {
                                            return toast.error("Your name should not be that short right?");
                                        } else if (emailError?.message) {
                                            return toast.error("Invalid email address");
                                        } else if (phoneError?.message) {
                                            return toast.error("Invalid phone number");
                                        }
                                        setFormStep(1)
                                    }}>
                                        Next Step
                                        <ArrowRight className={"w-h h-4 "}/>
                                    </Button>
                                </div>
                            </div>

                        </form>
                    </Form>
                </CardContent>

            </Card>
        </div>
    );
};

export default SignUpForm;


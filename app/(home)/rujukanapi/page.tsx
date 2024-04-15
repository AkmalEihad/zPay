'use client'
import Footer from "@/components/footer";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {Separator} from "@/components/ui/separator";
import {RujukanAPISchema} from "@/types";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@nextui-org/button";
import {Card} from "@nextui-org/card";
import {Input, Textarea} from "@nextui-org/input";
import {MoveRight} from "lucide-react";
import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {toast} from "sonner";
import {z} from "zod";

const RujukanAPI = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const form = useForm<z.infer<typeof RujukanAPISchema>>({
        resolver: zodResolver(RujukanAPISchema),
        defaultValues: {
            fullname: "",
            email: "",
            phone: "",
            permohonan: "",
        },
    })

    function onSubmit(): void {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            toast.success("Submit Successfully")
        }, 2000)
    }

    return (
        <main className={"flex flex-col w-screen overflow-y-scroll no-scrollbar"}>
            <div className={"min-h-screen p-[20px] lg:p-[50px] "}>
                <div className={"flex items-center justify-center"}>
                    <h1 className={"text-[46px] font-black"}>Rujukan API</h1>
                </div>
                <Separator className={"my-7 h-[2px]"}/>

                <div>
                    <Card
                        className="max-w-5xl w-full mx-auto rounded-2xl p-4 md:p-8 shadow-input bg-white drop-shadow-md border-1">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                <div className="grid gap-3">

                                    <FormField
                                        control={form.control}
                                        name="fullname"
                                        render={({field}) => (
                                            <FormItem>

                                                <FormControl>
                                                    <Input
                                                        label="Full Name"
                                                        variant="faded"
                                                        size="sm"
                                                        radius="lg"
                                                        disabled={isLoading}
                                                        isRequired  {...field}/>
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
                                                    <Input
                                                        type={"tel"}
                                                        label="Nombor Telefon"
                                                        variant="faded"
                                                        size="sm"
                                                        radius="lg"
                                                        disabled={isLoading}
                                                        isRequired  {...field}/>
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
                                                    <Input
                                                        label="Email"
                                                        variant="faded"
                                                        size="sm"
                                                        radius="lg"
                                                        disabled={isLoading}
                                                        isRequired  {...field}/>
                                                </FormControl>

                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="permohonan"
                                        render={({field}) => (
                                            <FormItem>

                                                <FormControl>
                                                    <Textarea
                                                        label="Permohonan"
                                                        variant="faded"
                                                        size="sm"
                                                        radius="lg"
                                                        disabled={isLoading}
                                                        description={"Sila nyatakan butiran permohonan anda"}
                                                        isRequired  {...field}/>
                                                </FormControl>

                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />

                                    <Button
                                        variant={"shadow"}
                                        isLoading={isLoading}
                                        className="rounded-2xl bg-gradient-to-br relative group/btn from-blue-700 to-sky-500 w-full text-white h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
                                        type="submit"
                                    >
                                        Submit <MoveRight size={20} strokeWidth={2}/>
                                        <BottomGradient/>
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </Card>
                </div>
            </div>
            <Footer/>
        </main>
    );
};

const BottomGradient = () => {
    return (
        <>
            <span
                className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-[1.5px] w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-blue-600 to-transparent"/>
            <span
                className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-[1.5px] w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"/>
        </>
    );
};

export default RujukanAPI;


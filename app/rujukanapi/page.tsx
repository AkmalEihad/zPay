"use client";

import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Separator} from "@/components/ui/separator"
import {Textarea} from "@/components/ui/textarea";
import {toast} from "@/components/ui/use-toast";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";


const FormSchema = z.object({
    name: z.string().min(2, {
        message: "Please enter your full name",
    }),
    phone: z.string().min(10, {
        message: "Please enter your phone number",
    }),
    email: z.string().email({
        message: "Please enter a valid email address", // Updated to include email validation
    }),
    permohonan: z.string().min(1, {
        message: "Please state the details of your request",
    }),
});

export default function FormAPI() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            permohonan: "",
        },
    });

    function onSubmit(_data: z.infer<typeof FormSchema>) {
        toast({
            title: "Success",
            description: "Your request has been submitted",
        });
    }

    return (
        <main
            className="flex items-center justify-center rounded-xl px-8 py-8 pt-2 bg-background">
            <div className={"flex flex-col w-screen"}>
                <div className={"flex flex-col items-center justify-center"}>
                    <h1 className={"max-w-[810px] font-black text-[56px]"}>Rujukan API</h1>
                    <Separator className={"bg-white "}/>
                    <p className={"pt-2 text-muted-foreground pb-10"}>Untuk mendapatkan rujukan API, sila isi borang
                        dibawah.</p>
                </div>
                <Card className={"p-[18px] "}>
                    <Form {...form}>
                        {/* Form for user input */}
                        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-4">
                            {/* Form field for full name */}
                            <FormField
                                control={form.control}
                                name="name"
                                render={({field}) => (
                                    <FormItem>
                                        <Label>Name</Label>
                                        <FormControl>
                                            <Input placeholder="Full Name" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            {/* Form field for phone number */}
                            <FormField
                                control={form.control}
                                name="phone" // Corrected the attribute name to match the schema
                                render={({field}) => (
                                    <FormItem>
                                        <Label>Phone Number</Label>
                                        <FormControl>
                                            <Input placeholder="01111547408" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            {/* Form field for phone number */}
                            <FormField
                                control={form.control}
                                name="email" // Corrected the attribute name to match the schema
                                render={({field}) => (
                                    <FormItem>
                                        <Label>Email</Label>
                                        <FormControl>
                                            <Input placeholder="zPay@example.com" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="permohonan" // Corrected the attribute name to match the schema
                                render={({field}) => (
                                    <FormItem>
                                        <Label>Permohonan</Label>
                                        <FormControl>
                                            <Textarea{...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            {/* Submit button */}
                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>
                </Card>
            </div>
        </main>
    );
}

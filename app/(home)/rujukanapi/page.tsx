"use client";

import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label";
import {Separator} from "@/components/ui/separator"
import {Toaster} from "@/components/ui/sonner";
import {Textarea} from "@/components/ui/textarea";
import {cn} from "@/lib/utils";
import React from "react";
import {toast} from "sonner";


export default function RujukanAPI() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    return (
        <div className=" mx-auto rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <h2 className="font-bold text-[40px] text-center text-neutral-800 dark:text-neutral-200">
                Rujukan API
            </h2>
            <p className={"text-center"}>
                Untuk mendapatkan rujukan API, sila isi borang dibawah.
            </p>
            <Separator className={"my-4 md:bg-black"}/>

            <form onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="name">Nama</Label>
                        <Input id="name" placeholder="Sila isikan nama penuh anda." type="text"/>
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="phone">Nombor Telefon</Label>
                        <Input id="phone" placeholder="Sila masukkan nombor telefon anda. tanpa -" type="text"/>
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" placeholder="zpay@gmail.com" type="email"/>
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="permohonan">Permohonan</Label>
                    <Textarea id="permohonan" placeholder="Sila nyatakan butiran permohonan anda"/>
                </LabelInputContainer>

                <button
                    className={"bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"}
                    type="submit"
                    onClick={() =>
                        toast.success("Success.", {
                            description: "Borang Telah di Hantar."
                        })
                    }
                >
                    Hantar &rarr;
                    <BottomGradient/>
                </button>
                <Toaster richColors closeButton/>
            </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span
                className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"/>
            <span
                className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"/>
        </>
    );
};

const LabelInputContainer = ({children, className,}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};


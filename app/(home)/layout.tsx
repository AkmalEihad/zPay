import {Providers} from "@/app/providers";
import Footer from "@/components/footer"
import Header from "@/components/header"
import "@/styles/globals.css"
import {Metadata} from 'next'
import {Poppins} from 'next/font/google'
import NextTopLoader from 'nextjs-toploader';
import React from "react";
import {Toaster} from "sonner";

export const metadata: Metadata = {
    title: 'ZNN Payment Gateway - zPay',
}

const poppins = Poppins({
    weight: ['400', '700'],
    style: ['normal', 'italic',],
    subsets: ['latin'],
    display: 'swap',
})

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {

    return (
        <html lang="en">
        <body className={poppins.className}>
        <Providers>
            <NextTopLoader/>
            <div
                className={"bg-white mx-auto flex min-h-dvh w-full min-w-[320px] flex-col "}>

                <Header/>


                <main className={"flex max-w-full flex-auto flex-col"}>


                    <div className={"container mx-auto pt-0 px-0 pb-[40px] xl:max-w-full"}>
                        {children}
                    </div>

                </main>
                <Toaster/>

                <Footer/>
            </div>
        </Providers>
        </body>
        </html>
    );
}

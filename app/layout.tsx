import Footer from "@/components/footer";
import Header from "@/components/header";
import {ThemeProvider} from "@/components/theme-provider";
import "@/app/globals.css";
import {Toaster} from "@/components/ui/toaster";
import {Roboto} from 'next/font/google'
import React from "react";
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'zPay Next',
}

const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal', 'italic',],
    subsets: ['latin'],
    display: 'swap',
})
export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {

    return (
        <html lang="en">
        <body className={roboto.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="light">

            {/* Page Container */}
            <div
                className={"bg-gradient-to-tr from-indigo-300 via-purple-100 to-teal-200 dark:from-indigo-900 dark:via-purple-900 dark:to-teal-900 dark:text-gray-100 mx-auto flex min-h-dvh w-full min-w-[320px] flex-col "}>

                {/* Import Header */}
                <Header/>


                {/* Page Content */}
                <main className={"flex max-w-full flex-auto flex-col"}>

                    {/* Page Section */}
                    <div className={"container mx-auto p-4 lg:px-[30px] py-[50px] xl:max-w-full"}>

                        {children}

                    </div>
                </main>
                <Toaster/>
                <Footer/>
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}

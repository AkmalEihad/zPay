import {TypewriterEffectSmooth} from "@/components/ui/typewritter-effect";
import banner from "@/images/zPayBanner2.jpg"
import {Button} from "@nextui-org/button";
import {Link} from "@nextui-org/link";
import {LogIn} from "lucide-react";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
    const words = [
        {
            text: "Jom",
        },
        {
            text: "Daftar",
        },
        {
            text: "Sekarang",
        },
        {
            text: "Secara",
        },
        {
            text: "PERCUMA!",
            className: "text-blue-500",
        }
    ];
    return (
        <div
            className="container mx-auto min-h-[calc(100vh-60px)] relative flex flex-col justify-center space-y-16 px-4 pt-16 text-center lg:flex-row lg:space-y-0 lg:px-8 lg:py-8 lg:text-left">
            <div className="lg:flex lg:w-1/2 lg:items-center">
                <div>
                    <h1 className="mb-4 text-4xl font-black text-black ">
                        ZNN{' '}
                        <span className="text-blue-600 ">&nbsp;Payment Gateway</span>
                    </h1>
                    <span className={"flex flex-col items-center justify-center lg:items-start"}>
                    <TypewriterEffectSmooth words={words}/>
                        </span>
                    <div
                        className="flex flex-row justify-center space-y-2 pb-16 pt-10 items-center space-x-2 space-y-0 lg:justify-start">
                        <Button
                            as={Link}
                            href="/merchant/auth"
                            variant={"shadow"}
                            className="h-full rounded-3xl inline-flex border-none bg-gradient-to-br from-blue-700 to-sky-500 shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset items-center justify-center space-x-2 px-7 py-3.5 font-semibold leading-6 text-white focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:border-blue-700 active:bg-blue-700"
                        >
                            <LogIn strokeWidth={2.5} />
                            <span>Daftar Sekarang</span>
                        </Button>
                        <Button
                            as={Link}
                            variant={"shadow"}
                            href="/pricing"
                            className="h-full rounded-3xl inline-flex items-center justify-center items-center space-x-2 border border-gray-200 bg-white px-7 py-3.5 font-semibold leading-6 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none"
                        >
                            <span>Pricing</span>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="hidden xl:pl-16 lg:flex lg:w-1/2 lg:items-center lg:justify-center">
                <div className="relative mx-5 lg:w-96">
                    <div
                        className="bg-tranparent absolute left-0 top-0 -ml-20 -mt-16 size-40 rounded-full border border-blue-200 dark:border-blue-900 lg:size-72"/>
                    <div
                        className="bg-tranparent absolute left-0 top-0 -ml-14 -mt-20 size-40 rounded-full border border-blue-100 dark:border-blue-950 lg:size-72"/>
                    <div
                        className="bg-tranparent absolute bottom-0 right-0 -mb-16 -mr-20 size-40 rounded-full border border-blue-200 dark:border-blue-900 lg:size-72"/>
                    <div
                        className="bg-tranparent absolute bottom-0 right-0 -mb-20 -mr-14 size-40 rounded-full border border-blue-100 dark:border-blue-950 lg:size-72"/>
                    <div className="absolute inset-0 -m-6 -rotate-2 rounded-xl bg-gray-200 dark:bg-gray-800"/>
                    <div
                        className="absolute inset-0 -m-6 rotate-1 rounded-xl bg-blue-800 bg-opacity-75 shadow-inner dark:bg-blue-900 dark:bg-opacity-75"/>
                    <Image
                        src={banner}
                        className="relative mx-auto rounded-xl shadow-lg max-w-[380px] h-[380px]"
                        alt="Hero Image"
                    />
                </div>
            </div>
        </div>
    )
};

export default HeroSection;

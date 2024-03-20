"use client"

import {Separator} from "@/components/ui/separator";
import Image from "next/image";
import logobank from "@/app/image/logoBank.png"

export default function Footer() {
    return (
        <footer className="flex flex-none items-center bg-geradient-to-r from-blue-900 to-blue-800">
            <div
                className="flex flex-col px-[74px] pt-[20px] pb-[32px] text-center text-sm md:flex-col md:justify-between md:text-left w-full">

                <div className="flex flex-col sm:flex-row w-full gap-4 text-white">

                    <div className={"basis-2/6"}>
                        1
                    </div>

                    <div className={"flex flex-col basis-2/6 "}>
                        <div className={"flex text-xl font-bold w-full justify-start items-start"}>
                            COMPANY
                        </div>
                        <div className={"flex flex-col w-full justify-start items-start"}>
                            <p className={"mt-4"}>About Us</p>
                            <p className={"mt-4"}>Contact</p>
                            <p className={"mt-4"}> Terms & Conditions</p>
                        </div>
                    </div>

                    <div className={"basis-2/6"}>
                        <Image src={logobank} alt={"logobank"} width={500} height={200}/>
                    </div>
                </div>
                <Separator/>

                <div className="text-white flex items-center justify-center">
                    <a
                        href="http://www.znngroup.com/"
                        className="font-medium text-white hover:text-blue-400 text-center"
                        target="_blank"
                    >
                        © 2024 zPay Malaysia Payment Gateway
                    </a>
                </div>
            </div>
        </footer>
    )
}


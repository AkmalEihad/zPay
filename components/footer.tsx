"use client"

import logo from "@/app/image/logo.png"
import logobank from "@/app/image/logoBank.jpg"
import {Separator} from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex flex-none items-center bg-gradient-to-r from-blue-900 to-blue-800">
            <div
                className="flex flex-col px-[74px] pt-[20px] pb-[32px] text-center text-sm md:flex-col md:justify-between md:text-left w-full">

                <div className="flex flex-col sm:flex-row w-full gap-4 text-white">

                    <div className={"flex flex-col basis-2/6"}>
                        <div className={"flex text-xl font-bold w-full justify-start items-start"}>
                            <Image src={logo} alt={"logo"} height={28}/>
                        </div>
                        <div className={"flex flex-col w-full justify-start items-start"}>
                            <p className={"text-left mt-4"}>
                                ZNN Sdn. Bhd.<br/>
                                A05-08, One South Street Mall,<br/>
                                Jalan SP 5/1,Serdang Perdana,<br/>
                                Sri Kembangan, 43300, Selangor
                            </p>
                            <p className={"mt-2"}>

                                <a href={"mailto:zpaymalaysia@gmail.com"}
                                   className={"text-white hover:text-neutral-200 underline"}>
                                    zpaymalaysia@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className={"flex flex-col basis-2/6 h-full"}>
                        <div className={"flex text-xl font-bold w-full justify-start items-start"}>
                            COMPANY
                        </div>
                        <div className={"flex flex-col w-full justify-start items-start h-full"}>
                            <Link href={""}><p className={"mt-4"}>About Us</p></Link>
                            <Link href={""}><p className={"mt-6"}>Contact</p></Link>
                            <Link href={""}><p className={"mt-6"}>Terms & Conditions</p></Link>
                        </div>
                    </div>

                    <div className={"basis-2/6"}>
                        <Image src={logobank} alt={"logobank"} height={152}/>
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


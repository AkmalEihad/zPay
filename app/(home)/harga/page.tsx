'use client'
import Footer from "@/components/footer";
import {Separator} from "@/components/ui/separator";
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import {Button} from "@nextui-org/button";
import {Card} from "@nextui-org/card";
import {Building2, CircleCheckBig, Clock, Tags, User, Users} from "lucide-react";
import Link from "next/link";
import React from 'react';

const Pricing = () => {
    const list = [
        {
            id: 1,
            icons: <User size={48} className={"text-blue-600"}/>,
            name: "Pakej Kasih",
            price: "RM 0.50 / Per Transaksi",
            berhak: "Agensi Kerajaan & Agensi Bukan Kerajaan (NGO) sahaja",
            details: <Accordion isCompact={true} variant={"shadow"} className={"px-2 mt-4"}>
                <AccordionItem key="3" aria-label="More Details" title="Details">
                    <ul className={"text-muted-foreground"}>
                        <li className={"flex flex-row items-center justify-start "}>
                            <div className={"mt-[2px] mr-2"}>
                                <Tags/>
                            </div>
                            Caj Tetapan : PERCUMA
                        </li>
                        <li className={"flex flex-row items-center justify-start "}>
                            <div className={"mt-[2px] mr-2"}>
                                <Tags/>
                            </div>
                            Caj Tahunan : PERCUMA
                        </li>
                        <li className={"flex flex-row items-center justify-start "}>
                            <div className={"mt-[2px] mr-2"}>
                                <Clock/>
                            </div>
                            Durasi Penetapan : 2 Hari Bekerja
                        </li>
                        <li className={"flex flex-row items-center justify-start "}>
                            <div className={"mt-[2px] mr-2"}>
                                <User/>
                            </div>
                            Akaun Penerima : Akaun Merchant
                        </li>
                        <li className={"flex flex-row items-center justify-start "}>
                            <div className={"mt-[2px] mr-2"}>
                                <CircleCheckBig/>
                            </div>
                            Settlement : Hari Yang Sama atau Hari Bekerja Seterusnya
                        </li>
                    </ul>
                </AccordionItem>
            </Accordion>
        },
        {
            id: 2,
            icons: <Users size={48} className={"text-blue-600"}/>,
            name: "Pakej Asas",
            price: "RM 1.50 / Per Transaksi",
            berhak: "Terbuka kepada semua termasuk Perusahaan Kecil dan Sederhana (PKS)",
            details: <Accordion isCompact={true} variant={"shadow"} className={"px-2 mt-4"}>
                <AccordionItem key="3" aria-label="More Details" title="Details">
                    <ul className={"text-muted-foreground"}>
                        <li className={"flex flex-row items-center justify-start "}>
                            <div className={"mt-[2px] mr-2"}>
                                <Tags/>
                            </div>
                            Caj Tetapan : PERCUMA
                        </li>
                        <li className={"flex flex-row items-center justify-start "}>
                            <div className={"mt-[2px] mr-2"}>
                                <Tags/>
                            </div>
                            Caj Tahunan : PERCUMA
                        </li>
                        <li className={"flex flex-row items-center justify-start "}>
                            <div className={"mt-[2px] mr-2"}>
                                <Clock/>
                            </div>
                            Durasi Penetapan : 2 Hari Bekerja
                        </li>
                        <li className={"flex flex-row items-center justify-start "}>
                            <div className={"mt-[2px] mr-2"}>
                                <User/>
                            </div>
                            Akaun Penerima : Akaun Merchant
                        </li>
                        <li className={"flex flex-row items-center justify-start "}>
                            <div className={"mt-[2px] mr-2"}>
                                <CircleCheckBig/>
                            </div>
                            Settlement : Hari Yang Sama atau Hari Bekerja Seterusnya
                        </li>
                    </ul>
                </AccordionItem>
            </Accordion>
        },
        {
            id: 3,
            icons: <Building2 size={48} className={"text-blue-600"}/>,
            name: "Pakej Eksekutif",
            price: "RM 0.98 / Per Transaksi",
            berhak: "Terbuka kepada semua termasuk Perusahaan Kecil dan Sederhana (PKS)",
            details: <Accordion isCompact={true} variant={"shadow"} className={"px-2 mt-4"}>
                <AccordionItem key="3" aria-label="More Details" title="Details">
                    <ul className={"text-muted-foreground"}>
                        <li className={"flex flex-row items-center justify-start "}>
                            <div className={"mt-[2px] mr-2"}>
                                <Tags/>
                            </div>
                            Caj Tetapan : RM999
                        </li>
                        <li className={"flex flex-row items-center justify-start "}>
                            <div className={"mt-[2px] mr-2"}>
                                <Tags/>
                            </div>
                            Caj Tahunan : RM399
                        </li>
                        <li className={"flex flex-row items-center justify-start "}>
                            <div className={"mt-[2px] mr-2"}>
                                <Clock/>
                            </div>
                            Durasi Penetapan : 14-20 Hari Bekerja
                        </li>
                        <li className={"flex flex-row items-center justify-start "}>
                            <div className={"mt-[2px] mr-2"}>
                                <User/>
                            </div>
                            Akaun Penerima : Akaun Anda
                        </li>
                        <li className={"flex flex-row items-center justify-start "}>
                            <div className={"mt-[2px] mr-2"}>
                                <CircleCheckBig/>
                            </div>
                            Settlement : Bayaran Terus ke Akaun Pengguna/ Peniaga
                        </li>
                    </ul>
                </AccordionItem>
            </Accordion>
        },
    ]

    return (
        <main className={"flex flex-col w-screen overflow-y-scroll no-scrollbar"}>
            <div className={"min-h-screen p-[20px] lg:p-[50px] "}>

                <div className={"flex items-center justify-center"}>
                    <h1 className={"text-[46px] font-black"}>Pakej zPay</h1>
                </div>
                <Separator className={"my-7 h-[2px]"}/>

                <div className="max-w-7xl w-full mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {list.map((list) => {
                        return (
                            <Card key={list.id}
                                  className="w-full mx-auto rounded-2xl p-4 md:p-8 shadow-input bg-white drop-shadow-md border-1">
                                {list.icons}
                                <h4 className="mb-2 text-lg font-bold">
                                    {list.name}
                                </h4>
                                <p className="mb-2 leading-relaxed font-bold text-xl text-gray-800 ">
                                    {list.price}
                                </p>
                                <Separator className={"bg-muted-foreground my-2"}/>
                                <p className="sm:h-[78px] xl:h-[52px] text-pretty leading-relaxed text-gray-600 ">
                                    {list.berhak}
                                </p>
                                {list.details}
                                <div className={"flex items-end justify-start mt-4"}>
                                    <Button href={'/merchant/auth'} as={Link} variant={"shadow"}
                                            className={"bg-gradient-to-br from-blue-700 rounded-2xl to-sky-500 shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset text-white"}>Daftar</Button>
                                </div>
                            </Card>
                        )
                    })}
                </div>
            </div>
            <Footer/>
        </main>

    );
};

export default Pricing;
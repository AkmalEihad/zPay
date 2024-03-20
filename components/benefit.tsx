import {Separator} from "@/components/ui/separator";
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {IconCoinOff, IconDevices, IconSettingsBolt, IconShieldCheck, IconZoomMoney} from '@tabler/icons-react';
import React from "react";
import {HiOutlineUserGroup} from "react-icons/hi2";

export default function BenefitCard() {

    return (
        <main className={"z-1 flex flex-col p-[30px] md:p-[60px] lg:mx-[150px] lg:py-[50px]  lg:px-0 w-full"}>
            <div className={"flex items-start justify-center"}>
                <h1 className={"font-bold text-[#506ee4] h-[45px] text-[40px]"}>Kelebihan zPay</h1>
            </div>
            <Separator/>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 w-full">
                <Card className="max-w-full p-[30px] lg:p-[40px]">
                    <CardHeader className={"p-0"}>
                        <div className="flex flex-col">
                            <IconZoomMoney size={40} stroke={1.4}/>
                        </div>
                    </CardHeader>
                    <CardBody className={"p-0"}>
                        <h1 className="text-md font-semibold text-[#506ee4]">Tiada Caj Tersembunyi</h1>
                        <p className="text-sm text-[#506ee4]/85">Kami mengutamakan perniagaan anda dan tiada sebarang caj
                            tambahan dikenakan.</p>
                    </CardBody>
                </Card>
                <Card className="max-w-full p-[30px] lg:p-[40px] ">
                    <CardHeader className={"p-0"}>
                        <div className="flex flex-col">
                            <IconSettingsBolt size={40} stroke={1.4}/>
                        </div>
                    </CardHeader>
                    <CardBody className={"p-0"}>
                        <h1 className="text-md font-semibold text-[#506ee4]">Mudah dan Pantas</h1>
                        <p className="text-sm text-[#506ee4]/85">Konfigurasi yang mudah dan pantas, langgan dan terus
                            guna.</p>
                    </CardBody>
                </Card>
                <Card className="max-w-full p-[30px] lg:p-[40px] ">
                    <CardHeader className={"p-0"}>
                        <div className="flex flex-col">
                            <IconCoinOff size={40} stroke={1.4}/>
                        </div>
                    </CardHeader>
                    <CardBody className={"p-0"}>
                        <h1 className="text-md font-semibold text-[#506ee4]">Pendaftaran Percuma</h1>
                        <p className="text-sm text-[#506ee4]/85">Tiada caj pendaftaran dan penetapan akaun. Anda akan
                            menerima semua kelebihan zPay dengan pendaftaran percuma.</p>
                    </CardBody>
                </Card>
                <Card className="max-w-full p-[30px] lg:p-[40px] ">
                    <CardHeader className={"p-0"}>
                        <div className="flex flex-col">
                            <HiOutlineUserGroup size={40} strokeWidth={1.4}/>

                        </div>
                    </CardHeader>
                    <CardBody className={"p-0"}>
                        <h1 className="text-md font-semibold text-[#506ee4]">Pelbagai Penggunaan</h1>
                        <p className="text-sm text-[#506ee4]/85">Sesuai untuk pengeluaran bil secara dalam talian, derma,
                            bayaran invois, bil, e-dagang, tiket dan lain-lain.</p>
                    </CardBody>
                </Card>
                <Card className="max-w-full p-[30px] lg:p-[40px] ">
                    <CardHeader className={"p-0"}>
                        <div className="flex flex-col">
                            <IconShieldCheck size={40} stroke={1.4}/>
                        </div>
                    </CardHeader>
                    <CardBody className={"p-0"}>
                        <h1 className="text-md font-semibold text-[#506ee4]">Perlindungan data</h1>
                        <p className="text-sm text-[#506ee4]/85">Perindungan data akibat daripada pencerobohan.
                            Perniagaan yang lebih terjamin dan terpelihara.</p>
                    </CardBody>
                </Card>
                <Card className="max-w-full p-[30px] lg:p-[40px] ">
                    <CardHeader className={"p-0"}>
                        <div className="flex flex-col">
                            <IconDevices size={40} stroke={1.4}/>
                        </div>
                    </CardHeader>
                    <CardBody className={"p-0"}>
                        <h1 className="text-md font-semibold text-[#506ee4]">Sokongan Pelbagai Platform</h1>
                        <p className="text-sm text-[#506ee4]/85">Perkhidmatan sokongan yang efisyen. Kami akan sentiasa
                            ada untuk membantu melengkapkan invois pertama anda seterusnya mula menerima pembayaran.</p>
                    </CardBody>
                </Card>


            </div>
        </main>
    )
}
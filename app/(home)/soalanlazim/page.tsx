"use client";

import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion"
import {Card} from "@/components/ui/card";

import {Separator} from "@/components/ui/separator"

export default function SoalanLazim() {
    return (
        <main
            className="flex items-center justify-center rounded-xl bg-background px-8 py-8 pt-2  ">
            <div className={"flex flex-col w-screen"}>
                <div className={"flex flex-col items-center justify-center"}>
                    <h1 className={"font-black text-[56px]"}>Soalan Lazim</h1>
                </div>
                <Separator/>
                <div className={"space-y-[5px]"}>
                    <h1 className={"pt-4 font-black text-[45px]"}>Tetapan Akaun</h1>
                    <Card className={"px-5"}>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Bagaimana untuk mendaftar</AccordionTrigger>
                                <AccordionContent className={"text-muted-foreground"}>
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    Anda boleh melayari laman sesawang zpay.my dan klik pada butang 'Daftar'.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </Card>
                    <Card className={"px-5"}>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Bagaimana untuk mendapatkan rujukan API?</AccordionTrigger>
                                <AccordionContent className={"text-muted-foreground"}>

                                    Anda boleh mendapatkan rujukan API dengan melayari laman sesawang zpay.my dan klik
                                    pada
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    butang 'Rujukan API'.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </Card>

                    <h1 className={"pt-4 font-black text-[45px]"}>Pendaftaran dan Pengesahan</h1>
                    <Card className={"px-5"}>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Bagaimana untuk mendaftar sebagai pengguna?</AccordionTrigger>
                                <AccordionContent className={"text-muted-foreground"}>
                                    Anda boleh mendaftar di laman sesawang zpay.my dan kilk pada butang “Daftar” dan
                                    maklumat anda akan disahkan sebelum anda mendapat akaun anda.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </Card>
                    <Card className={"px-5"}>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Bagaimana untuk mengubah alamat email berdaftar
                                    saya?</AccordionTrigger>
                                <AccordionContent className={"text-muted-foreground"}>
                                    <p>Sila email permohonan anda ke <a className={"text-primary"}
                                                                        href={"mailto:zpaymalaysia@gmail.com"}>zpaymalaysia@gmail.com</a>
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </Card>
                    <Card className={"px-5"}>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Bagaimana untuk mengubah kata laluan saya?</AccordionTrigger>
                                <AccordionContent className={"text-muted-foreground"}>
                                    Sila log masuk ke akaun anda dan klik pada “Ubah kata laluan” untuk mengubah kata
                                    laluan
                                    anda.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </Card>
                    <Card className={"px-5"}>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Bagaimana untuk mengubah butiran akaun bank saya?</AccordionTrigger>
                                <AccordionContent className={"text-muted-foreground"}>
                                    <p>Sila emailkan permohonan anda beserta butiran peribadi anda dan butiran akaun
                                        bank
                                        lama
                                        dan baru ke email <a className={"text-primary"}
                                                             href={"mailto:zpaymalaysia@gmail.com"}>zpaymalaysia@gmail.com</a>
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </Card>

                    <h1 className={"pt-4 font-black text-[45px]"}>Kredit dan Prabayar</h1>
                    <Card className={"px-5"}>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Adakah pelanggan perlu membayar menggunakan perkhidmatan kredit atau
                                    prabayar?</AccordionTrigger>
                                <AccordionContent className={"text-muted-foreground"}>
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    Kami tidak mengenakan sebarang cas tambahan melalui perkhidmatan kredit atau
                                    prabayar.
                                    Segala amaun pembayaran akan dilunaskan semasa proses transaksi.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </Card>

                    <h1 className={"pt-4 font-black text-[45px]"}>Kaedah Pembayaran</h1>
                    <Card className={"px-5"}>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Mengapa pelanggan saya gagal untuk membayar melaui kaedah perbankan di
                                    atas talian /FPX?</AccordionTrigger>
                                <AccordionContent className={"text-muted-foreground"}>
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    Kegagalan pembayaran atas pelbagai faktor boleh berlaku dan ianya diluar kawalan
                                    pihak
                                    zPay dan pihak bank.<br/>
                                    Sila ajukan permohonan anda untuk membuat bayaran secara bersemuka
                                    di bank yang berdaftar dengan zPay pada masa bekerja.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </Card>

                    <h1 className={"pt-4 font-black text-[45px]"}>Settlement</h1>
                    <Card className={"px-5"}>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Cas Settlement</AccordionTrigger>
                                <AccordionContent className={"text-muted-foreground"}>
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    <p>Sila email ke <a className={"text-primary"}
                                                        href={"mailto:zpaymalaysia@gmail.com"}>zpaymalaysia@gmail.com</a> untuk
                                        maklumat lebih lanjut.</p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </Card>
                    <Card className={"px-5"}>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Waktu Operasi</AccordionTrigger>
                                <AccordionContent className={"text-muted-foreground"}>
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    <p>zPay tidak menyelesaikan settlement pada hari Sabtu, Ahad dan cuti umum.<br/>
                                        Setlement akan mengambil masa selama 1 hari bekerja ( pada bila - bila masa
                                        antara
                                        00:00 hingga 23:59.<br/>
                                        Harap maklum bahawa kelewatan pembayaran berkemungkinan boleh berlaku sekiranya
                                        pihak bank melaksanakan penyelenggaraan sistem.</p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </Card>
                    <Card className={"px-5"}>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Bagaimana untuk memindahkan deposit settlement pada akaun bank yang
                                    baru?</AccordionTrigger>
                                <AccordionContent className={"text-muted-foreground"}>
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    <p>Anda hanya dapat memindahkan deposit settlement anda jika akaun semasa anda
                                        ditutup
                                        dan tidak aktif atas alasan – alasan tertentu.<br/>
                                        Cas pemindahan deposit settlement adalah percuma<br/>
                                        Sila hantarkan permohonan anda beserta butiran peribadi dan perincian bank
                                        menggunakan emel yang telah didaftarkan atas akaun anda ke <a
                                            className={"text-primary"}
                                            href={"mailto:zpaymalaysia@gmail.com"}>zpaymalaysia@gmail.com</a>
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </Card>
                    <Card className={"px-5"}>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Bagaimana untuk membuat pembayaran balik kepada pelanggan menggunakan
                                    deposit settlement?</AccordionTrigger>
                                <AccordionContent className={"text-muted-foreground"}>
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    <p>Harap maaf, kami tidak dapat melakukan pembayaran balik menggunakan deposit
                                        settlement anda walaupun pelanggan anda melakukan pembayaran sebanyak dua kali
                                        atau
                                        lebih kerana ianya melanggar polisi kami. Sila membuat pembayaran balik selepas
                                        proses settlement anda selesai.</p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </Card>
                </div>
            </div>
        </main>
    );
}

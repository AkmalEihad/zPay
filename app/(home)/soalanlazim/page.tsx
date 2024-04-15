'use client'
import Footer from "@/components/footer";
import {Separator} from "@/components/ui/separator";
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import {Tab, Tabs} from "@nextui-org/tabs";

const SoalanLazimPage = () => {
    return (
        <main className={"flex flex-col w-screen overflow-y-scroll no-scrollbar"}>
            <div className={"min-h-screen p-[20px] lg:p-[50px] "}>
                <div className={"flex items-center justify-center"}>
                    <h1 className={"text-[46px] font-black"}>Soalan Lazim</h1>
                </div>
                <Separator className={"my-7 h-[2px]"}/>

                <div>
                    <Tabs aria-label="Options" fullWidth={true} color={"primary"} variant={"solid"} radius={"full"}
                          classNames={{
                              tabList: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-zinc-200 rounded-[19px]",
                              tabContent: "w-full group-data-[selected=true]:text-[#FFFFFF]",
                          }}>
                        <Tab key="Tetapan Akaun" title={
                            <div className={"flex items-center justify-center w-full"}>
                                <span>Tetapan Akaun</span>
                            </div>
                        }>
                            <h1 className={"text-[30px] font-bold m-2"}>Tetapan Akaun</h1>
                            <Accordion variant="splitted">
                                <AccordionItem key="1" aria-label="Bagaimana untuk mendaftar?"
                                               title="Bagaimana untuk mendaftar?"
                                               className={"text-muted-foreground"}>
                                    <p>Anda boleh melayari laman sesawang zpay.my dan klik pada
                                        butang &apos;Daftar&apos;.</p>
                                </AccordionItem>
                                <AccordionItem key="2" aria-label="Bagaimana untuk mendapatkan rujukan API?"
                                               title="Bagaimana untuk mendapatkan rujukan API?"
                                               className={"text-muted-foreground "}>
                                    <p>Anda boleh mendapatkan rujukan API dengan melayari laman sesawang zpay.my dan
                                        klik
                                        pada</p>
                                    butang &apos;Rujukan API&apos;.
                                </AccordionItem>
                            </Accordion>
                        </Tab>

                        <Tab key="Pendaftaran & Pengesahan" title={
                            <div className={"flex items-center justify-center w-full"}>
                                <span>Pendaftaran & Pengesahan</span>
                            </div>
                        }>
                            <h1 className={"text-[30px] font-bold m-2"}>Pendaftaran & Pengesahan</h1>
                            <Accordion variant="splitted">
                                <AccordionItem key="3" aria-label="Bagaimana untuk mendaftar sebagai pengguna?"
                                               title="Bagaimana untuk mendaftar sebagai pengguna?"
                                               className={"text-muted-foreground "}>
                                    <p>Anda boleh mendaftar di laman sesawang zpay.my dan kilk pada butang “Daftar” dan
                                        maklumat
                                        anda akan disahkan sebelum anda mendapat akaun anda.</p>
                                </AccordionItem>
                                <AccordionItem key="4"
                                               aria-label="Bagaimana untuk mengubah alamat email berdaftar saya?"
                                               title="Bagaimana untuk mengubah alamat email berdaftar saya?"
                                               className={"text-muted-foreground "}>
                                    <p>Sila email permohonan anda ke&nbsp;
                                        <a className={"text-blue-500"}
                                           href={"mailto:zpaymalaysia@gmail.com"}>
                                            zpaymalaysia@gmail.com</a>
                                    </p>
                                </AccordionItem>
                                <AccordionItem key="5" aria-label="Bagaimana untuk mengubah kata laluan saya?"
                                               title="Bagaimana untuk mengubah kata laluan saya?"
                                               className={"text-muted-foreground "}>
                                    <p>Sila log masuk ke akaun anda dan klik pada “Ubah kata laluan” untuk mengubah kata
                                        laluan
                                        anda.</p>
                                </AccordionItem>
                                <AccordionItem key="6" aria-label="Bagaimana untuk mengubah butiran akaun bank saya?"
                                               title="Bagaimana untuk mengubah butiran akaun bank saya?"
                                               className={"text-muted-foreground "}>
                                    <p>Sila emailkan permohonan anda beserta butiran peribadi anda dan butiran akaun
                                        bank
                                        lama dan
                                        baru ke email&nbsp;
                                        <a className={"text-blue-500"}
                                           href={"mailto:zpaymalaysia@gmail.com"}>
                                            zpaymalaysia@gmail.com
                                        </a>
                                    </p>
                                </AccordionItem>
                            </Accordion>
                        </Tab>

                        <Tab key="Kredit dan Prabayar" title={
                            <div className={"flex items-center justify-center w-full"}>
                                <span>Kredit dan Prabayar</span>
                            </div>
                        }>
                            <h1 className={"text-[30px] font-bold m-2"}>Kredit dan Prabayar</h1>
                            <Accordion variant="splitted">
                                <AccordionItem key="7" aria-label="Adakah pelanggan perlu membayar menggunakan perkhidmatan kredit atau
                                    prabayar?"
                                               title="Adakah pelanggan perlu membayar menggunakan perkhidmatan kredit atau
                                    prabayar?"
                                               className={"text-muted-foreground "}>
                                    <p>Kami tidak mengenakan sebarang cas tambahan melalui perkhidmatan kredit atau
                                        prabayar. Segala
                                        amaun pembayaran akan dilunaskan semasa proses transaksi.</p>
                                </AccordionItem>
                            </Accordion>
                        </Tab>

                        <Tab key="Kaedah Pembayaran" title={
                            <div className={"flex items-center justify-center w-full"}>
                                <span>Kaedah Pembayaran</span>
                            </div>
                        }>
                            <h1 className={"text-[30px] font-bold m-2"}>Kaedah Pembayaran</h1>
                            <Accordion variant="splitted">
                                <AccordionItem key="8" aria-label="Mengapa pelanggan saya gagal untuk membayar melaui kaedah perbankan di
                                    atas talian /FPX?"
                                               title="Mengapa pelanggan saya gagal untuk membayar melaui kaedah perbankan di
                                    atas talian /FPX?"
                                               className={"text-muted-foreground "}>
                                    <p>Kegagalan pembayaran atas pelbagai faktor boleh berlaku dan ianya diluar kawalan
                                        pihak zPay
                                        dan pihak bank.<br/>Sila ajukan permohonan anda untuk membuat bayaran secara
                                        bersemuka di
                                        bank yang berdaftar dengan zPay pada masa bekerja.</p>
                                </AccordionItem>
                            </Accordion>
                        </Tab>

                        <Tab key="Settlement" title={
                            <div className={"flex items-center justify-center w-full"}>
                                <span>Settlement</span>
                            </div>
                        }>
                            <h1 className={"text-[30px] font-bold m-2"}>Settlement</h1>
                            <Accordion variant="splitted">
                                <AccordionItem key="9" aria-label="Cas Settlement"
                                               title="Cas Settlement"
                                               className={"text-muted-foreground "}>
                                    <p>Sila email ke&nbsp;
                                        <a className={"text-blue-500"}
                                           href={"mailto:zpaymalaysia@gmail.com"}>
                                            zpaymalaysia@gmail.com
                                        </a> untuk maklumat lebih lanjut.</p>
                                </AccordionItem>
                                <AccordionItem key="10" aria-label="Waktu Operasi"
                                               title="Waktu Operasi"
                                               className={"text-muted-foreground "}>
                                    <p>zPay tidak menyelesaikan settlement pada hari Sabtu, Ahad dan cuti umum.<br/>Setlement
                                        akan
                                        mengambil masa selama 1 hari bekerja ( pada bila - bila masa antara 00:00 hingga
                                        23:59.<br/>Harap
                                        maklum bahawa kelewatan pembayaran berkemungkinan boleh berlaku sekiranya pihak
                                        bank
                                        melaksanakan penyelenggaraan sistem.</p>
                                </AccordionItem>
                                <AccordionItem key="11"
                                               aria-label="Bagaimana untuk memindahkan deposit settlement pada akaun bank yang baru?"
                                               title="Bagaimana untuk memindahkan deposit settlement pada akaun bank yang baru?"
                                               className={"text-muted-foreground "}>
                                    <p>Anda hanya dapat memindahkan deposit settlement anda jika akaun semasa anda
                                        ditutup
                                        dan tidak
                                        aktif atas alasan – alasan tertentu.<br/>Cas pemindahan deposit settlement
                                        adalah
                                        percuma<br/>Sila hantarkan permohonan anda beserta butiran peribadi dan
                                        perincian
                                        bank
                                        menggunakan emel yang telah didaftarkan atas akaun anda ke&nbsp;
                                        <a
                                            className={"text-primary"}
                                            href={"mailto:zpaymalaysia@gmail.com"}>
                                            zpaymalaysia@gmail.com
                                        </a>
                                    </p>
                                </AccordionItem>
                                <AccordionItem key="12"
                                               aria-label="Bagaimana untuk membuat pembayaran balik kepada pelanggan menggunakan deposit settlement?"
                                               title="Bagaimana untuk membuat pembayaran balik kepada pelanggan menggunakan deposit settlement?"
                                               className={"text-muted-foreground "}>
                                    <p>Harap maaf, kami tidak dapat melakukan pembayaran balik menggunakan deposit
                                        settlement anda
                                        walaupun pelanggan anda melakukan pembayaran sebanyak dua kali atau lebih kerana
                                        ianya
                                        melanggar polisi kami. Sila membuat pembayaran balik selepas proses settlement
                                        anda
                                        selesai.
                                    </p>

                                </AccordionItem>
                            </Accordion>
                        </Tab>
                    </Tabs>
                </div>
            </div>
                <Footer/>
        </main>
);
};

export default SoalanLazimPage;
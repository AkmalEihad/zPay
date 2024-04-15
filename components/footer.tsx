import {Card} from "@nextui-org/card";
import logo from "@/images/logozPay.png"
import {Image} from "@nextui-org/image";
import NextImage from "next/image";
import {Link} from "@nextui-org/link";
import React from 'react';

const Footer = () => {
    return (
        <footer
            className="bg-gradient-to-br from-blue-900 to-blue-800 text-center text-white lg:text-left">
            <div className="mx-6 py-[24px] text-center md:text-left">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
                    <div className="col-span-2">
                        <div
                            className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start  w-[64px] h-[64px]">
                            <NextImage src={logo} alt={"logo"}/>
                        </div>
                        <p>
                            No 3A & 3B, Jalan Pendidikan 8, U-Point Business Centre, Taman Universiti, 81300 Skudai,
                            Johor
                        </p>
                        <p>
                            <a className="text-white hover:text-yellow-300 underline"
                               href={"mailto:zpaymalaysia@gmail.com"}>zpaymalaysia@gmail.com</a>
                        </p>
                    </div>
                    <div>
                        <h6
                            className="text-white mb-6 flex justify-center font-semibold uppercase md:justify-start">
                            Company
                        </h6>
                        <p className="mb-4">
                            <a href="#" className={"text-white hover:text-yellow-300"}>About Us</a>
                        </p>
                        <p className="mb-4">
                            <a href="#" className={"text-white hover:text-yellow-300"}>Contact</a>
                        </p>
                        <p className="mb-4">
                            <a href="#" className={"text-white hover:text-yellow-300"}>Terms and Conditions</a>
                        </p>
                    </div>
                    <div>
                        <h6
                            className="mb-6 flex justify-center font-semibold uppercase md:justify-start">
                            Useful links
                        </h6>

                        <p className="mb-4">
                            <a href="/soalanlazim" className={"text-white hover:text-yellow-300"}>Soalan Lazim</a>
                        </p>
                        <p className="mb-4">
                            <a href="/rujukanapi" className={"text-white hover:text-yellow-300"}>Rujukan API</a>
                        </p>
                        <p className="mb-4">
                            <a href="/harga" className={"text-white hover:text-yellow-300"}>Pricing</a>
                        </p>
                        <p className="mb-4">
                            <a href="/merchant/auth" className={"text-white hover:text-yellow-300"}>Daftar Merchant</a>
                        </p>
                    </div>
                    <div className={"col-span-2"}>
                        <h6
                            className="mb-6 flex justify-center font-semibold uppercase md:justify-start">
                            Registered and verfied with :
                        </h6>
                        <Card className={"p-1 grid place-items-center grid-cols-3 drop-shadow-md"}>
                            <div>
                                <Image radius={"none"}
                                       src={"https://zpay.my/wp-content/uploads/PicsArt_10-14-09.41.31new.png"}
                                       alt="fpx"
                                       width={70}
                                       height={70}
                                />
                            </div>
                            <div>
                                <Image radius={"none"}
                                       src={"https://zpay.my/wp-content/uploads/PicsArt_10-14-09.43.43new.png"}
                                       alt="paynet"
                                       width={115}
                                       height={40}
                                />
                            </div>
                            <div>
                                <Image radius={"none"} src={"https://zpay.my/wp-content/uploads/visa.png"}
                                       alt="visa"
                                       width={70}
                                       height={30}
                                />
                            </div>
                            <div>
                                <Image radius={"none"} src={"https://zpay.my/wp-content/uploads/bimb3.png"}
                                       alt="bankislam"
                                       width={115}
                                       height={70}
                                />
                            </div>
                            <div>
                                <Image radius={"none"}
                                       src={"https://zpay.my/wp-content/uploads/Bank-Negara-Malaysia-02new.png"}
                                       alt="bankmalaysia"
                                       width={50}
                                       height={56.44}
                                />
                            </div>
                            <div>
                                <Image radius={"none"}
                                       src={"https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Emblem.png"}
                                       alt="mastercard"
                                       width={115}
                                       height={70}
                                />
                            </div>
                        </Card>
                    </div>
                </div>
            </div>

            <div className=" bg-black/5 lg:p-6 text-center">
                <span>&copy; 2024&nbsp;</span>
                <Link color={"secondary"} href="https://www.znngroup.com/">
                    zPay Payment Gateway
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
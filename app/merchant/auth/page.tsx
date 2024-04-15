'use client'

import SignInForm from "@/components/signInForm";
import SignUpForm from "@/components/signUpForm";
import logo from '@/images/logozPay.png'
import sideImage from '@/images/sideImage.jpg'
import {Button} from "@nextui-org/button";
import {Tab, Tabs} from "@nextui-org/tabs";
import Image from "next/image"
import Link from "next/link"
import React, {useState} from "react";


const SignInSignUpPage = () => {
    const [selected, setSelected] = useState("sign-in");
    return (
        <main>
            <div
                className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                {/*Image Side*/}
                <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
                    <div className="absolute inset-0 bg-black">
                        <Image src={sideImage} alt={"Side Image"} className={"h-screen w-full object-cover"}/>
                    </div>
                    <div className="relative flex items-end justify-start text-lg font-medium ">
                        <Link href={'/'}>
                            <Button variant={"light"} className={"hover:bg-neutral-700 rounded-2xl"}>
                                <Image src={logo} className={"invert"} alt={"logo"} width={"60"} height={"60"}/>
                            </Button>
                        </Link>
                    </div>
                </div>

                {/*Form Side*/}
                <div className="h-screen flex items-start justify-center px-10 py-20">
                    <div className="mx-auto flex w-full justify-center flex-col space-y-6 sm:w-[400px]">
                        <Tabs
                            fullWidth
                            size="md"
                            radius={"lg"}
                            color={"primary"}
                            aria-label="Tabs form"
                            selectedKey={selected}
                            onSelectionChange={(key) => setSelected(key as string)}
                            classNames={{
                                tabList: "bg-zinc-200",
                                tabContent: "w-full  group-data-[selected=true]:text-[#FFFFFF]"
                            }}
                        >

                            <Tab key="sign-in" title="Login">
                                <SignInForm/>
                            </Tab>
                            <Tab key="sign-up" title="Register">
                                <SignUpForm/>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SignInSignUpPage;

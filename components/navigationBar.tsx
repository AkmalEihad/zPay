'use client'
import logo from '@/images/logozPay.png';
import {Button} from '@nextui-org/button';
import {Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger} from "@nextui-org/dropdown";
import {Navbar as NextNavBar, NavbarBrand, NavbarContent, NavbarItem} from '@nextui-org/navbar';
import {CircleHelp, Home, Menu, MoveRight, Tags, Webhook} from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import {usePathname} from "next/navigation";
import React from 'react';

const NavBar = () => {

    const navItem = [
        {
            id: 1,
            link: "/",
            icon: <Home strokeWidth={2.5}/>,

            name: "Dashboard",
        },
        {
            id: 2,
            link: "/soalanlazim",
            icon: <CircleHelp strokeWidth={2.5}/>,
            name: "Soalan Lazim",
        },
        {
            id: 3,
            link: "/rujukanapi",
            icon: <Webhook strokeWidth={2.5}/>,
            name: "API",
        },
        {
            id: 4,
            link: "/harga",
            icon: <Tags strokeWidth={2.5}/>,
            name: "Pricing",
        },

    ]
    const pathname = usePathname();

    return (
        <NextNavBar height={"3.75rem"} maxWidth={"xl"} isBlurred={false}
                    className={"bg-gradient-to-r from-blue-900 to-blue-800"}>
            <NavbarBrand>
                <Image src={logo} alt={"logo"} height={40} quality={100}/>
            </NavbarBrand>

            <NavbarContent className="hidden lg:flex h-12 ml-4 px-[4.5px] gap-1"
                           justify="center">
                {navItem.map(navItem => {
                    return (
                        <NavbarItem key={navItem.id} className={"flex items-center p-0 m-0"}>
                            <Link href={navItem.link} className={"w-full"}>
                                <Button variant={"ghost"} color={"secondary"}
                                        className={`group h-10 min-w-10 px-[9px] gap-[4px] rounded-2xl border-none ${pathname === navItem.link ? "bg-secondary" : ""}`}>
                                    <span
                                        className={`group-hover:text-blue-600 text-default-300 ${pathname === navItem.link ? "text-primary" : ""}`}>
                                    {navItem.icon}
                                        </span>
                                    <span
                                        className={`flex items-center pt-[1px] w-fit h-[12px] align-text-bottom text-default-200 px-[4px] group-hover:text-blue-600 group-hover:font-bold ${pathname === navItem.link ? "text-primary font-bold" : ""}`}>
                                    {navItem.name}
                                    </span>
                                </Button>
                            </Link>
                        </NavbarItem>
                    )
                })}
            </NavbarContent>

            <NavbarContent className={"flex px-[4.5px] bg-transparent rounded-full h-12 max-w-fit gap-0"}
                           justify="end">
                <NavbarItem className={"flex items-center p-0 m-0"}>
                    <Link href={'/merchant/auth'} className={"w-full"}>
                        <Button radius={"full"} variant={"ghost"} color={"secondary"}
                                className={"group h-10 min-w-10 px-[9px] border-none bg-white/30 backdrop-blur-md gap-0"}>
                            <span
                                className={"flex items-center w-fit pt-[1px] h-[24px] align-text-bottom text-white px-[4px] group-hover:text-blue-600 group-hover:font-bold"}>
                                    Sign in
                            </span>
                            <MoveRight strokeWidth={2.5}
                                       className={"group-hover:stroke-blue-600 text-default-300"}/>
                        </Button>
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className={"lg:hidden group flex px-[4px] bg-none  m-0 rounded-full h-12 max-w-fit gap-0"}
                           justify="end">
                <Dropdown backdrop={"blur"}>

                    <DropdownTrigger className={"flex p-0 m-0"}>
                        <Button radius={"full"} isIconOnly variant={"light"}
                                className={"h-10 min-w-10 p-0 bg-white hover:bg-white hover:ring-2  ring-offset-white"}>
                            <Menu strokeWidth={2.5} className={"group-hover:stroke-blue-600"}/>
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Link Actions">
                        <DropdownSection showDivider>
                            {navItem.map(navItem => {
                                return (
                                    <DropdownItem key={navItem.id} href={navItem.link}>
                                        {navItem.name}
                                    </DropdownItem>
                                )
                            })}
                        </DropdownSection>
                        <DropdownItem key="logout" className="text-danger" color="danger" href={'/authentication'}>
                            Logout
                        </DropdownItem>
                    </DropdownMenu>

                </Dropdown>
            </NavbarContent>
        </NextNavBar>);
};

export default NavBar;

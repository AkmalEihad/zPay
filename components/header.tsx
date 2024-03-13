"use client"

import logo from "@/app/image/logo.png";
import {LogoutMobile, LogoutPc} from "@/components/ui/logout";
import ModeToggle from "@/components/ui/modeToggle";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import * as React from "react";
import {useState} from "react";

export default function Header() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const pathname = usePathname();


    return (
        <header
            className={"z-1 flex flex-none items-center shadow-sm bg-white dark:bg-zinc-950 backdrop-filter backdrop-blur-lg bg-opacity-40"}>

            <div className={"container mx-auto px-4 lg:px-[50px] xl:max-w-full "}>
                <div className={"flex justify-between py-4"}>

                    <div className={"flex items-center"}>
                        <Link href="/"
                              className={"group inline-flex items-center space-x-2 text-lg font-bold tracking-wide text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"}>
                            <Image className={"dark:invert-0 invert"} src={logo} alt={"logo"} width={50} height={50}/>
                        </Link>
                    </div>

                    <div className={"flex items-center space-x-2 lg:space-x-5"}>

                        <nav className={"hidden items-center space-x-2 lg:flex"}>

                            <Link
                                href={"/"}
                                className={`group flex items-center space-x-2 rounded-xl border border-transparent px-3 py-2 text-sm font-medium ${pathname === "/" ? "text-blue-600 bg-blue-100 dark:bg-zinc-700/75 dark:text-white font-semibold" : "text-blue-600"} hover:text-blue-600 active:border-blue-100 dark:text-gray-300 dark:hover:bg-zinc-700 dark:hover:text-white dark:active:border-gray-600`}
                            >
                                <svg
                                    className={`hi-mini hi-users inline-block size-5  ${pathname === "/" ? 'opacity-100' : 'opacity-25'} group-hover:opacity-100`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>Home</span>
                            </Link>

                            <Link
                                href={"/soalanlazim"}
                                className={`group flex items-center space-x-2 rounded-xl border border-transparent px-3 py-2 text-sm font-medium ${pathname === "/soalanlazim" ? "text-blue-600 bg-blue-100 dark:bg-zinc-700/75 dark:text-white font-semibold" : "text-blue-600"} hover:text-blue-600 active:border-blue-100 dark:text-gray-300 dark:hover:bg-zinc-700 dark:hover:text-white dark:active:border-gray-600`}
                            >
                                <svg
                                    className={`hi-mini hi-users inline-block size-5  ${pathname === "/soalanlazim" ? 'opacity-100' : 'opacity-25'} group-hover:opacity-100`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path fillRule="evenodd"
                                          d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                                          clipRule="evenodd"
                                    />
                                </svg>
                                <span>Soalan Lazim</span>
                            </Link>

                            <Link
                                href={"/rujukanapi"}
                                className={`group flex items-center space-x-2 rounded-xl border border-transparent px-3 py-2 text-sm font-medium ${pathname === "/rujukanapi" ? "text-blue-600 bg-blue-100 dark:bg-zinc-700/75 dark:text-white font-semibold" : "text-blue-600"} hover:text-blue-600 active:border-blue-100 dark:text-gray-300 dark:hover:bg-zinc-700 dark:hover:text-white dark:active:border-gray-600`}
                            >
                                <svg
                                    className={`hi-mini hi-code inline-block size-5 ${pathname === "/rujukanapi" ? 'opacity-100' : 'opacity-25'} group-hover:opacity-100`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path fillRule="evenodd"
                                          d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                                          clipRule="evenodd"/>
                                </svg>
                                <span>API</span>
                            </Link>

                            <Link
                                href={"/pricing"}
                                className={`group flex items-center space-x-2 rounded-xl border border-transparent px-3 py-2 text-sm font-medium ${pathname === "/pricing" ? "text-blue-600 bg-blue-100 dark:bg-zinc-700/75 dark:text-white font-semibold" : "text-blue-600"} hover:text-blue-600 active:border-blue-100 dark:text-gray-300 dark:hover:bg-zinc-700 dark:hover:text-white dark:active:border-gray-600`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 24 24" fill="currentColor"
                                     className={`hi-mini hi-bold inline-block size-5 ${pathname === "/pricing" ? 'opacity-100' : 'opacity-25'} group-hover:opacity-100`}
                                >
                                    <path fillRule="evenodd"
                                          d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                                          clipRule="evenodd"/>
                                </svg>
                                <span>Pricing</span>
                            </Link>

                            <LogoutPc/>

                        </nav>

                        <ModeToggle/>

                        <div className={"lg:hidden"}>
                            <button
                                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                                type="button"
                                className={"inline-flex items-center justify-center space-x-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-zinc-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-zinc-700"}
                            >
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={"hi-solid hi-menu inline-block size-5"}
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`lg:hidden ${mobileNavOpen ? "" : "hidden"}`}>
                    <nav className={"flex flex-col space-y-2 border-t py-4 dark:border-zinc-700"}>

                        <Link
                            href={"/"}
                            className={`group flex items-center space-x-2 rounded-xl border border-blue-50 px-3 py-2 text-sm font-medium ${pathname === "/" ? "text-blue-600 bg-blue-100 dark:bg-zinc-700/75 dark:text-white font-semibold" : "text-blue-600 dark:border-transparent"} hover:text-blue-600 active:border-blue-100 dark:text-gray-300 dark:hover:bg-zinc-700 dark:border-transparent dark:hover:text-white dark:active:border-gray-600`}
                        >
                            <svg
                                className={`hi-mini hi-bold inline-block size-5 ${pathname === "/" ? 'opacity-100' : 'opacity-25'} group-hover:opacity-100`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path fillRule="evenodd"
                                      d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
                                      clipRule="evenodd"/>
                            </svg>
                            <span>Home</span>
                        </Link>

                        <Link
                            href={"/soalanlazim"}
                            className={`group flex items-center space-x-2 rounded-xl border border-blue-50 px-3 py-2 text-sm font-medium ${pathname === "/soalanlazim" ? "text-blue-600 bg-blue-100 dark:bg-zinc-700/75 dark:text-white font-semibold" : "text-blue-600"} hover:text-blue-600 active:border-blue-100 dark:text-gray-300 dark:hover:bg-zinc-700 dark:border-transparent dark:hover:text-white dark:active:border-gray-600`}
                        >
                            <svg
                                className={`hi-mini hi-bold inline-block size-5 ${pathname === "/soalanlazim" ? 'opacity-100' : 'opacity-25'} group-hover:opacity-100`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path fillRule="evenodd"
                                      d={"M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"}
                                      clipRule="evenodd"
                                />
                            </svg>
                            <span>Soalan Lazim</span>
                        </Link>
                        <Link
                            href={"/rujukanapi"}
                            className={`group flex items-center space-x-2 rounded-xl border border-blue-50 px-3 py-2 text-sm font-medium ${pathname === "/rujukanapi" ? "text-blue-600 bg-blue-100 dark:bg-zinc-700/75 dark:text-white font-semibold" : "text-blue-600"} hover:text-blue-600 active:border-blue-100 dark:text-gray-300 dark:hover:bg-zinc-700 dark:border-transparent dark:hover:text-white dark:active:border-gray-600`}
                        >
                            <svg
                                className={`hi-mini hi-bold inline-block size-5 ${pathname === "/rujukanapi" ? 'opacity-100' : 'opacity-25'} group-hover:opacity-100`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path fillRule="evenodd"
                                      d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                                      clipRule="evenodd"/>
                            </svg>
                            <span>API</span>
                        </Link>

                        <Link
                            href={"/pricing"}
                            className={`group flex items-center space-x-2 rounded-xl border border-blue-50 px-3 py-2 text-sm font-medium ${pathname === "/pricing" ? "text-blue-600 bg-blue-100 dark:bg-zinc-700/75 dark:text-white font-semibold" : "text-blue-600"} hover:text-blue-600 active:border-blue-100 dark:text-gray-300 dark:hover:bg-zinc-700 dark:border-transparent dark:hover:text-white dark:active:border-gray-600`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24" fill="currentColor"
                                 className={`hi-mini hi-bold inline-block size-5 ${pathname === "/pricing" ? 'opacity-100' : 'opacity-25'} group-hover:opacity-100`}
                            >
                                <path fillRule="evenodd"
                                      d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                                      clipRule="evenodd"/>
                            </svg>
                            <span>Pricing</span>
                        </Link>

                        <LogoutMobile/>

                    </nav>
                </div>
            </div>
        </header>
    )
}
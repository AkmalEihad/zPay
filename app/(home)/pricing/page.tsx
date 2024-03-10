"use client";

import {Separator} from "@/components/ui/separator";
import React from "react";


export default function Pricing() {
    return (
            <div className="container mx-auto px-4 py-16 lg:px-8 xl:max-w-7xl">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div
                        className="rounded-lg border border-accent bg-gray-100 dark:bg-accent p-5 shadow-sm transition hover:border-blue-600 dark:border-gray-800 dark:shadow-none dark:hover:border-blue-400 md:p-7 xl:p-10">
                        <svg
                            className="hi-outline hi-rectangle-stack mb-5 inline-block size-12 text-blue-600 dark:text-blue-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.1"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path fillRule="evenodd"
                                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                                  clipRule="evenodd"/>
                        </svg>

                        <h4 className="mb-2 text-lg font-bold">
                            Pakej Kasih
                        </h4>

                        <p className="mb-2 leading-relaxed font-bold text-xl text-gray-800 dark:text-gray-400">
                            RM 0.50 / Per Transaksi
                        </p>
                        <Separator className={"bg-muted-foreground mb-2"}/>
                        <p className="text-pretty leading-relaxed text-gray-600 dark:text-gray-400">
                            Agensi Kerajaan & Agensi Bukan Kerajaan (NGO) sahaja
                        </p>
                    </div>
                    <div
                        className="rounded-lg border border-accent bg-gray-100 dark:bg-accent p-5 shadow-sm transition hover:border-blue-600 dark:border-gray-800  dark:shadow-none dark:hover:border-blue-400 md:p-7 xl:p-10">
                        <svg
                            className="hi-outline hi-cube mb-5 inline-block size-12 text-blue-600 dark:text-blue-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.1"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path fillRule="evenodd"
                                  d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
                                  clipRule="evenodd"/>
                            <path
                                d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z"/>
                        </svg>
                        <h4 className="mb-2 text-lg font-bold">
                            Pakej Asas
                        </h4>
                        <p className="mb-2 leading-relaxed font-bold text-xl text-gray-800 dark:text-gray-400">
                            RM 1.50 / Per Transaksi
                        </p>
                        <Separator className={"bg-muted-foreground mb-2"}/>
                        <p className="text-pretty leading-relaxed text-gray-600 dark:text-gray-400">
                            Terbuka kepada semua termasuk Perusahaan Kecil dan Sederhana (PKS)
                        </p>
                    </div>
                    <div
                        className="rounded-lg border border-accent bg-gray-100 dark:bg-accent p-5 shadow-sm transition hover:border-blue-600 dark:border-gray-800 dark:shadow-none dark:hover:border-blue-400 sm:col-span-2 md:p-7 lg:col-span-1 xl:p-10">
                        <svg
                            className="hi-outline hi-cog mb-5 inline-block size-12 text-blue-600 dark:text-blue-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.1"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path fillRule="evenodd"
                                  d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZMdsad6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z"
                                  clipRule="evenodd"/>
                        </svg>
                        <h4 className="mb-2 text-lg font-bold">
                            Pakej Eksekutif
                        </h4>
                        <p className="mb-2 leading-relaxed font-bold text-xl text-gray-800 dark:text-gray-400">
                            RM 0.98 / Per Transaksi
                        </p>
                        <Separator className={"bg-muted-foreground mb-2"}/>
                        <p className="text-pretty leading-relaxed text-gray-600 dark:text-gray-400">
                            Terbuka kepada semua termasuk Perusahaan Kecil dan Sederhana (PKS)
                        </p>
                    </div>
                </div>
            </div>
    );
}

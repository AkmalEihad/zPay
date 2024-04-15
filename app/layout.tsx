import {Providers} from "@/app/providers";
import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "@/app/globals.css";
import NextTopLoader from "nextjs-toploader";
import React from "react";
import {Toaster} from "sonner";


const poppins = Poppins({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "zPay",
  description: "ZNN Payment Gateway",
};

const RootLayout = ({children}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
      <html lang="en">
      <body className={`${poppins.className}`}>
      <Providers>
        <NextTopLoader
            showSpinner={false}
        />
        <main className={"bg-gradient-to-tr from-blue-200 via-white to-blue-300"}>
          {children}
        </main>
        <Toaster richColors/>
      </Providers>
      </body>
      </html>
  );
}

export default RootLayout;

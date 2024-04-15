import NavBar from "@/components/navigationBar";
import "@/app/globals.css";
import React from "react";

const DashboardLayout = ({children}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <NavBar/>
            <main
                className="flex max-w-full flex-auto flex-col h-[calc(100vh-60px)] overflow-scroll no-scrollbar ">
                {children}
            </main>
        </>
    );
}

export default DashboardLayout;

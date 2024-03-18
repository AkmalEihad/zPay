import ReviewCard from "@/components/reviewCard"
import React from "react";

export default function Home() {

    return (
        <main
            className="flex items-center justify-center">
            <div className={"flex absolute bottom-[50px] items-center justify-center w-screen"}>
                <ReviewCard/>
            </div>
        </main>
    );
}
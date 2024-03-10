import ReviewCard from "@/components/reviewCard";
import React from "react";

export default function Home() {
    return (
            <main
                className="flex items-center justify-center rounded-xl bg-background px-8 py-8 pt-2  ">
                <div className={"flex flex-col w-screen"}>


                    <ReviewCard/>
                </div>
            </main>
    );
}
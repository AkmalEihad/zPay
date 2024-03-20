import BenefitCard from "@/components/benefit";
import ReviewCard from "@/components/reviewCard"
import Image from "next/image";
import React from "react";
import Banner from "../image/zPayBanner.jpg"

export default function Home() {

    return (
        <main>
            <div className={"flex"}>
                <Image src={Banner} alt={"banner"} className={"bg-cover"}/>
            </div>
            <div className={"flex"}>
                <BenefitCard/>
            </div>
            <div className={"flex"}>

            </div>
            <div className={"flex"}>
                <ReviewCard/>
            </div>
        </main>

    );
}
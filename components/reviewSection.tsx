"use client";

import {InfiniteMovingCards} from "@/components/ui/infinite-moving-cards";
import React from "react";

export default function ReviewCard() {
    return (
            <div
                className="flex flex-col antialiased justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimoni}
                    direction="right"
                    speed="slow"
                />
            </div>
    );
}

const testimoni = [
    {
        quote:
            "zPay adalah salah satu platform terbaik dan termurah pernah saya gunakan. zPay banyak membantu untuk menyelesaikan pembayaran dengan lebih pantas.",
        name: "ZUHAN BIOTECH",
        title: "CEO of Zuhan Biotech",
    },
    {
        quote:
            "zPay amat mudah dan efisyen digunakan. Keselamatan data kami juga terjamin dan zPay mengendalikan wang dengan telus.",
        name: "ALMASJID",
        title: "Administrator of AlMasjid",
    },

];
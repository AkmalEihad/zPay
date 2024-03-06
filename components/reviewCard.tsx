"use client";

import {InfiniteMovingCards} from "@/components/ui/infinite-moving-cards";
import React from "react";

export default function reviewCard() {
    return (

        <InfiniteMovingCards
            items={testimoni}
            direction="right"
            speed="slow"
        />
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

"use client"


import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import React from "react";

export default function BankList() {
    return (
        <Select>
            <SelectTrigger>
                <SelectValue placeholder={"Choose Bank"}/>
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="1">
                    BANK MUAMALAT MALAYSIA BERHAD
                </SelectItem>
                <SelectItem value="2">
                    CIMB BANK BERHAD
                </SelectItem>
                <SelectItem value="4">
                    RHB BANK BERHAD
                </SelectItem>
                <SelectItem value="6">
                    PUBLIC BANK BERHAD
                </SelectItem>
                <SelectItem value="7">
                    MALAYAN BANKING BERHAD
                </SelectItem>
                <SelectItem value="8">
                    BANK ISLAM MALAYSIA BERHAD
                </SelectItem>
                <SelectItem value="9">
                    STANDARD CHARTERED BANK
                </SelectItem>
                <SelectItem value="11">
                    AFFIN BANK BERHAD
                </SelectItem>
                <SelectItem value="18">
                    HONG LEONG BANK
                </SelectItem>
                <SelectItem value="20">
                    ALLIANCE BANK
                </SelectItem>
                <SelectItem value="22">
                    HSBC BANK MALAYSIA BERHAD
                </SelectItem>
                <SelectItem value="25">
                    AMBANK BERHAD
                </SelectItem>
                <SelectItem value="28">
                    CITIBANK
                </SelectItem>
                <SelectItem value="30">
                    UNITED OVERSEAS BANK MALAYSIA BERHAD
                </SelectItem>
                <SelectItem value="31">
                    AL RAJHI BANK
                </SelectItem>
                <SelectItem value="40">
                    BANK KERJASAMA RAKYAT MALAYSIA BERHAD
                </SelectItem>
                <SelectItem value="41">
                    BANK SIMPANAN NASIONAL
                </SelectItem>
                <SelectItem value="52">
                    AGRO BANK
                </SelectItem>
            </SelectContent>
        </Select>

    )
}


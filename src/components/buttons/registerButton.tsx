"use client"

import Link from "next/link";
import React, {useContext} from "react";
import {LaunchContext} from "@/components/launchContext";

interface RegisterButtonProps {
    prefix: string,
    type: string,
    phrase: string,
    color: string,
    position: string
    link: string
    preLaunch?: boolean
}

const RegisterButton = ({prefix, type, phrase, color, position, link, preLaunch = false} : RegisterButtonProps) => {

    let {openLaunchModal, closeLaunchModal} = useContext(LaunchContext);


    return (
        <Link href={link}>
            <div className={`flex flex-col items-${position} bg-${color} text-white rounded-3xl md:mr-2 px-[18px] lg:px-[28px] py-[23px] lg:py-[42px]`}>
                <h1 className={"text-bigButtonPrefixSm lg:text-bigButtonPrefixLg mb-[10px]"}>{prefix}</h1>
                <h1 className={"font-bold text-bigButtonTypeSm lg:text-bigButtonTypeLg mb-[15px]"}>{type}</h1>
                <p className={"border-t-2 border-t-white pt-[8px] text-bigButtonPhraseSm lg:text-bigButtonPhraseLg"}>{phrase}</p>
            </div>
        </Link>
    );
}


export default RegisterButton;
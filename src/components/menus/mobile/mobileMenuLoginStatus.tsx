'use client'

import React, {useState} from "react";

import Image from "next/image"

import ConnexionMobileIcon from "@/../public/icons/ConnexionMobileIcon.svg"


const MobileMenuLoginStatus = () => {

    return (
        <button className={"flex justify-center items-center bg-secondary h-[30px] w-[30px] rounded-[8px]"}>
            <Image
                src={ConnexionMobileIcon}
                alt={"Connexion Icon"}
            />
        </button>
    )

}

export default MobileMenuLoginStatus;
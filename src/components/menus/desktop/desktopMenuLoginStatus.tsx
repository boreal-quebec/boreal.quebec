'use client'

import React, {useState} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {signOut, useSession} from "next-auth/react";
import ConnexionMobileIcon from "@/../public/icons/ConnexionIcon.svg"
import Image from "next/image";

interface MenuLoginStatusProps {
    mobile?: boolean
}

const DesktopMenuLoginStatus = ({mobile = false} : MenuLoginStatusProps) => {
    const { data: session, status } = useSession()

    /*if(session){
        if(!mobile){
            return (
                <div className={"flex flex-col"}>
                    <LayoutGroup>
                        <a href={"/dashboard"} className={"flex bg-clip-border hover:bg-clip-padding justify-center items-center rounded-full w-14 h-14 bg-secondary"}>
                            {session.user.firstname.charAt(0).toUpperCase()}
                        </a>
                    </LayoutGroup>
                </div>
            )
        }
    }*/

    return (
        <button className={"flex flex-row justify-center items-center text-white bg-secondary rounded-l-lg rounded-r-lg text-menuItem tracking-menuItem] w-[110px] h-[23px]"}>
            <Image
                className={"mr-[5px]"}
                src={ConnexionMobileIcon}
                alt={"Connexion Icon"}
            />
            connexion
        </button>
    )

}

export default DesktopMenuLoginStatus;
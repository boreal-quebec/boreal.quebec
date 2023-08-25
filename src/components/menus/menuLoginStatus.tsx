'use client'

import React, {useState} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {signOut, useSession} from "next-auth/react";
import {AnimatePresence, LayoutGroup, motion} from "framer-motion";
import {redirect} from "next/navigation";

const MenuLoginStatus = () => {
    const { data: session, status } = useSession()

    if(session){
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

    return (
        <>
            <a href={"/login"} className={"flex flex-row text-white justify-center items-center bg-secondary rounded-l-lg rounded-r-lg text-sm py-3 px-10 mr-5"}><FontAwesomeIcon className={"mr-2"} size="lg" icon={faUser} style={{color: "#ffffff",}} />connexion</a>
        </>
    )

}

export default MenuLoginStatus;
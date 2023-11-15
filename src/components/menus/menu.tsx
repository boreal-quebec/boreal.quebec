"use client"

import Image from "next/image";
import logo from "../../../public/logo.svg";
import React, {ReactElement, useContext} from "react";
import Link from "next/link";
import MenuLoginStatus from "@/components/menus/menuLoginStatus";
import MenuDropdown, {DropdownLinkData} from "@/components/menus/menuDropdown";
import {LaunchContext} from "@/components/launchContext";

export interface LinkData{
    url?: string,
    type: string
    text: string
    subMenu?: object
}

const Menu = ({links} : {links: Array<LinkData>}) => {

    let {openLaunchModal, closeLaunchModal} = useContext(LaunchContext);

    const generateLink = (link : LinkData, index: number) : ReactElement => {
        if(link.url != undefined && link.url != ""){
            return <Link key={link.url} className={"mx-5"} href={link.url}>{link.text}</Link>
        }

        return <Link  key={index} href={""} className={"mx-5"} onClickCapture={(e) => {e.preventDefault(); openLaunchModal();}}>{link.text}</Link>
    }


    const generateDropdown = (link : LinkData) : ReactElement => {
        if(link.subMenu != undefined){
            return (
                <MenuDropdown link={link as DropdownLinkData} />
            )
        }

        return (<div></div>)
    }


    const menu = links.map((link : LinkData, index) => {

        let menuEntry : ReactElement = (
            <div key={index}></div>
        )

        if(link.type == "link"){
            menuEntry = generateLink(link, index)
        } else if(link.type == "dropdown"){
            menuEntry = generateDropdown(link)
        }


        if(index != links.length-1){
            return (
                <div  key={index} className={`flex items-center`}>
                    {menuEntry}
                    <div className={"h-1 w-1 rounded-full bg-secondary"}></div>
                </div>
            )
        }

        return (
            <div key={index} className={"flex items-center"}>
                {menuEntry}
            </div>
        )
    });



    return (
        <div className={"hidden lg:flex lg:flex-col lg:visible shadow-xl shadow-gray-300"}>
            <div>
                <div className={"flex h-6 bg-primary"}>
                </div>
                <div className={"flex items-center h-20 justify-around shadow-black divide-solid divide-secondary-pale"}>
                    <div className={"flex items-center h-1/2"}>
                        <Link href={"/"}>
                            <Image
                                src={logo}
                                height={14*1.5}
                                width={130*1.5}
                                alt={"Boreal Quebec Logo"}
                            />
                        </Link>
                    </div>
                    <div className={"flex h-1/2 text-sm text-primary self-center items-center border-l-2 border-r-2 border-secondary"}>
                        {menu}
                    </div>
                    <div className={"flex h-1/2 pl-6 invisible justify-center items-center"}>
                        <MenuLoginStatus />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;
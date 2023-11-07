"use client"

import Image from "next/image";
import logoMobile from "../../../public/logo-mobile.svg";
import React, {ReactElement, useContext, useState} from "react";
import Link from "next/link";
import {LinkData} from "@/components/menus/menu";
import {LaunchContext} from "@/components/providers";
import MenuDropdown, {DropdownLinkData} from "@/components/menus/menuDropdown";

const MobileMenu = ({links} : {links: Array<LinkData>}) => {

    let openLaunchModal = useContext(LaunchContext);

    const [menuOpen, setMenuOpen] = useState(false);

    const generateLink = (link : LinkData, index: number) : ReactElement => {
        if(link.url != undefined && link.url != ""){
            return <Link key={link.url} className={"my-3 text-center"} href={link?.url ? link.url : ""}>{link.text}</Link>
        }

        return <Link  key={index} href={""} className={"my-3 text-center"} onClickCapture={(e) => {e.preventDefault(); openLaunchModal();}}>{link.text}</Link>
    }

    const generateDropdown = (link : LinkData) : ReactElement => {
        if(link.subMenu != undefined){
            return (
                <MenuDropdown link={link as DropdownLinkData} />
            )
        }

        return (<div></div>)
    }

    const menu = links.map((link, index) => {

        let menuEntry : ReactElement = (
            <div key={index}></div>
        )

        if(link.type == "link"){
            menuEntry = generateLink(link, index)
        } else if(link.type == "dropdown"){
            menuEntry = generateDropdown(link)
        }

        return menuEntry
    });

    const mobileMenu = () => {
        if(menuOpen){
            return (
                <div className={"flex flex-col bg-primary text-white justify-end items-stretch text-center"}>
                    {menu}
                </div>
            )
        }
    }

    const toggleMobileMenu = () => {
        const newMenuState = !menuOpen;
        setMenuOpen(newMenuState);
    }

    return (
        <div className={`flex flex-col visible lg:hidden`}>
            <div className={"flex justify-start items-center px-2 h-1/6 bg-primary"}>
                <button onClick={toggleMobileMenu} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
                <Link className={"flex grow"} href={"/"}>
                    <Image
                        className={"grow mt-2 p-8"}
                        src={logoMobile}
                        alt={"Boreal Quebec Logo"}
                    />
                </Link>
            </div>
            {mobileMenu()}
        </div>
    )
}

export default MobileMenu;
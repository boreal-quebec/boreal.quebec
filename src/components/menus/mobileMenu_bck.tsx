"use client"
/*
import Image from "next/image";
import logoMobile from "../../../public/icons/picto_BOREAL_QUEBEC_LOGO_TOP.svg";
import mobileMenuIcon from "../../../public/icons/MobileMenuIcon.svg";
import React, {ReactElement, useContext, useState} from "react";
import Link from "next/link";
import {LaunchContext} from "@/components/launchContext";
import MenuDropdown, {DropdownLinkData} from "@/components/menus/menuDropdown";
import MenuLoginStatus from "@/components/menus/menuLoginStatus";

const MobileMenu_bck = ({links} : {links: Array<LinkData>}) => {

    let {openLaunchModal, closeLaunchModal} = useContext(LaunchContext);

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


    links.map((link) => {
        switch (link.type) {
            case "link":
                const linkData = link as LinkData
                if(linkData.url != undefined && linkData.url != ""){

                }
                break;
            case "dropdown":
                const dropdownData = link as MenuDropdownData
                // Add mobile submenu
                break;
        }
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
        <div className={"bg-white h-[56px]"}>
            <div className={`container flex justify-between items-center visible lg:hidden`}>
                <button onClick={toggleMobileMenu} className="flex items-center text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <Image
                        width={25}
                        height={15}
                        src={mobileMenuIcon}
                        alt={"Boreal Menu Icon"}
                    />
                </button>
                <Link className={"flex"} href={"/"}>
                    <Image
                        width={180}
                        className={"grow"}
                        src={logoMobile}
                        alt={"Boreal Quebec Logo"}
                    />
                </Link>
                <MenuLoginStatus mobile={true} />
                {mobileMenu()}
            </div>
        </div>
    )
}

export default MobileMenu_bck;*/
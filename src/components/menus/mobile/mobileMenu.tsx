"use client"

import React, {useContext, useState} from 'react';

import Link from "next/link";
import Image from "next/image";

import logoMobile from "@/../public/icons/picto_BOREAL_QUEBEC_LOGO_TOP.svg";
import mobileMenuIcon from "@/../public/icons/MobileMenuIcon.svg";


import MenuLoginStatus from "@/components/menus/mobile/mobileMenuLoginStatus";
import MobileMenuLink from "@/components/menus/mobile/mobileMenuLink";
import MobileMenuLoginStatus from "@/components/menus/mobile/mobileMenuLoginStatus";

interface MobileMenuProps {
    links: (MenuLinkData | MenuDropdownData)[]
};

const MobileMenu = ({links}: MobileMenuProps) => {

    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = links.map((link) => {
        if(link.type == "link"){
            return <MobileMenuLink key={link.text} link={link as MenuLinkData} />
        }

        if(link.type == "dropdown"){
            return <div key={link.text}></div>
        }

        return <div key={link.text}></div>
    })

    const toggleMobileMenu = () => {
        const newMenuState = !menuOpen;
        setMenuOpen(newMenuState);
    }

    return (
        <div className={"container flex flex-col visible lg:hidden"}>
            <div className={`flex h-full sm:justify-around md:justify-between md:px-[35px] items-center`}>
                <button onClick={toggleMobileMenu} className="flex text-teal-200 border-teal-400">
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
                        className={"grow sm:w-[180px] md:w-[300px]"}
                        src={logoMobile}
                        alt={"Boreal Quebec Logo"}
                    />
                </Link>

                <MobileMenuLoginStatus />
            </div>
            {menuOpen ? <div className={"flex flex-col bg-primary text-white justify-end items-stretch text-center"}>{menuItems}</div> : null}
        </div>

    );
};

export default MobileMenu;
import React, {Fragment, ReactElement} from 'react';

import Image from "next/image"

import logo from "@/../public/icons/picto_BOREAL_QUEBEC_LOGO_TOP.svg";

import DesktopMenuLoginStatus from "@/components/menus/desktop/desktopMenuLoginStatus";
import Link from 'next/link';
import DesktopMenuLink from "@/components/menus/desktop/desktopMenuLink";
import DesktopMenuDropdown from "@/components/menus/desktop/desktopMenuDropdown";


interface DesktopMenuProps {
    links: (MenuLinkData | MenuDropdownData)[]
};

const DesktopMenu = ({links}: DesktopMenuProps) => {

    const menuItems = links.map((link, index) => {
        let menuEntry : ReactElement = (<div key={link.text}></div>);
        if(link.type == "link"){
            menuEntry = (<DesktopMenuLink key={link.text} link={link as MenuLinkData} />)
        }

        if(link.type == "dropdown"){
            menuEntry = <DesktopMenuDropdown key={link.text} menu={link as MenuDropdownData} />
        }

        if(index != links.length-1){
            menuEntry = (
                <Fragment key={link.text}>
                    {menuEntry}
                    <div className={"h-1 w-1 rounded-full bg-secondary"}></div>
                </Fragment>
            )
        }

        return menuEntry
    })

    return (
        <div className={"hidden container lg:flex lg:visible lg:w-11/12 xl:w-9/12 shadow-b-xl shadow-b-gray-300 lg:items-center lg:justify-around xl:justify-between"}>
            <div className={"flex"}>
                <Link className={"flex "} href={"/"}>
                    <Image
                        src={logo}
                        className={"lg:w-[191px] xl:w-[300px]"}
                        objectFit={"cover"}
                        alt={"Boreal Quebec Logo"}
                    />
                </Link>
            </div>
            <div className={"flex text-sm text-primary items-center justify-center border-l-2 border-r-2 border-secondary lg:px-[20px] xl:px-[40px]"}>
                <div className={"flex items-center justify-center lg:space-x-[20px] xl:space-x-[40px]"}>
                    {menuItems}
                </div>
            </div>
            <div className={"flex justify-end"}>
                <DesktopMenuLoginStatus />
            </div>
        </div>
    )
};

export default DesktopMenu;
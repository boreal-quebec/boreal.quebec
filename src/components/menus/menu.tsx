import Image from "next/image";
import logo from "../../../public/logo.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import React from "react";
import Link from "next/link";
import {useSession} from "next-auth/react";
import MenuLoginStatus from "@/components/menus/menuLoginStatus";

interface LinkData{
    url: string,
    text: string
}

const Menu = ({links} : {links: Array<LinkData>}) => {


    const menu = links.map((link, index) => {
        if(index != links.length-1){
            return (
                <div className={"flex items-center"}>
                    <Link key={link.url} className={"mx-5"} href={link.url}>{link.text}</Link>
                    <div className={"h-1 w-1 rounded-full bg-secondary"}></div>
                </div>
            )
        }

        return (
            <div className={"flex items-center"}>
                <Link key={link.url} className={"mx-5"} href={link.url}>{link.text}</Link>
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
                    <div className={"flex h-1/2 pl-6 justify-center items-center"}>
                        <MenuLoginStatus />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;
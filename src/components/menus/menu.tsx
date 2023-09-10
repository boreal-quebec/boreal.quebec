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


    const menu = links.map((link) => {
        return (
            <Link key={link.url} className={"mx-5"} href={link.url}>{link.text}</Link>
        )
    });

    return (
        <div className={"hidden lg:flex lg:flex-col lg:visible shadow-xl shadow-gray-300"}>
            <div>
                <div className={"flex h-6 bg-primary"}>
                </div>
                <div className={"flex items-stretch mt-10 mb-4 justify-around shadow-black divide-solid divide-secondary-pale"}>
                    <div className={"self-center pr-6"}>
                        <Link href={"/"}>
                            <Image
                                src={logo}
                                height={14*1.5}
                                width={130*1.5}
                                alt={"Boreal Quebec Logo"}
                            />
                        </Link>
                    </div>
                    <div className={"text-sm text-primary self-center items-center"}>
                        {menu}
                    </div>
                    <div className={"flex pl-6 justify-center items-center"}>
                        <MenuLoginStatus />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;
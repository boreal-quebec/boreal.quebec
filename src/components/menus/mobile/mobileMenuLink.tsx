import React, {useContext} from 'react';
import Link from "next/link";
import {LaunchContext} from "@/components/launchContext";


interface MenuLinkProps {
    link: MenuLinkData

};

const MobileMenuLink = ({link}: MenuLinkProps) => {
    let {openLaunchModal, closeLaunchModal} = useContext(LaunchContext);

    if(link.url != undefined && link.url != ""){
        return <Link key={link.url} className={"my-3 text-center"} href={link?.url ? link.url : ""}>{link.text}</Link>
    }

    return <Link href={""} className={"my-3 text-center"} onClickCapture={(e) => {e.preventDefault(); openLaunchModal();}}>{link.text}</Link>
};

export default MobileMenuLink;
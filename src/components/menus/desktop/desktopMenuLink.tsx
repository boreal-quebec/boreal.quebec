import React from 'react';
import Link from "next/link";


interface DesktopMenuLinkProps {
    link: MenuLinkData
};

const DesktopMenuLink = ({link}: DesktopMenuLinkProps) => {
    return <Link key={link.url} className={`text-menuItem font-light text-primary tracking-menuItem`} href={link.url}>{link.text}</Link>
};

export default DesktopMenuLink;
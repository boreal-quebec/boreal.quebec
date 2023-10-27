import React from "react";

import {mainMenu} from "@/data/menu";

import MobileMenu from "@/components/menus/mobileMenu";
import Menu, {LinkData} from "@/components/menus/menu";

const Navbar = async () => {
    return (
        <nav>
            <Menu links={mainMenu as Array<LinkData>}/>
            <MobileMenu links={mainMenu as Array<LinkData>}/>
        </nav>
    )
}

export default Navbar;
import React from "react";

import {mainMenu} from "@/data/menu";

import MobileMenu from "@/components/menus/mobileMenu";
import Menu from "@/components/menus/menu";

const Navbar = async () => {
    return (
        <nav>
            <Menu links={mainMenu}/>
            <MobileMenu links={mainMenu}/>
        </nav>
    )
}

export default Navbar;
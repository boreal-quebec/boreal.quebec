
import React from "react";

import {mainMenu} from "@/data/menu";
import Menu from "@/components/menus/menu";


const Navbar = async () => {

    return (
        <nav>
            <Menu menuData={mainMenu as MenuData}/>
        </nav>
    )
}

export default Navbar;
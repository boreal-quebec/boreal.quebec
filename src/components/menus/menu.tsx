
import React, {ReactElement, useContext} from "react";
import DesktopMenu from "@/components/menus/desktop/desktopMenu";
import MobileMenu from "@/components/menus/mobile/mobileMenu";


const Menu = ({menuData} : {menuData: MenuData}) => {

    return (
        <div className={"flex bg-white h-menuSmMobileHeight md:h-menuMdMobileHeight lg:h-menuLgHeight"}>
            <MobileMenu links={menuData.menu} />
            <DesktopMenu links={menuData.menu}/>
        </div>
    )
}

export default Menu;
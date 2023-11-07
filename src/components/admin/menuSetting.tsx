import {LinkData} from "@/components/menus/menu";


const MenuSetting = ({text, type, url, subMenu} : LinkData) => {

    return (
        <div className={"flex bg-gray-500"}>
            {text}
        </div>
    )
}


export default MenuSetting;
import AdminPageTitle from "@/components/titles/adminPageTitle";

import {mainMenu} from "@/data/menu";


export default function MenusPage() {

    return (
        <div className={"flex justify-center"}>
            <AdminPageTitle title={"Menus settings"} />
            {mainMenu.map(

            )}
        </div>
    )
}
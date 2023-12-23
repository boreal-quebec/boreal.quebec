//Create a menu react context provider to provide the menu navigation data to the context menu

import {createContext, useContext} from "react";

export const MenuContext = createContext({})

const useMenuContext = () => {
    const context = useContext(MenuContext)
    if(context === undefined){
        throw new Error("useMenu must be used within a MenuProvider")
    }
    return context
}
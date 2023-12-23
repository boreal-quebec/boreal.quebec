interface MenuData {
    menu: (MenuLinkData | MenuDropdownData)[]
}

interface MenuItemsData{
    text: string
    type: "link" | "dropdown"
}

interface MenuLinkData extends MenuItemsData{
    url: string,
    linkType: "link" | "modal"
}

interface MenuDropdownData extends MenuItemsData{
    type: "dropdown",
    subMenu: MenuLinkData[]
}

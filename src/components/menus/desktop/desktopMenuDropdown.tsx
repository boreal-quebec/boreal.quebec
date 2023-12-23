"use client"
import React, {useContext, useState} from "react";
import {LaunchContext} from "@/components/launchContext";
import Dict = NodeJS.Dict;

export interface DropdownLinkData{
    menu: MenuDropdownData
}

export default function DesktopMenuDropdown ({menu} : DropdownLinkData) {
    let {openLaunchModal, closeLaunchModal}= useContext(LaunchContext);

    const borders = "mx-[18px] 2xl:mx-[28px]"

    const dropdownStyle = "flex relative cursor-pointer"
    const dropdownContentStyle = "flex flex-col bg-white hidden absolute w-56 shadow-2xl shadow-black"

    const options = Object.keys(menu.subMenu).map((sublink, index) => {
        if(menu.subMenu[sublink] != ""){
            return (<a key={index} href={menu.subMenu[sublink]} className="block px-4 py-5 px-2 bg-white font-medium text-primary-800 hover:text-white hover:bg-primary-800 text-menuItem tracking-menuItem">{sublink}</a>)
        }
        return (<a key={index} onClickCapture={(e) => {e.preventDefault(); openLaunchModal();}} href={""} className="block px-4 py-5 px-2 bg-white text-primary-800 hover:text-white hover:bg-primary-800  lg:text-menuItemSmall 2xl:text-menuItem  tracking-menuItem">{sublink}</a>)
    });

    return (
        <div className={`dropdown ${dropdownStyle}`}>
            <div className={"text-menuItem font-light text-primary tracking-menuItem"}>
                {menu.text}
            </div>
            <div className={`dropdown-content ${dropdownContentStyle}`}>
                {options}
            </div>
        </div>

    )
}
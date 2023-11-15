"use client"
import React, {useContext, useState} from "react";
import {LaunchContext} from "@/components/launchContext";
import Dict = NodeJS.Dict;

export interface DropdownLinkData{
    text: string,
    subMenu: Dict<string>
}

export default function MenuDropdown ({link} : {link: DropdownLinkData}) {
    let {openLaunchModal, closeLaunchModal}= useContext(LaunchContext);

    const dropdownStyle = "flex relative mx-5 cursor-pointer"
    const dropdownContentStyle = "flex flex-col bg-white hidden absolute w-56 shadow-2xl shadow-black"

    const options = Object.keys(link.subMenu).map((sublink, index) => {
        if(link.subMenu[sublink] != ""){
            return (<a key={index} href={link.subMenu[sublink]} className="block px-4 py-5 px-2 bg-white text-primary-800 hover:text-white hover:bg-primary-800">{sublink}</a>)
        }
        return (<a key={index} onClickCapture={(e) => {e.preventDefault(); openLaunchModal();}} href={""} className="block px-4 py-5 px-2 bg-white text-primary-800 hover:text-white hover:bg-primary-800">{sublink}</a>)
    });

    return (
        <div className={`dropdown ${dropdownStyle}`}>
            <div>
                {link.text}
            </div>
            <div className={`dropdown-content ${dropdownContentStyle}`}>
                {options}
            </div>
        </div>

    )
}
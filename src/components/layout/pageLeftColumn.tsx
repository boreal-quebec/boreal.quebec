import {BigButton} from "@/components/bigButton";
import Dropdown from "@/components/dropdown";
import React from "react";





interface PageLeftColumnProps{
    bigButtons: React.ReactNode[]
    children: React.ReactNode
}

export default function PageLeftColumn({bigButtons, children} : PageLeftColumnProps){
    return (
        <div className={"flex flex-col lg:w-1/4"}>
            {bigButtons.map(button => (
                <span>
                    {button}
                    <div className={"py-2"}></div>
                </span>
            ))}
            <div className={"py-8"}></div>
            {children}
        </div>
    )
}
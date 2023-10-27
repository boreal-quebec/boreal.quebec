import React from "react";


interface PageLeftColumnProps{
    bigButtons: React.ReactNode[]
    children: React.ReactNode
}

export default function PageLeftColumn({bigButtons, children} : PageLeftColumnProps){
    return (
        <div className={"flex flex-col xl:w-1/4"}>
            {bigButtons.map((button, index) => (
                <span key={index} className={"px-5 lg:px-0 "}>
                    {button}
                    <div className={"py-2"}></div>
                </span>
            ))}
            <div className={"py-8"}></div>
            {children}
        </div>
    )
}
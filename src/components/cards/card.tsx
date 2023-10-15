import React from "react";

interface CardProps
{
    children: React.ReactNode
}

export default function Card({children} : CardProps){

    return (
        <div className={"flex bg-white rounded-5xl shadow-xl shadow-gray-300"}>
            {children}
        </div>
    )
}
import Link from "next/link";
import React from "react";

interface BigButtonProps {
    prefix: string,
    type?: string,
    phrase: string,
    color: string,
    position: string
    link: string,
    cutLeft: boolean
}

interface IButtonPosition{
    left: string,
    right: string
}

interface IButtonColor{
    bgColor: string,
    color: string
}

interface IButtonColorConfig{
    primary: IButtonColor,
    secondary: IButtonColor
}


export const BigButton = ({prefix, type, phrase, color, position, link, cutLeft = false} : BigButtonProps) => {

    const colors : IButtonColorConfig = {
        primary: {
            bgColor: 'bg-primary',
            color: 'text-white',
        },
        secondary: {
            bgColor: 'bg-secondary',
            color: 'text-white',
        }
    }

    const positions : IButtonPosition = {
        left: "text-left",
        right: "text-right"
    }




    return (
        <div className={"flex flex-col justify-center items-center"}>
            <Link href={link}>
                <div className={`flex flex-col shadow-xl shadow-gray-600 ${positions[position as keyof IButtonPosition]} ${colors[color as keyof IButtonColorConfig].bgColor} text-white ${cutLeft ? "rounded-5xl xl:rounded-r-5xl xl:rounded-l-none" : "rounded-5xl"}  px-8 py-7 md:px-16 md:py-14`}>
                    <h1 className={"font-semibold text-2xl md:text-3xl lg:text-2xl"}>{prefix}</h1>
                    <h1 className={"font-bold text-4xl md:text-5xl mb-7"}>{type}</h1>
                    <p className={`border-t-2 border-t-white-pale pt-2`}>{phrase}</p>
                </div>
            </Link>
        </div>
    );
}
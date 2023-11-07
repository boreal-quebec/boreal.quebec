import React from "react";

interface IHomePageTitleColor{
    primary: string,
    white: string
}

interface IHomePageTextColor{
    black: string,
    white: string
}


export default function HomePageText({title, paragraph, textColor = "black", titleColor = "primary"} : {title: string, paragraph: string, textColor?: string, titleColor?: string}){

    const titleFontColor : IHomePageTitleColor = {
        primary: "text-primary",
        white: "text-white"
    }

    const fontColor : IHomePageTextColor = {
        black: "",
        white: "text-white"
    }

    return (
        <div className={"mb-4 border-t-2 border-primary h-full"}>
            <h2 className={`${titleFontColor[titleColor as keyof IHomePageTitleColor]} text-xl 2xl:text-2xl py-2`}>{title}</h2>
            <p className={`${fontColor[textColor as keyof IHomePageTextColor]} 2xl:text-xl`}>{paragraph}</p>
        </div>
    )
}
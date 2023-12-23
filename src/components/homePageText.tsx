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
        black: "text-lightGreen",
        white: "text-white"
    }

    return (
        <div className={"flex flex-col border-t-2 border-primary"}>
            <h2 className={`${titleFontColor[titleColor as keyof IHomePageTitleColor]} text-gridFactsTitleSm pt-[12px] pb-[10px] lg:pt-[22px] lg:pb-[15px]`}>{title}</h2>
            <p className={`${fontColor[textColor as keyof IHomePageTextColor]} text-gridFactsTextSm font-light`}>{paragraph}</p>
        </div>
    )
}
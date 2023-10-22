import React from "react";


export default function HomePageText({title, paragraph, textColor = "black", titleColor = "primary"} : {title: string, paragraph: string, textColor: string, titleColor: string}){

    const titleFontColor = {
        primary: "text-primary",
        white: "text-white"
    }

    const fontColor = {
        black: "",
        white: "text-white"
    }

    return (
        <div className={"mb-4 border-t-2 border-primary"}>
            <h2 className={`${titleFontColor[titleColor]} text-xl py-2`}>{title}</h2>
            <p className={`${fontColor[textColor]}`}>{paragraph}</p>
        </div>
    )
}
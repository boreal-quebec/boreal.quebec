import React from "react";


export default function HomePageText({title, paragraph} : {title: string, paragraph: string}){
    return (
        <div className={"mb-4 border-t-2 border-primary"}>
            <h2 className={"text-primary text-xl py-2"}>{title}</h2>
            <p>{paragraph}</p>
        </div>
    )
}
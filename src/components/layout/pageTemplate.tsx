import Header from "@/components/layout/header";
import React from "react";

interface PageProps{
    title: string,
    phrase: string,
    children: React.ReactNode,
    paddingTop?: boolean
}

export default function PageTemplate({title, phrase, children, paddingTop = true} : PageProps){

    const paddingTopValue = paddingTop ? "py-20" : ""

    return (
        <>
            <Header title={title} phrase={phrase}/>
            <div className={`${paddingTopValue}`}>
                {children}
            </div>
        </>
    )
}
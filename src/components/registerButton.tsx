import Link from "next/link";
import React from "react";

interface RegisterButtonProps {
    prefix: string,
    type: string,
    phrase: string,
    color: string,
    position: string
    link: string
}

const RegisterButton = ({prefix, type, phrase, color, position, link} : RegisterButtonProps) => {
    return (
        <Link href={link}>
            <div className={`flex flex-col items-${position} bg-${color} text-white rounded-3xl mr-2 px-8 py-7 md:px-16 md:py-14`}>
                <h1 className={"font-semibold text-2xl md:text-3xl lg:text-4xl"}>{prefix}</h1>
                <h1 className={"font-bold text-4xl md:text-5xl mb-4"}>{type}.</h1>
                <p className={"border-t-2 border-t-white pt-2"}>{phrase}</p>
            </div>
        </Link>
    );
}


export default RegisterButton;
import Link from "next/link";
import React from "react";

interface RegisterButtonProps {
    type: string,
    phrase: string,
    loginPhrase: string,
    color: string,
    position: string
}

const RegisterButton = ({type, phrase, loginPhrase, color, position} : RegisterButtonProps) => {
    return (
        <div className={"flex flex-col justify-center items-center"}>
            <Link href={`/register/${type.toLowerCase()}`}>
                <div className={`flex flex-col items-${position} bg-${color} text-white rounded-lg mr-2 px-8 py-7 md:px-16 md:py-14`}>
                    <h1 className={"font-semibold text-2xl md:text-3xl lg:text-4xl"}>Je suis</h1>
                    <h1 className={"font-bold text-4xl md:text-5xl mb-4"}>{type}.</h1>
                    <p className={"border-t-2 border-t-white pt-2"}>{phrase}</p>
                </div>
            </Link>
            <Link className={"mb-4 mt-2 text-xs text-primary underline underline-offset-1"} href={`/login`}>{loginPhrase}</Link>
        </div>
    );
}


export default RegisterButton;
import {signOut} from "next-auth/react";


export default function Button({text, onClick, submit, className} : ButtonProps) {
    if(submit) {
        return (
            <button type={"submit"} className={`mt-8 px-8 py-3 bg-secondary rounded-lg text-white ${className}`} onClick={onClick}>{text}</button>
        )
    }

    return (
        <button className={`mt-8 px-8 py-4 bg-secondary rounded-lg text-white ${className}`} onClick={onClick}>{text}</button>
    )
}
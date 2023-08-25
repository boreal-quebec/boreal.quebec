import React from "react";

const Input = ({ label, name, placeholder, type,  ...props} : {label?: string, name: string, placeholder: string, type: string}) => {

    return(
        <>
            <label htmlFor={name} className={"text-white px-2 mb-1 "}>{label}</label>
            <input {...props} name={name} type={type} placeholder={placeholder} className={"rounded-md text-md placeholder-primary text-primary py-4 px-2 mb-3"}/>
        </>
    )
}

export default Input;
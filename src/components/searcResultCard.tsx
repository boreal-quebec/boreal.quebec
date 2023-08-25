import React from "react";


const SearcResultCard = ({ companyName}:{companyName: string}) => {
    return (
        <div className={"flex flex-col justify-center items-stretch bg-white"}>
            <h1 className={"text-center"}>{companyName}</h1>
        </div>
    )
}


export default SearcResultCard;
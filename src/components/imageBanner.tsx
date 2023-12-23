import React, {ReactElement} from "react";
import Image, {StaticImageData} from "next/image";
import HomePageTopImage from "../../public/photos/GrazingTable_HomePage.jpg";


export default function ImageBanner({height, image}: {height?:number, image: StaticImageData}){

    return (
        <div className={"flex w-full h-[103px] md:h-[220px] lg:h-[300px]"}>
            <Image className={"overflow-hidden object-cover w-full"} src={image} alt={""}  />
        </div>
    )
}
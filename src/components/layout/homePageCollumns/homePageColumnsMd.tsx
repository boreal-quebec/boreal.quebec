import React, {useContext} from 'react';
import HomePageColumnSection from "@/components/layout/homePageCollumns/homePageColumnSection";
import Link from "next/link";
import Image from "next/image";
import Loupe from "../../../../public/icons/Loupe.svg";
import Stairs from "../../../../public/icons/Stairs.svg";
import Hero from "../../../../public/icons/Hero.svg";
import Star from "../../../../public/icons/Star.svg";
import {LaunchContext} from "@/components/launchContext";


interface HomePageCollumnsMdProps {

};

const HomePageColumnsMd = ({}: HomePageCollumnsMdProps) => {
    let {openLaunchModal, closeLaunchModal} = useContext(LaunchContext);

    return (
        <div className={"hidden md:visible lg:hidden md:flex md:flex-col xl:flex-row xl:h-[750px]"}>
            <div className={`flex flex-col justify-between bg-beige xl:w-1/4`}>
                <HomePageColumnSection>
                    <div className={"flex flex-col md:mr-[40px] justify-between"}>
                        <h2 className={`text-bottomCollumnsTitleSm w-7/12 text-lightGreen`}>Explorer le <Link href={"/bottin"} onClickCapture={(e) => {e.preventDefault(); openLaunchModal();}}><span className={`text-secondary`}>bottin</span></Link> de la restauration alternative</h2>
                        <p className={`mt-[30px] text-bottomCollumnsTextSm break-words font-light text-primary`}>Explorez le large répertoire de restaurateurs alternartifs québecois, et trouvez le service qu’il vous faut sur boreal.quebec</p>
                    </div>
                    <Image className={"w-[96px] h-[96px]"} src={Loupe} alt={"loupe"} />
                </HomePageColumnSection>
            </div>
            <div className={`flex flex-col justify-between bg-secondary xl:w-1/4`}>
                <HomePageColumnSection>
                    <div className={"flex flex-col md:mr-[40px] justify-between"}>
                        <h2 className={`text-bottomCollumnsTitleSm w-7/12 text-lightSecondary`}>Découvrir les bonnes raisons de devenir <Link href={"/avantage-membre/client"}><span className={`text-white`}>membre client</span></Link></h2>
                        <p className={`mt-[30px] text-bottomCollumnsTextSm break-words font-light text-white`}>Découvrez le fonctionnement, les outils et les avantages de s’inscrire en tant que membre client sur boreal.quebec</p>
                    </div>
                    <Image className={"w-[96px] h-[96px]"} src={Stairs} alt={"loupe"} />
                </HomePageColumnSection>
            </div>
            <div className={`flex flex-col justify-between bg-primary xl:w-1/4`}>
                <HomePageColumnSection>
                    <div className={"flex flex-col md:mr-[40px] justify-between"}>
                        <h2 className={`text-bottomCollumnsTitleSm w-7/12 text-lightGreen`}>Découvrir les bonnes raisons de devenir <Link href={"/avantage-membre/restaurateur"}><span className={`text-white`}>membre restaurateur</span></Link></h2>
                        <p className={`mt-[30px] text-bottomCollumnsTextSm break-words font-light text-white`}>Découvrez le fonctionnement, les outils et les avantages de s’inscrire en tant que membre restaurateur sur boreal.quebec</p>
                    </div>
                    <Image className={"w-[96px] h-[96px]"} src={Hero} alt={"loupe"} />
                </HomePageColumnSection>
            </div>
            <div className={`flex flex-col justify-between bg-secondary-800 xl:w-1/4`}>
                <HomePageColumnSection>
                    <div className={"flex flex-col md:mr-[40px] justify-between"}>
                        <h2 className={`text-bottomCollumnsTitleSm w-7/12 text-lightGreen`}>Prendre connaissance des <Link href={"/a-propos"}><span className={`text-white`}>engagements</span></Link> de la plateforme</h2>
                        <p className={`mt-[30px] text-bottomCollumnsTextSm break-words font-light text-white`}>Prenez connaissance des engagements et du service de la plateforme boreal.quebec</p>
                    </div>
                    <Image className={"w-[96px] h-[96px]"} src={Star} alt={"loupe"} />
                </HomePageColumnSection>
            </div>
        </div>
    );
};

export default HomePageColumnsMd;
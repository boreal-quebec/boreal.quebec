import SubscribeNewsletter from "@/components/forms/subscribeNewsletter";


const StickyHeader = () => {

    return (
        <div className={"bg-secondary"}>
            <div className={"container flex flex-col items-center justify-center w-full xl:w-5/12 h-stickySm md:h-stickyMd sticky md:flex-row md:justify-around lg:justify-center lg:space-x-[80px]"}>
                <div className={"mb-[9px] md:mb-[0px] font-bold text-stickySm tracking-sticky text-white"}>M’AVISER DU LANCEMENT OFFICIEL DE LA PLATEFORME</div>
                <SubscribeNewsletter buttonColor={"green"} />
            </div>
        </div>
    )

}

export default StickyHeader;
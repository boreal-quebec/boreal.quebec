import SubscribeNewsletter from "@/components/forms/subscribeNewsletter";


const StickyHeader = () => {

    return (
        <div className={"flex flex-col md:flex-row w-full md:h-20 bg-cyan"}>
            <div className={"flex items-center justify-center p-5 md:w-1/3 bg-cyan-light md:rounded-r-5xl"}>
                <div>
                    <h1 className={"text-white text-md md:text-xl"}>Lancement de la plateforme en mars 2024!</h1>
                    <div className={"text-primary-800"}>Contactez-nous pour toutes questions</div>
                </div>
            </div>
            <div className={"flex items-center justify-center md:p-5 md:w-1/3"}>
                <div>
                    <div className={"text-white text-md md:text-xl"}>Me prévenir par courriel de son lancement</div>
                </div>
            </div>
            <div className={"flex items-center justify-center md:p-5 md:w-1/3"}>
                <div className={"flex md:grow"}>
                    <SubscribeNewsletter />
                </div>
            </div>
        </div>
    )

}

export default StickyHeader;
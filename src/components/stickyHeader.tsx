import SubscribeNewsletter from "@/components/forms/subscribeNewsletter";


const StickyHeader = () => {

    return (
        <div className={"flex flex-row sticky top-0 z-50 w-full h-20 bg-cyan"}>
            <div className={"flex items-center justify-center p-5 w-1/3 bg-cyan-light rounded-r-5xl"}>
                <div>
                    <h1 className={"text-white text-xl"}>Lancement de la plateforme en mars 2024!</h1>
                    <div className={"text-primary-800"}>Contactez-nous pour toutes questions</div>
                </div>
            </div>
            <div className={"flex items-center justify-center p-5 w-1/3"}>
                <div>
                    <div className={"text-white text-xl"}>Me prévenir par courriel de son lancement</div>
                </div>
            </div>
            <div className={"flex items-center justify-center p-5 w-1/3"}>
                <div className={"flex grow"}>
                    <SubscribeNewsletter />
                </div>
            </div>
        </div>
    )

}

export default StickyHeader;
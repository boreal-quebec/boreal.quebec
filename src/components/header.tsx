
export default function Header({title, phrase}){
    return (
        <div className={"flex flex-col justify-center items-center bg-beige pt-20 pb-20"}>
            <div className={"mb-12"}>
                <div className={"h-16 w-16 rounded-full bg-secondary"}></div>
            </div>
            <h1 className={"text-white font-medium text-center text-2xl md:text-3xl px-8"}>{title}</h1>
            <h1 className={"text-primary font-medium text-center text-2xl md:text-3xl px-8"}>{phrase}</h1>
        </div>
    )
}
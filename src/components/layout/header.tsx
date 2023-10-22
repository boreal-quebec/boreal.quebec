
interface HeaderProps{
    title: string,
    phrase: string,
    size: string
}

export default function Header({title, phrase, size = "normal"} : HeaderProps){

    const titleSize = {
        normal: "text-2xl md:text-3xl",
        big: "text-6xl md:text-7xl"
    }

    const phraseSize = {
        normal: "text-2xl md:text-3xl",
        big: "text-3xl md:text-4xl"
    }

    return (
        <div className={"flex flex-col justify-center items-center bg-primary-800 pt-20 pb-20"}>
            <div className={"mb-12"}>
                <div className={"h-16 w-16 rounded-full bg-secondary"}></div>
            </div>
            <h1 className={`text-beige font-medium text-center tracking-widest ${titleSize[size]} px-8`}>{title}</h1>
            <h1 className={`text-beige font-medium text-center tracking-wide ${phraseSize[size]} px-8`}>{phrase}</h1>
        </div>
    )
}
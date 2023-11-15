
export interface HeaderProps{
    title: string,
    phrase: string,
    size?: string
}

interface IHeaderTitleSize{
    normal: string,
    big: string
}

interface IHeaderPhraseSize{
    normal: string,
    big: string
}

export default function Header({title, phrase, size = "normal"} : HeaderProps){

    const titleSize : IHeaderTitleSize = {
        normal: "text-2xl md:text-3xl 2xl:text-title",
        big: "text-6xl md:text-7xl 2xl:text-8xl"
    }

    const phraseSize : IHeaderPhraseSize = {
        normal: "text-xl md:text-3xl 2xl:text-subtitle",
        big: "text-3xl md:text-4xl"
    }

    const contentPaddding = "pt-16 pb-32"

    return (
        <div className={`flex flex-col justify-center items-center bg-primary-800 ${contentPaddding}`}>
            <div className={"mb-12"}>
                <div className={"h-dot w-dot rounded-full bg-secondary"}></div>
            </div>
            <h1 className={`text-beige font-medium text-center md:tracking-widest ${titleSize[size as keyof IHeaderTitleSize]} px-8`}>{title}</h1>
            <h1 className={`text-beige font-medium text-center md:tracking-wide ${phraseSize[size as keyof IHeaderPhraseSize]} px-8 pt-5`}>{phrase}</h1>
        </div>
    )
}
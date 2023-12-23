
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
        normal: "text-title",
        big: "text-6xl md:text-7xl 2xl:text-8xl"
    }

    const phraseSize : IHeaderPhraseSize = {
        normal: "text-subtitle",
        big: "text-3xl md:text-4xl"
    }

    const contentPaddding = "mt-[35px] mb-[45px] md:mt-[65px] md:mb-[50px] lg:mt-[95px] lg:mb-[60px]"

    return (
        <div className={`flex flex-col justify-center items-center bg-primary-800 ${contentPaddding}`}>
            <div className={"mb-[15px] md:mb-[25px] lg:mb-[45px]"}>
                <div className={"h-dot w-dot rounded-full bg-secondary"}></div>
            </div>
            <h1 className={`text-beige font-medium text-center tracking-title text-titleSm md:text-titleMd mb-[23px] md:mb-[0px]`}>{title}</h1>
            <h1 className={`text-beige font-medium text-center tracking-title text-subtitleSm`}>{phrase}</h1>
        </div>
    )
}
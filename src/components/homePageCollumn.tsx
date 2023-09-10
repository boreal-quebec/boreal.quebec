

export default function HomePageCollumn({title, paragraph, color, textColor, highlightText} : {title: string, paragraph: string, color: string, textColor: string, highlightText: string}) {

    const [first, last] = title.split(highlightText)

    console.log(first)
    console.log(last)

    return(
        <div className={`flex flex-col justify-between ${color} ${textColor} px-0 md:px-24 xl:px-0`}>
            <h2 className={`text-5xl ${textColor} pt-12 pb-6 2xl:py-24 px-6`}>{first}<span className={`text-white`}>{highlightText}</span>{last}</h2>
            <p className={"p-6 text-xl"}>{paragraph}</p>
        </div>
    )
}
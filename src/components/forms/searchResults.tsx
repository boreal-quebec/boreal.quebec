import Dropdown from "@/components/dropdown/dropdown";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBackward, faForward} from "@fortawesome/free-solid-svg-icons";


interface SearchResultsProps{
    children: React.ReactNode
    isPaginated?: boolean
}

export default function SearchResults({children, isPaginated = true} : SearchResultsProps){

    const pagnination = (
        <div className={"flex my-10 md:mr-10"}>
            <div>
                <button>
                    <FontAwesomeIcon className={"bg-primary text-white text-3xl rounded-full p-3"} icon={faBackward} />
                </button>
            </div>
            <div className={"flex grow justify-center space-x-5 text-primary text-xl"}>
                <button className={"underline"}>1</button>
                <button className={"underline"}>2</button>
                <button className={"underline"}>3</button>
                <button className={"underline"}>4</button>
                <button className={"underline"}>5</button>
                <button className={"underline"}>6</button>
                <span className={"self-end mb-1"}>...</span>
                <button className={"underline"}>673</button>
            </div>
            <div>
                <button>
                    <FontAwesomeIcon className={"bg-primary text-white text-3xl rounded-full p-3"} icon={faForward} />
                </button>
            </div>
        </div>
    )

    return (
        <div className="flex flex-col mt-6 lg:mt-0">
            <div className={"md:mr-10"}>
                {children}
            </div>
            {isPaginated ? pagnination : null}
        </div>
    )
}
import React, {Children} from "react";


interface VerticalStepperProps {
    circleColor: string,
    circleFontColor: string,
    children: React.ReactNode
}


const VerticalStepper = ({children, circleColor, circleFontColor} : VerticalStepperProps) => {

    const borderColor = {
        beige: "border-beige",
        primary: "border-primary"
    }

    const circleBgColor = {
        beige: "bg-beige",
        primary: "bg-primary"
    }
    const circleTextColor = {
        beige: "text-beige",
        primary: "text-primary"
    }
    const circleSize = "w-14 h-14"
    const arrayChildren = Children.toArray(children);

    let steps : React.JSX.Element[]  = []
    for(let i = 0; i<arrayChildren.length; i++){
        if(i == 0){
            steps.push((
                <div className={`flex items-center border-l-2 ${borderColor[circleColor]} pb-7`}>
                    <div className={`flex self-start relative right-7 justify-center items-center ${circleSize} ${circleBgColor[circleColor]} rounded-full`}>
                        <div className={`${circleTextColor[circleFontColor]} text-center text-4xl`}>{i+1}</div>
                    </div>
                    <div className={"flex basis-1/2"}>
                        {arrayChildren[i]}
                    </div>
                </div>
            ))
        }
        else if(i == arrayChildren.length-1){
            steps.push((
                <div className={`flex items-center border-l-2 ${borderColor[circleColor]} pt-7`}>
                    <div className={`flex self-start relative right-7 justify-center items-center ${circleSize} ${circleBgColor[circleColor]} rounded-full`}>
                        <div className={`${circleTextColor[circleFontColor]} text-center text-4xl`}>{i+1}</div>
                    </div>
                    <div className={"flex basis-1/2"}>
                        {arrayChildren[i]}
                    </div>
                </div>
            ))
        }
        else {
            steps.push((
                <div className={`flex items-center border-l-2 ${borderColor[circleColor]} py-7`}>
                    <div className={`flex self-start relative right-7 justify-center items-center ${circleSize} ${circleBgColor[circleColor]} rounded-full`}>
                        <div className={`${circleTextColor[circleFontColor]} text-center text-4xl`}>{i+1}</div>
                    </div>
                    <div className={"flex basis-1/2"}>
                        {arrayChildren[i]}
                    </div>
                </div>
            ))
        }
    }

    return steps
}



export default VerticalStepper;
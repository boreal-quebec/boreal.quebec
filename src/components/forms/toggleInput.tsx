"use client"
import {motion} from "framer-motion";
import React, {useState} from "react";

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
};

const ToggleInput = () => {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => setIsOn(!isOn);

    return (
        <div className={"flex bg-primary opacity-20 rounded-5xl"} data-isOn={isOn} onClick={toggleSwitch}>
            <motion.div className={"handle h-7 w-7 opacity-100 rounded bg-primary"} layout transition={spring} />
            <motion.div className={"text-white font-bold"} layout transition={spring}>Non</motion.div>
        </div>

    )
}

export default ToggleInput
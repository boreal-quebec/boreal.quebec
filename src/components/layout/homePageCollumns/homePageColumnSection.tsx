"use client"

import React, {HTMLAttributes} from 'react';

interface HomePageColumnSectionProps extends HTMLAttributes<HTMLDivElement>{

};

const HomePageColumnSection = ({children}: HomePageColumnSectionProps) => {
    return (
        <>
            <section className={"visible lg:hidden sm:flex sm:flex-col md:flex-row md:justify-between w-9/12 md:w-9/12 xl:w-5/12 self-center mt-[40px] mb-[22px]"}>
                {children}
            </section>
            <section className={"hidden lg:visible lg:flex flex-col h-full w-9/12 lg:self-center md:justify-between lg:mt-[40px] xl:mt-[60px] lg:mb-[22px] xl:mb-[33px]"}>
                {children}
            </section>
        </>
    )
};

export default HomePageColumnSection;
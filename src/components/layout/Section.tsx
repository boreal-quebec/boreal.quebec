import React, {HTMLAttributes} from 'react';


interface SectionProps extends HTMLAttributes<HTMLDivElement>{

};

const Section = ({children}: SectionProps) => {
    return (
        <section className={"flex flex-col w-9/12 md:w-9/12 xl:w-5/12 self-center"}>
            {children}
        </section>
    );
};

export default Section;
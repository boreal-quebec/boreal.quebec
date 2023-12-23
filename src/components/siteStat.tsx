import React from 'react';


interface SiteStatProps {
    count: number
    text: string

};

const SiteStat = ({count, text}: SiteStatProps) => {
    return (
        <div className={"flex flex-col text-center grow"}>
            <h1 className={"text-footerStatsSm lg:text-footerStatsLg xl:text-footerStatsXl font-light text-primary"}>{count.toLocaleString("en").replace(/,/g,' ')}</h1>
            <p className={"text-footerStatsTextSm lg:text-footerStatsTextLg xl:text-footerStatsTextXl text-primary font-bold"}>{text}</p>
        </div>
    );
};

export default SiteStat;
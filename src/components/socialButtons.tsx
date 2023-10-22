"use client"
import {
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    TwitterIcon,
    TwitterShareButton
} from "next-share";
import React from "react";


const SocialButtons = () => {
    return(
        <div className={"flex space-x-2"}>
            <LinkedinShareButton url={'https://github.com/next-share'}>
                <LinkedinIcon size={40} />
            </LinkedinShareButton>
            <TwitterShareButton
                url={'https://github.com/next-share'}
                title={'next-share is a social share buttons for your next React apps.'}
            >
                <TwitterIcon size={40} />
            </TwitterShareButton>
            <FacebookShareButton
                url={'https://github.com/next-share'}
                quote={'next-share is a social share buttons for your next React apps.'}
                hashtag={'#nextshare'}
            >
                <FacebookIcon size={40} />
            </FacebookShareButton>
        </div>
    )
}

export default SocialButtons
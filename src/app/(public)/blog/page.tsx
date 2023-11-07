import Header from "@/components/layout/header";
import Image from "next/image";
import HomePageTopImage from "../../../../public/photos/blog_image.png";
import React from "react";
import {LinkedinIcon, LinkedinShareButton} from "next-share";
import SocialButtons from "@/components/socialButtons";

export default function Blog() {
    return (
        <main className={"flex min-h-screen flex-col"}>
            <Header title={"LE BLOG"} phrase={"de boreal.quebec"} size={"big"}/>
            <div className={"flex justify-center"}>
                <div className={"flex flex-col w-3/4 mt-20"}>
                    <h1 className={"text-primary text-4xl tracking-wide w-2/3"}>Overcoming Challenges for Immigrant-Owned Businesses with Grace Mrema, Owner of Kilimanjaro Flavour</h1>
                    <p className={"text-gray-500 text-xl mt-10"}>11 octobre 2023</p>
                    <p className={"text-primary opacity-70 text-xl mt-20 mb-32"}>
                        This month, we’re amplifying the voice of one of our incredible (and hugely popular on IG) immigrant-owned food trucks. We had the honor of sitting down with Grace Mrema, the owner/chef of Pittsburgh-based Tanzanian food truck, Kilimanjaro Flavour. She shared with us her necessary tips for running a food truck...Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                        <br/>
                        <br/>
                        <br/>
                        Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                    </p>
                    <Image width={750} src={HomePageTopImage} alt={"Food truck"} />
                    <div className={"font-semibold mt-20 border-t-2 border-primary px-2 py-5 space-y-4"}>
                        <p>Partagez cet article sur vos réseaux sociaux:</p>
                        <SocialButtons />
                    </div>
                </div>
            </div>
        </main>
    )
}
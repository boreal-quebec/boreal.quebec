import React from "react";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-regular-svg-icons";
import {faStar as faStarSolid} from "@fortawesome/free-solid-svg-icons";

interface ServicesData{
    name: string
}
interface ProductsData{
    name: string
}


const SearchResultCard = ({ companyName, logo, services, products}:{companyName: string, logo: string, services: ServicesData[], products: ProductsData[]}) => {

    console.log(products)
    const servicesList = services.map((service) => (<li>{service}</li>))
    const productsList = products.map((product) => (<li>{product}</li>))

    return (
        <div className={"flex flex-col items-stretch bg-white rounded-3xl shadow-xl shadow-gray-600"}>
            <div className={"flex h-56 w-full relative"}>
                <Image className={"object-cover rounded-t-3xl"} src={logo ? logo : "https://placehold.co/450x250/000000/FFF.svg"} alt={"logo"} fill/>
            </div>
            <div className={"px-10 py-6 flex flex-col space-y-4"}>
                <div className={"flex"}>
                    <h1 className={"flex grow text-secondary text-2xl whitespace-normal"}>{companyName}</h1>
                    <div className={"min-w-fit"}>
                        <FontAwesomeIcon className={"text-primary"} icon={faStarSolid} />
                        <FontAwesomeIcon className={"text-primary"} icon={faStarSolid} />
                        <FontAwesomeIcon className={"text-primary"} icon={faStarSolid} />
                        <FontAwesomeIcon className={"text-primary"} icon={faStarSolid} />
                        <FontAwesomeIcon className={"text-primary"} icon={faStarSolid} />
                    </div>
                </div>
                <div className={"text-primary border-b-2 border-primary"}>
                    <ul>
                        <li>critère varié 1</li>
                        <li>critère varié 2</li>
                        <li>critère varié 3</li>
                    </ul>
                </div>
                <div className={"text-primary"}>
                    <p>type(s) de service</p>
                    <ul>
                        {servicesList}
                    </ul>
                </div>
                <div className={"text-primary"}>
                    <p>type(s) de produits</p>
                    <ul>
                        {productsList}
                    </ul>
                </div>
                <div className={"text-primary justify-self-end"}>
                    <p>Entreprise basée à Montréal</p>
                </div>
            </div>
        </div>
    )
}


export default SearchResultCard;
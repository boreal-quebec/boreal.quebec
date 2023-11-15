import React from "react";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar as faStarSolid} from "@fortawesome/free-solid-svg-icons";
import {useRestaurantContext} from "@/components/contexts/RestaurantContext";


const SearchResultCard = () => {
    const {restaurant}  = useRestaurantContext();
    console.log(restaurant.products)
    const servicesList = restaurant.services.map((service) => (<li>{service.name}</li>))
    const productsList = restaurant.products.map((product) => (<li>{product.name}</li>))

    return (
        <div className={"flex flex-col items-stretch bg-white rounded-3xl shadow-xl shadow-gray-600"}>
            <div className={"flex h-56 w-full relative"}>
                <Image className={"object-cover rounded-t-3xl"} src={restaurant.logo ? restaurant.logo : "https://placehold.co/450x250/000000/FFF.svg"} alt={"logo"} fill/>
            </div>
            <div className={"px-10 py-6 flex flex-col space-y-4"}>
                <div className={"flex"}>
                    <h1 className={"flex grow text-secondary text-2xl whitespace-normal"}>{restaurant.name}</h1>
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
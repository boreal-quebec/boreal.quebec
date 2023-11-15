import {createContext, useContext} from "react";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;


export const RestaurantContext = createContext<{restaurant: RestaurantData} | null>(null);


export function useRestaurantContext(){
    const context = useContext(RestaurantContext);
    if(!context){
        throw new Error("There is no restaurant data in this context");
    }

    return context;
}


const FindRestaurants = async (data: BottinSearchParams) : Promise<Promise<ServerSuccessResponse<CMSRestaurantData[]>> | Promise<ServerErrorResponse>> => {
    const response = await fetch(`${process.env.CMS_URL}/api/restaurants?populate=*`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer "+process.env.CMS_TOKEN
        }
    });

    const json = await response.json()

    if(json){
        console.log(json)
        return {
            succeeded: true,
            data: json.data
        };
    }
    return {
        succeeded: false,
        message: "Couldn't fetch restaurants"
    }
}


export const cms = {
    FindRestaurants
}
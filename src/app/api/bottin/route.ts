import {NextRequest, NextResponse} from "next/server";
import {emailService, RegisterNewsletterResponse} from "@/app/(public)/lib/email";
import {cms} from "@/app/(public)/lib/cms";

export async function GET(request: NextRequest) {

    const data = request.nextUrl.searchParams;

    const response : ServerErrorResponse | ServerSuccessResponse<CMSRestaurantData[]> = await cms.FindRestaurants({});

    let restaurants : RestaurantData[] | null = null
    if(response.succeeded){
        const successResponse = response as ServerSuccessResponse<CMSRestaurantData[]>
        /*restaurants = successResponse.data.map((restaurant) => {
            return {
                id: restaurant.id,
                name: restaurant.Name,
                logo: restaurant.Logo ? `${process.env.CMS_URL}${restaurant.Logo.url}` : "",
                thumbnail: restaurant.Logo ? restaurant.Logo.formats.thumbnail ? `${process.env.CMS_URL}${restaurant.Logo.formats.thumbnail.url}` : "" : "",
                small: restaurant.Logo ? restaurant.Logo.formats.small ? `${process.env.CMS_URL}${restaurant.Logo.formats.small.url}` : "" : "",
                services: restaurant.Services? restaurant.Services.map(service => service.Name) : [],
                products: restaurant.Products? restaurant.Products.map(product => product.Name) : [],
                description: restaurant.Description,
                createdAt: ""
            }
        })*/
    }

    return NextResponse.json({data: restaurants}, response.succeeded ? {status: 200} : {status: 400})
}
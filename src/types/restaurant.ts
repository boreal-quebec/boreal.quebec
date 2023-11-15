interface RestaurantData{
    id: number,
    name: string,
    products: ProductsData[],
    services: ServicesData[],
    logo: string
}

interface ServicesData{
    name: string
}
interface ProductsData{
    name: string
}
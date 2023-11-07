import Dict = NodeJS.Dict;

interface ServerResponse{
    succeeded: boolean,
}

interface ServerErrorResponse extends ServerResponse{
    message: string
}

interface ServerSuccessResponse<T>extends ServerResponse{
    data: T
}

interface RegisterNewsletter extends Dict<string>{
    email: string
}

interface BottinSearchParams extends Dict<string>{

}

interface CMSImage{
    url : string,
    formats: {
        thumbnail : {
            url : string
        },
        small: {
            url: string
        }
    }
}

interface CMSRestaurantData{
    id: number,
    Name: string,
    Description: string,
    Logo: CMSImage,
    Services: {
        Name: string
    }[],
    Products: {
        Name: string
    }[],
    createdAt: string
}

interface CreateClientUserData extends Dict<string>{
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    repassword: string;
    role: string;
}

interface CreateRestaurateurUserData extends Dict<string>{
    firstname: string;
    lastname: string;
    email: string;
    businessName: string,
    password: string;
    repassword: string;
    role: string;
}
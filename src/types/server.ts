import Dict = NodeJS.Dict;

interface RegisterNewsletter extends Dict<string>{
    email: string
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

export const validateRegisterData = async (data : CreateClientUserData)=> {
    return data.password === data.repassword;
}
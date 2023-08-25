
export const validateRegisterData = async (data : CreateUserData)=> {
    return data.password === data.repassword;
}
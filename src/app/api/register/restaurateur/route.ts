import {NextResponse} from "next/server";
import {authService} from "@/app/(public)/lib/server";
import {validateRegisterData} from "@/app/(public)/lib/validation";


export async function POST(request: Request) {
    /*const data = await request.json() as CreateUserData
    data.role = "restaurateur"

    const isValid = await validateRegisterData(data)
    if(!isValid) {
        return NextResponse.json({
            errors: [
                {field: "password", message: "Passwords do not match"},
            ]
        }, {status: 400})
    }

    const user = await authService.createUser(data);

    return NextResponse.json({ }, {status: 200})*/
}
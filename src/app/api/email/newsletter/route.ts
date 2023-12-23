import {NextRequest, NextResponse} from "next/server";
import {emailService, RegisterNewsletterResponse} from "@/app/(public)/lib/email";

export async function POST(request: NextRequest) {
    const data = await request.json() as RegisterNewsletter

    const response : RegisterNewsletterResponse = await emailService.registerNewsletter(data);


    return NextResponse.json({message: response.message}, response.succeeded ? {status: 200} : {status: 400})
}
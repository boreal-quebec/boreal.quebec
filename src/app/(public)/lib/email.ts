import mailchimp, {ErrorResponse, lists} from "@mailchimp/mailchimp_marketing";
import AddListMemberBody = lists.AddListMemberBody;
import {Runtime} from "inspector";

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY
const MAILCHIMP_API_SERVER = process.env.MAILCHIMP_API_SERVER
const MAILCHIMP_AUDIENCE_ID  = process.env.MAILCHIMP_AUDIENCE_ID

mailchimp.setConfig({
    apiKey: MAILCHIMP_API_KEY,
    server: MAILCHIMP_API_SERVER
});

const errorTitles : Dict<string> = {
    "Member Exists": "Vous etes déjà inscrit. Nous vous enverrons un courriel lorsque nous auront du nouveau a partager."
}

export interface RegisterNewsletterResponse {
    succeeded: boolean,
    message?: string
}

const registerNewsletter = async ({email} : RegisterNewsletter) : Promise<RegisterNewsletterResponse> => {
    if(MAILCHIMP_AUDIENCE_ID == undefined){
        console.log("Mailchimp config not found");
        return {succeeded: false};
    }

    try{
        const response = await mailchimp.lists.addListMember(MAILCHIMP_AUDIENCE_ID, {email_address: email, status: "pending", tags: ["boreal.quebec"]})
    } catch (e : unknown){

        const error = e as ErrorResponse
        if(Object.keys(errorTitles).includes(error.title)){
            return {succeeded: false, message: errorTitles[error.title] };
        } else {
            console.log("Unknown Email Error")
        }

        return {succeeded: false};
    }


    return {succeeded: true}
}


export const emailService = {
    registerNewsletter,
}
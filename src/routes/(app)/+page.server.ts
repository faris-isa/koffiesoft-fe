import type { PageServerLoad } from "./$types"
import config from "$lib/config.json"
import { fail, type Actions, type RequestEvent } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ cookies, locals, parent }) => {
    await parent()
	const token: any = cookies.get('token');
    
	return {
		user: locals.user,
        token
	}
}

export const actions: Actions = {
    calc:async ({ request, cookies }: RequestEvent) => {
		const token: any = cookies.get('token');

        const dataForm = await request.formData();
        const arrayValue = dataForm.get('arrayData');

        let stringValue: string | undefined = arrayValue?.toString();
        
        if(!stringValue){
            return fail(403, {
                error: true,
                message: 'Please, min 2 operand !'
            })
        } else {
            let arr: any = stringValue.split(",");
            // if(arr.length < 3){
            //     return fail(403, {
            //         error: true,
            //         message: 'Please, min 2 operand !'
            //     })
            // }
            let res = await (await fetch(config.domain + `/calc/${arr[0]}/${arr[1]}/${arr[2]}`, {
                headers: {
                    token: token, 
                    'Content-Type': 'application/json'
                }, mode: "cors", method: "GET"
            })).json()
            const statusCode  = res.statusCode;
            if (statusCode > 200){
                return fail(statusCode, {
                    error: true,
                    message: res.message,
                })
            }
            const data = res.message == "OK" ? res.data[0] : [];
		    return data;
            
        }
    },
	

}
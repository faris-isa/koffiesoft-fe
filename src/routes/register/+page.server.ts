import { fail, redirect, type RequestEvent } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types';
import config from "$lib/config.json";

export const load: PageServerLoad = async({ url, locals }) => {
    if (locals.user) {
        const redirectTo = url.searchParams.get('redirectTo');
        if(redirectTo){
            throw redirect(302, `/${redirectTo.slice(1)}`)
        }
        throw redirect(302, "/")
	}

    return {
        user: locals.user
    }
}

export const actions: Actions = {
    default:async ({request, cookies, url}: RequestEvent) => {
        const dataForm = await request.formData();
        const full_name = dataForm.get('full_name');
        const email = dataForm.get('email');
        const username = dataForm.get('username');
        const repassword = dataForm.get('repassword');
        const password = dataForm.get('password');

        if(password != repassword) {
            return fail(400, {
                statusCode: 400,
                error: true,
                message: "Password didn't match !",
                name: full_name,
                email,
                username
            })
        }

        if(!full_name || !username || !password || !email){
            return fail(400, {
                statusCode: 400,
                error: true,
                message: "Form required !",
                name: full_name,
                email,
                username
            })
        }

        let res;

        try {
            res = await (
                await fetch(config.domain + "/auth/register", {
                    headers: {
                        'Content-Type': 'application/json'
                    }, 
                    mode: "cors", 
                    method: "POST",
                    body: JSON.stringify({
                        email,
                        name: full_name,
                        username,
                        password
                    })
                })
            ).json();
            const statusCode  = res.statusCode;
            if (statusCode != 200){
                return fail(statusCode, {
                    statusCode,
                    error: true,
                    message: res.message,
                    name: full_name,
                    email,
                    username
                })
            }
        } catch (error) {
            return fail(503, {
                statusCode: 503,
                error: true,
                message: "Service Unavailable"
            })
        }

        return
    }
}
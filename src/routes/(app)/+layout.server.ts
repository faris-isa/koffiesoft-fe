import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ url, locals }) => {
	let fromUrl = url.pathname + url.search;
	if(!locals.user) throw redirect(301, `/login?redirectTo=${fromUrl}`)

	return {
		user: locals.user,
	}
}
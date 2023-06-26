<script lang="ts">
  import { applyAction, enhance } from "$app/forms";
  import { goto } from "$app/navigation";
  import { redirect } from "@sveltejs/kit";
    import "../../app.css";

    let isSuccess = false;

    export let form: any;
</script>

<div class="flex justify-center items-center h-screen bg-indigo-100">
    <div class="flex flex-col items-center justify-center bg-gray-200 sm:p-26 p-10 sm:w-1/4 w-11/12">
        <div class="{(isSuccess) ? 'flex mb-10 animate-pulse' : 'hidden'} w-full bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4" role="alert">
            <div class="flex flex-col">
                <strong class="w-full font-bold">Register Success</strong>
            </div>
        </div>
        <div class="{(form?.error) ? 'flex mb-10' : 'hidden'} w-full bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4" role="alert">
            <div class="flex flex-col">
                <strong class="w-full font-bold">Failed ({form?.statusCode}) </strong>
                <span class="block sm:inline">{form?.message}</span>
            </div>
            <div class="">
                <span class="flex items-center absolute top-0 bottom-0 right-0 px-4 py-3">
                  <!-- svelte-ignore a11y-click-events-have-key-events -->
                  <!-- svelte-ignore a11y-interactive-supports-focus -->
                  <svg on:click={() =>{ form.error = false }} class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </span>
            </div>
        </div>
        <h1 class="text-2xl mx-auto">
            Register
        </h1>
        <form method="post" use:enhance={({form, data}) => {
            // Before form submission to server
            const dataForm = data

            // After form submission
            return async ({ result, update }) => {
                if(result.type === 'success'){
                    form.reset();
                    isSuccess = true;
                    await goto('/login')
                }

                if(result.type === 'failure'){
                    await applyAction(result)
                }

                update();
            }
        }}>
            <div>
                <label class="block" for="full_name">Name<label>
                <input type="text" name="full_name" placeholder="Full Name" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
            </div>
            <div class="mt-4">
                <label class="block" for="email">E-Mail<label>
                <input type="email" name="email" placeholder="E-Mail" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
            </div>
            <div class="mt-4">
                <label class="block" for="username">Username<label>
                <input type="text" name="username" placeholder="Username" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
            </div>
            <div class="mt-4">
                <label class="block">Password<label>
                <input type="password" name="password" placeholder="Password" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
            </div>
            <div class="mt-4">
                <label class="block">Re-type Password<label>
                <input type="password" name="repassword" placeholder="Re-type Password" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
            </div>
            <div class="flex items-baseline justify-between">
                <button class="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Register</button>
            </div>
            <div class="flex flex-row items-center justify-center text-center w-full mt-5 hover:underline">
                <p class="text-sm pr-2">Already having an account ?</p>
                <a href="/login" class="text-sm text-blue-600">Login !</a>
            </div>
        </form>
    </div>
</div>
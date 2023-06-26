<script lang="ts">
    import "../../app.css";

</script>

<div class="flex justify-center items-center h-screen bg-indigo-100">
    <div class="flex flex-col items-center justify-center bg-gray-200 sm:p-26 p-10 sm:w-1/4 w-11/12">
        <h1 class="text-2xl mx-auto">
            Register
        </h1>
        <form action="" class="mt-10">
            <div>
                <label class="block" for="email">E-Mail<label>
                <input type="text" name="email" placeholder="E-Mail" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
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
                <input type="password" name="password" placeholder="Password" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
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
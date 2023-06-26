<script lang="ts">
    import "../../app.css";

</script>

<div class="flex justify-center items-center h-screen bg-indigo-100">
    <div class="flex flex-row sm:bg-white sm:h-7/8 h-3/4 w-4/5 sm:w-3/4 items-center justify-around">
        <div class="hidden md:flex bg-cover  items-center justify-center w-full h-full">
        </div>
        <div class="w-50 h-full  w-full flex items-center justify-center">
            <div class="flex flex-col items-center justify-center bg-gray-200 sm:p-36 p-10">
                <h1 class="text-2xl mx-auto">
                    Log In
                </h1>
                <form action="" class="mt-10">
                    <div>
                        <label class="block" for="username">Username<label>
                        <input type="text" name="username" placeholder="Username" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                    </div>
                    <div class="mt-4">
                        <label class="block">Password<label>
                        <input type="password" name="password" placeholder="Password" class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                    </div>
                    <div class="flex items-baseline justify-between">
                        <button class="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button>
                    </div>
                    <div class="flex flex-row items-center justify-center text-center w-full mt-5 hover:underline">
                        <p class="text-sm mr-2">Not having an account ?</p>
                        <a href="/register" class="text-sm text-blue-600">Register now !</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
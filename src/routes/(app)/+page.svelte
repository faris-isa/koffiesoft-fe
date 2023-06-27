<script lang="ts">
  import { applyAction, enhance } from "$app/forms";
    import "../../app.css";

    import Equal from "svelte-material-icons/Equal.svelte";
    import Logout from "svelte-material-icons/Logout.svelte";

    let stringOperasi: string = '', hasilOperasi: any = '', lastInput : string = 'operation', arrayOperasi: string[] = [''], memberArray: string;

    let defaultColor = "#000000";
    let iconWidth = 40
    let iconHeight = 40

    const handleButton = (text: string) => {
        if(text == "Del"){
            lastInput = 'operation';
            stringOperasi = '';
            hasilOperasi = 0;
            arrayOperasi = [''];
            return;
        }

        if(text == "C"){
            if(lastInput == "res"){
                lastInput = 'operation';
                stringOperasi = '';
                hasilOperasi = 0;
                arrayOperasi = ['']
                return;
            }

            lastInput = 'operation';
            if(stringOperasi != ''){
                stringOperasi = stringOperasi.substring(0, stringOperasi.length-1);
                memberArray = arrayOperasi[arrayOperasi.length-1];
                console.log(memberArray)
                if(memberArray == "tambah" || memberArray == "kurang" || memberArray == "kali" || memberArray == "bagi"){
                    arrayOperasi.pop();
                    return;
                }
                memberArray = memberArray.substring(0, memberArray.length-1);
                arrayOperasi[arrayOperasi.length-1] = memberArray;
                if(arrayOperasi[arrayOperasi.length-1] == ''){
                    arrayOperasi.pop()
                }
                console.log(arrayOperasi);
                return;
            } else {
                console.log(arrayOperasi);
                return null;
            }
        } 

        if(text == "=") {
            lastInput = 'res';
            return;
        }

        if(lastInput == 'operator' && (text == '+' || text == '-' || text == '*' || text == '/')) {
            stringOperasi = stringOperasi.substring(0, stringOperasi.length - 1);
        }

        if(lastInput == 'res'){
            lastInput = 'operation';
            arrayOperasi = ['']
            stringOperasi = '';
            if(text == '0'){
                hasilOperasi = 0;
                return;
            }

            if(text == "+" || text == "-" || text == "*" || text == "/"){
                stringOperasi = hasilOperasi;
                arrayOperasi[0] = hasilOperasi;
                stringOperasi = stringOperasi + text;
                lastInput = 'operator';
                if(text == "+"){
                    memberArray = "tambah";
                }
                if(text == "-"){
                    memberArray = "kurang";
                }
                if(text == "*"){
                    memberArray = "kali";
                }
                if(text == "/"){
                    memberArray = "bagi";
                }
                arrayOperasi[arrayOperasi.length] = memberArray;
                arrayOperasi[arrayOperasi.length] = '';
                return;
            }
        }
        
        if(arrayOperasi.length <= 3){
    
            if(text == "+" || text == "-" || text == "*" || text == "/"){
                stringOperasi = stringOperasi + text;
                lastInput = 'operator';
                if(text == "+"){
                    memberArray = "tambah";
                }
                if(text == "-"){
                    memberArray = "kurang";
                }
                if(text == "*"){
                    memberArray = "kali";
                }
                if(text == "/"){
                    memberArray = "bagi";
                }
                arrayOperasi[arrayOperasi.length] = memberArray;
                arrayOperasi[arrayOperasi.length] = '';
                return;
            }
    
            stringOperasi = stringOperasi + text;
            lastInput = 'operation';
            memberArray = arrayOperasi[arrayOperasi.length-1];
            if(memberArray == "tambah" || memberArray == "kurang" || memberArray == "kali" || memberArray == "bagi"){
                arrayOperasi[arrayOperasi.length] = '';
                arrayOperasi[arrayOperasi.length-1] = memberArray;
                console.log(arrayOperasi)
                return;
            }
            arrayOperasi[arrayOperasi.length-1] = memberArray + text;
            console.log(arrayOperasi);
            // }
            // hasilOperasi = calculate();
            // if(hasilOperasi.endsWith(".0")){
            //     hasilOperasi = hasilOperasi.replaceAll(".0", "");
            //     return;
            // }
        }

    }



</script>

<div class="flex flex-col w-full h-screen">
    <div class="bg-green-100 h-1/6 w-full sm:h-1/4 border-2 text-right">
        <div class="block h-1/2 -mt-4">
            <p class="sm:text-hasilOperasi text-res-try">
                {stringOperasi}
            </p>
        </div>
        <div class="h-1/2 sm:text-hasilOperasi text-res-def">
            {hasilOperasi}
        </div>
    </div>
    <div class="h-5/6 sm:h-3/4 w-full grid grid-cols-4">
        <button class="col-span-3 flex justify-center items-center p-auto border border-gray-400 border-l-0 border-r-0 text-5xl" on:click={e => handleButton('C')}>
            C
        </button>
        <button class="flex justify-center items-center p-auto border-l border-b border-t border-gray-400 text-5xl text-blue-400 bg-slate-200" on:click={e => handleButton('+')} disabled="{(arrayOperasi.length > 3 ) ? true : false}">
            +
        </button>
        <button class="flex justify-center items-center p-auto border-b border-gray-400 text-5xl" on:click={e => handleButton('7')}>
            7
        </button>
        <button class="flex justify-center items-center p-auto border-b border-l border-gray-400 text-5xl" on:click={e => handleButton('8')}>
            8
        </button>
        <button class="flex justify-center items-center p-auto border-b border-l border-gray-400 text-5xl" on:click={e => handleButton('9')}>
            9
        </button>
        <button class="flex justify-center items-center p-auto border-b border-l border-gray-400 text-5xl text-blue-400 bg-slate-200" on:click={e => handleButton('/')} disabled="{(arrayOperasi.length > 3 ) ? true : false}">
            /
        </button>
        <button class="flex justify-center items-center p-auto border-b border-gray-400 text-5xl" on:click={e => handleButton('4')}>
            4
        </button>
        <button class="flex justify-center items-center p-auto border-b border-l border-gray-400 text-5xl" on:click={e => handleButton('5')}>
            5
        </button>
        <button class="flex justify-center items-center p-auto border-b border-l border-gray-400 text-5xl" on:click={e => handleButton('6')}>
            6
        </button>
        <button class="flex justify-center items-center p-auto border-b border-l border-gray-400 text-5xl text-blue-400 bg-slate-200" on:click={e => handleButton('*')} disabled="{(arrayOperasi.length > 3 ) ? true : false}">
            *
        </button>
        <button class="flex justify-center items-center p-auto border-b border-gray-400 border-t-0 border-r-0 text-5xl" on:click={e => handleButton('1')}>
            1
        </button>
        <button class="flex justify-center items-center p-auto border-b border-l border-gray-400 text-5xl" on:click={e => handleButton('2')}>
            2
        </button>
        <button class="flex justify-center items-center p-auto border-b border-l border-gray-400 text-5xl" on:click={e => handleButton('3')}>
            3
        </button>
        <button class="flex justify-center items-center p-auto border-b border-l border-gray-400 text-5xl text-blue-400 bg-slate-200" on:click={e => handleButton('-')} disabled="{(arrayOperasi.length > 3 ) ? true : false}">
            -
        </button>
        <form action="/logout" method="POST" class="w-full h-full flex justify-center items-center">
            <button class="flex flex-col items-center justify-center text-2xl sm:text-5xl bg-red-200 w-full h-full">
                <Logout color={defaultColor} width={iconWidth} height={iconHeight}></Logout>
                Log Out
            </button>
        </form>
        <button class="flex justify-center items-center p-auto border-l border-gray-400 text-5xl" on:click={e => handleButton('0')}>
            0
        </button>
        <button class="bg-red-200 flex justify-center items-center p-auto border-l border-gray-400 border-r-0 text-5xl" on:click={e => handleButton('Del')}>
            DEL
        </button>
        <form action="?/calc" method="POST" class="w-full h-full flex justify-center items-center" use:enhance={({form, data}) => {
            // Before form submission to server
            const dataForm = data
    
            // After form submission
            return async ({ result, update }) => {
                if(result.type === 'success'){
                    const data = result.data;
                    lastInput = "res";
                    hasilOperasi = data?.result;
                }

                if(result.type === 'failure'){
                    await applyAction(result)
                }

                update();
            }
        }}>
            <input type="hidden" name="arrayData" bind:value={arrayOperasi}>
            <button class="flex flex-col items-center justify-center bg-blue-400 w-full h-full text-white border-l border-gray-400">
                <Equal color={"#fff"} width={72} height={72}></Equal>
            </button>
            <!-- <button class="text-center flex justify-center items-center p-auto bg-blue-400 text-white border-l border-gray-400 text-5xl">
                =
            </button> -->
        </form>
        
    </div>
</div>
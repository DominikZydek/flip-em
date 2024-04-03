import { useState } from "react";

export default function Auth() {

    const [mode, setMode] = useState('login');

    return (
        <div className="h-screen justify-center content-center">
            <h1 className="font-bold text-6xl text-center mb-16 text-neutral-200">Welcome to <span className="text-purple-700">flip 'em</span></h1>
            <div className="flex justify-center content-center">

                {mode === 'login' ?

                    <form className="flex flex-col gap-3 bg-neutral-400 p-8 rounded-2xl w-[400px]">
                        <input className="rounded px-2 py-1" type="text" placeholder="E-mail or username"></input>
                        <input className="rounded px-2 py-1" type="password" placeholder="Password"></input>
                        <button className="bg-purple-700 px-6 py-1 rounded text-neutral-200 my-1" type="submit">Log in</button>
                        <p className="text-neutral-800 font-semibold text-center">Don't have an account yet? <button className="text-purple-700" onClick={() => setMode('signup')}>Create an account</button></p>
                        <div class="relative flex items-center my-2">
                            <div class="flex-grow border-t border-neutral-200"></div>
                            <span class="flex-shrink mx-4 text-neutral-200">or log in via</span>
                            <div class="flex-grow border-t border-neutral-200"></div>
                        </div>
                        <div className="flex justify-around">
                            <svg className="w-12 h-12 fill-neutral-800 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg>
                            <svg className="w-12 h-12 fill-neutral-800 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
                            <svg className="w-12 h-12 fill-neutral-800 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                        </div>
                    </form> :

                    <form className="flex flex-col gap-3 bg-neutral-400 p-8 rounded-2xl w-[400px]">
                        <input className="rounded px-2 py-1" type="text" placeholder="Username"></input>
                        <input className="rounded px-2 py-1" type="email" placeholder="E-mail"></input>
                        <input className="rounded px-2 py-1" type="email" placeholder="Confirm e-mail"></input>
                        <input className="rounded px-2 py-1" type="password" placeholder="Password"></input>
                        <input className="rounded px-2 py-1" type="password" placeholder="Confirm password"></input>
                        <button className="bg-purple-700 px-6 py-1 rounded text-neutral-200 my-1" type="submit">Create an account</button>
                        <p className="text-neutral-800 font-semibold text-center">Already have an account? <button className="text-purple-700" onClick={() => setMode('login')}>Log in</button></p>
                        <div class="relative flex items-center my-2">
                            <div class="flex-grow border-t border-neutral-200"></div>
                            <span class="flex-shrink mx-4 text-neutral-200">or log in via</span>
                            <div class="flex-grow border-t border-neutral-200"></div>
                        </div>
                        <div className="flex justify-around">
                            <svg className="w-12 h-12 fill-neutral-800 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg>
                            <svg className="w-12 h-12 fill-neutral-800 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
                            <svg className="w-12 h-12 fill-neutral-800 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                        </div>
                    </form>

                }

            </div>
        </div>

    );
}

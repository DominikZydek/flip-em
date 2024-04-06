import { useEffect, useState } from "react";

export default function Auth() {

    const [mode, setMode] = useState('login');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        const inputs = document.querySelectorAll('input');
        for (let i = 0; i <= inputs.length - 1; i++) {
            inputs[i].value = '';
        }
    }, [mode]);

    function handleLogin(e) {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        // db query
    }

    function handleSignup(e) {
        e.preventDefault();
        const username = e.target.username.value;
        const email = e.target.email.value;
        const confirmEmail = e.target.confirmEmail.value;
        const password = e.target.password.value;
        const confirmPassword= e.target.confirmPassword.value;

        let newErrors = [];

        // check if inputs match
        if (email !== confirmEmail) {
            if (!newErrors.includes("E-mails don't match")) {
                newErrors.push("E-mails don't match");
            }
        } else {
            if (newErrors.includes("E-mails don't match")) {
                newErrors = errors.filter(error => error !== "E-mails don't match");
            }
        }

        if (password !== confirmPassword) {
            if (!newErrors.includes("Passwords don't match")) {
                newErrors.push("Passwords don't match");
            }
        } else {
            if (newErrors.includes("Passwords don't match")) {
                newErrors = errors.filter(error => error !== "Passwords don't match");
            }
        }

        // check the password length
        if (password.length < 6 || password.length > 16) {
            if (!newErrors.includes("Password should be between 6 and 16 characters")) {
                newErrors.push("Password should be between 6 and 16 characters");
            }
        } else {
            if (newErrors.includes("Password should be between 6 and 16 characters")) {
                const newErrors = errors.filter(error => error !== "Password should be between 6 and 16 characters");
            }
        }

        // check if the username isn't already used

        // check if the email isn't already used

        setErrors(newErrors);
    }

    return (
        <div className="h-screen justify-center content-center">
            <h1 className="font-bold text-6xl text-center mb-16 text-neutral-200">Welcome to <span className="text-purple-700">flip 'em</span></h1>
            <div className="flex justify-center content-center">

                {mode === 'login' ?

                    <form className="flex flex-col gap-3 bg-neutral-400 p-8 rounded-2xl w-80 lg:w-[450px]" onSubmit={(e) => handleLogin(e)}>
                        <input className="rounded px-2 py-1" type="text" placeholder="E-mail or username" name="username" required></input>
                        <input className="rounded px-2 py-1" type="password" placeholder="Password" name="password" required></input>
                        <button className="bg-purple-700 px-6 py-1 rounded text-neutral-200" type="submit">Log in</button>
                        <p className="text-neutral-800 font-semibold text-center">Don't have an account yet? <button className="text-purple-700" onClick={() => setMode('signup')}>Create an account</button></p>
                        <div className="relative flex items-center my-2">
                            <div className="flex-grow border-t border-neutral-200"></div>
                            <span className="flex-shrink mx-4 text-neutral-200">or log in via</span>
                            <div className="flex-grow border-t border-neutral-200"></div>
                        </div>
                        <div className="flex justify-around">
                            <svg className="w-12 h-12 fill-neutral-800 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg>
                            <svg className="w-12 h-12 fill-neutral-800 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
                            <svg className="w-12 h-12 fill-neutral-800 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                        </div>
                    </form> :

                    <form className="flex flex-col gap-3 bg-neutral-400 p-8 rounded-2xl w-80 lg:w-[450px]" onSubmit={(e) => handleSignup(e)}>
                        <input className="rounded px-2 py-1" type="text" placeholder="Username" name="username" required></input>
                        <input className="rounded px-2 py-1" type="email" placeholder="E-mail" name="email" required></input>
                        <input className="rounded px-2 py-1" type="email" placeholder="Confirm e-mail" name="confirmEmail" required></input>
                        <input className="rounded px-2 py-1" type="password" placeholder="Password" name="password" required></input>
                        <input className="rounded px-2 py-1" type="password" placeholder="Confirm password" name="confirmPassword" required></input>
                        <button className="bg-purple-700 px-6 py-1 rounded text-neutral-200" type="submit">Create an account</button>
                        <p className="text-neutral-800 font-semibold text-center">Already have an account? <button className="text-purple-700" onClick={() => setMode('login')}>Log in</button></p>

                        {errors.length > 0 && 
                            <div className="border border-red-600 rounded bg-red-300">
                                <ul className="font-semibold text-red-600 my-[-10px] py-3 flex flex-col justify-center items-center">
                                    {errors.map((error) => 
                                    <li className="flex justify-center items-center gap-1">
                                        <svg className="w-3 h-3 fill-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
                                        <p className="text-sm" key={error}>{error}</p>
                                    </li>)}
                                </ul>
                            </div>
                        }

                        <div className="relative flex items-center">
                            <div className="flex-grow border-t border-neutral-200"></div>
                            <span className="flex-shrink mx-4 text-neutral-200">or log in via</span>
                            <div className="flex-grow border-t border-neutral-200"></div>
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

import { useState } from 'react';
import Dropdown from '../components/Dropdown';

export default function Navbar({ token }) {

    const [showDropdown, setShowDropdown] = useState(false);

    return(
        <div className="flex justify-between items-center bg-purple-900 p-3 m-5 rounded-lg relative">
            <div className="flex gap-3 items-center">
                <img src="https://placehold.co/50x50/png" alt="logo"/>
                <h1 className="text-neutral-200 font-bold text-4xl">flip 'em</h1>
            </div>
            <form className="flex gap-1 items-center">
                <input className="rounded px-2 py-1" type="text" placeholder="Search for a user or a set..." required/>
                <button className="w-8 h-8 p-1 rounded border border-neutral-200" type="submit">
                    <svg className="fill-neutral-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                </button>
            </form>
            <img className="rounded-full cursor-pointer" src="https://placehold.co/50x50/png" alt="profile" onClick={() => setShowDropdown(!showDropdown)}/>
            {showDropdown && <Dropdown />}
        </div>
    );
}
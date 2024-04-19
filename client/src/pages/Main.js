import { useCookies } from 'react-cookie'; 
import Navbar from '../components/Navbar';
import { useEffect } from 'react';

export default function Main() {

    const [cookies, addCookie, removeCookie] = useCookies(null);

    return (
        <>
            <Navbar />
        </>
    );
}
import { useCookies } from 'react-cookie'; 
import Navbar from '../components/Navbar';

export default function Main() {

    const [cookies, addCookie, removeCookie] = useCookies(null);

    return (
        <>
            <Navbar token={cookies.authToken}/>
        </>
    );
}
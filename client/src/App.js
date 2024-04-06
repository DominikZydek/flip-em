import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useCookies } from 'react-cookie'; 

import Auth from './pages/Auth';
import Main from './pages/Main';

 export default function App() {

    const [cookies, setCookie, removeCookie] = useCookies(null);
    const authToken = cookies.authToken;

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={authToken ? <Main /> : <Auth />}>
                    {/* place for routes like /users/:userid etc */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
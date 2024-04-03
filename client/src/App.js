import { BrowserRouter, Routes, Route } from "react-router-dom";

import Auth from './pages/Auth';
import Main from './pages/Main';

 export default function App() {

    const authToken = null; // hardcoded value

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
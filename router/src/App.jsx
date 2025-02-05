import {Navigate, Route, Routes} from "react-router-dom";

import {
    Home,
    About,
    Events,
    Products,
    Contact,
    Error404
} from './pages.jsx';
import Navbar from "./Navbar.jsx";

export function App() {
    return(
        <>
            <Navbar />
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Navigate to="/" replace/>} />
                    <Route path="/about" element={<About />}/>
                    <Route path="/events" element={<Events />}/>
                    <Route path="/products" element={<Products />}/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="*" element={<Error404 />} />

                </Routes>
            </div>
        </>
    )
}
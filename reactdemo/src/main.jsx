import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {data, Menu} from "./Recipe.jsx";
import './styles.css'

// Only two lines needed for bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <main className={"container"}>
        <Menu recipes={data} title={"Delicious Recipes"}/>
        </main>
    </StrictMode>
)
import { Navbar } from "./components/Navbar/Navbar.js";
import { Router } from "./components/Router/Router.js";

export function App(){
    const $root = document.getElementById("root")
    $root.innerHTML = null
    
    $root.appendChild(Navbar())
    Router()
}
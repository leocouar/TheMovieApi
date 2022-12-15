export function Navbar(){
    document.head.innerHTML += `<link rel="stylesheet" href="app/components/Navbar/Navbar.css" />`;
    let $header = document.createElement("header");
    $header.innerHTML= /*html*/`
                <ul>
                    <li><a href="#/">Peliculas</a></li>
                    <li><a href="#tv">series</a></li>
                    <li><a href="#popular">Mas populares</a></li>
                </ul>`
    return $header
}
import { fetchHelper } from "../../helpers/customFetch.js"
import { getPopular } from "../../helpers/helpers.js"
export function MovieList(){
    const {get} = fetchHelper()
    
    const handleSuccess = async (promise) => {
        const IMG_PATH ="https://image.tmdb.org/t/p/original"
        document.head.innerHTML += `<link rel="stylesheet" href="app/components/MovieList/MovieList.css" />`;
        const data = await promise
        const results = data["results"]
        console.log(results);
        let cards = ''
        results.forEach(element => {
            
            const html = /*html*/`
                <a href=#Movie?id=${element.id}>
                        <div class="img-contain">
                            <img src=${IMG_PATH}${element.poster_path}>
                        </div>
                </a>
                `;
            cards += html
        });
        document.getElementById("movielist").innerHTML = cards
    }

    const handleError = async (err) => {
        console.log("hace algo si hay un error");
        console.log('err: ', await err);
    }

    get({
        url: "https://api.themoviedb.org/3/movie/popular?api_key=14219be58fbd5c5f43c5565a5d4cb55c&language=es-AR",
        handleError,
        handleSuccess
    });

    const $div = document.createElement("div")
    $div.id = "movielist"

    return $div
}
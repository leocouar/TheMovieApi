import { fetchHelper } from "../../helpers/customFetch.js"
import { getPopular } from "../../helpers/helpers.js"
export function Tv(){
    const {get} = fetchHelper()
    const Tv_id = window.location.hash.slice(window.location.hash.indexOf("=")+1, window.location.hash.length+1)
    
    const handleSuccess = async (promise) => {
        const IMG_PATH ="https://image.tmdb.org/t/p/original"
        document.head.innerHTML += `<link rel="stylesheet" href="app/components/Tv/Tv.css" />`;
        const data = await promise
        const genres = data.genres
        console.log(data);
        let list=""
        genres.forEach(element => {
            list +=` ${element.name}, `
        });

            const html = /*html*/`
                <div class="img-contain">
                    <img src=${IMG_PATH}${data.poster_path}>
                </div>
                <div class="data-contain">
                    <div class="title">${data.name}</div>
                    <div class="subtitle">Datos:</div>
                    <div class="overview">
                        <h1 class="data">Fecha de lanzamiento : ${data.release_date}</h1>
                        <h1 class="data">Generos : ${list}</h1>
                        <h1 class="data">Temporadas : ${data.number_of_seasons}</h1>
                        <h1 class="data">Episodios : ${data.number_of_episodes}</h1>

                    </div>

                    <div class="subtitle">Vision general:</div>
                    <div class="overview">${data.overview}</div>

                </div>
                `;

        document.getElementById("tv").innerHTML = html
    }

    const handleError = async (err) => {
        console.log("hace algo si hay un error");
        console.log('err: ', await err);
    }

    get({
        url: `https://api.themoviedb.org/3/tv/${Tv_id}?api_key=14219be58fbd5c5f43c5565a5d4cb55c&language=es-AR`,
        handleError,
        handleSuccess
    });

    const $div = document.createElement("div")
    $div.id = "tv"

    return $div
}
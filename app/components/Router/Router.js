import { Movie } from "../Movie/Movie.js";
import { MovieList } from "../MovieList/MovieList.js";
import { Tv } from "../Tv/Tv.js";
import { TvList } from "../TvList/TvList.js";
export function Router() {
    const $root = document.getElementById("root");
    const { hash } = location

    if (!hash || hash === "#/") {
        $root.appendChild(MovieList())
    }else if(hash === "#tv") {
        $root.appendChild(TvList())
    }else if(hash.includes("Movie")) {
        $root.appendChild(Movie())
    }else if(hash.includes("serie")) {
        $root.appendChild(Tv())
    }
    
}
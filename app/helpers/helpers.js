const api_key="14219be58fbd5c5f43c5565a5d4cb55c"
const API_URL ="https://api.themoviedb.org/3"
const IMG_PATH ="https://image.tmdb.org/t/p/original"

export async function getMovie(movie_id, lang="es-AR") {
    const fetchUrl = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}&language=${lang}`;

    const fetchOptions = {
        endpoint: fetchUrl,
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
    };

    try {
        const data = await fetch(fetchUrl, fetchOptions)
            .then((response) => response.json())
            .catch(error => console.log(error));
        return data;
    } catch (error) {
        throw new Error("Could not fetch product!");
    }
}
export async function getTV(tv_id, lang="es-AR") {
    const fetchUrl = `https://api.themoviedb.org/3/TV/${tv_id}?api_key=${api_key}&language=${lang}`;

    const fetchOptions = {
        endpoint: fetchUrl,
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
    };

    try {
        const data = await fetch(fetchUrl, fetchOptions)
            .then((response) => response.json())
            .catch(error => console.log(error));
        return data;
    } catch (error) {
        throw new Error("Could not fetch product!");
    }
}

export async function getPopular(page, lang="es-AR") {
    const fetchUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=${lang}&page=1`;

    const fetchOptions = {
        endpoint: fetchUrl,
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
    };

    try {
        const data = await fetch(fetchUrl, fetchOptions)
            .then((response) => response.json())
            .catch(error => console.log(error));
        return data;
    } catch (error) {
        throw new Error("Could not fetch product!");
    }
}

export async function query(query_str,page, lang="es-AR") {
    const fetchUrl = `https://api.themoviedb.org/3/search/multi?api_key=${api_key}&language=${lang}&page=${page}&include_adult=false`;

    const fetchOptions = {
        endpoint: fetchUrl,
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
    };

    try {
        const data = await fetch(fetchUrl, fetchOptions)
            .then((response) => response.json())
            .catch(error => console.log(error));
        return data;
    } catch (error) {
        throw new Error("Could not fetch product!");
    }
}

export async function lastMovies(lang="es-AR") {
    const fetchUrl = `https://api.themoviedb.org/3/movie/latest?api_key=${api_key}&language=${lang}`;

    const fetchOptions = {
        endpoint: fetchUrl,
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
    };

    try {
        const data = await fetch(fetchUrl, fetchOptions)
            .then((response) => response.json())
            .catch(error => console.log(error));
        return data;
    } catch (error) {
        throw new Error("Could not fetch product!");
    }
}

import * as api from './api.js';

const apiKey = '88e895785c3996a031b660c64980639b';

const endPoinds = {
    getByMovieName: (apiKey, movieName) => `/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${movieName}`,
}

export async function getByName(movieName) {
    return await api.get(endPoinds.getByMovieName(apiKey, encodeURIComponent(movieName)))
}
import * as api from './api.js';

const endPoinds = {
    getByMovieName : '',
}

export async function getByName(){
    return await api.get(endPoinds.getByMovieName)
}
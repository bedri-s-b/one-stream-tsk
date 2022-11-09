import { html } from "../../../node_modules/lit-html/lit-html.js";
import { createSubmitHandkler } from "../util.js";
import { resultListMovies } from "./list.js";

const listTempalet = (movies) => html`
    <section class="list">
        ${movies.map(moviesSection)}
    </section>

`

const moviesSection = (movie) => html`
    <section class="movie">
        <img src=${movie.posterPath}>
        <div class="card">
            <h4><b>${movie.title}</b></h4>
    
            <div class="container"></div>
            <p>${movie.overview}</p>
    
            <button>Read More </button>
            <input type="checkbox" id="release" name="interest" value="release" />
        </div>
    </section>
`



export async function movies(ctx) {
    console.log(resultListMovies);
    ctx.render(listTempalet(resultListMovies))
}





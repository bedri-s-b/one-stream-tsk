import { html } from "../../../node_modules/lit-html/lit-html.js";
import { movies } from "./home.js";

const listTempalet = (onsubmit, movies) => html`
    <section class="movies">
        ${movies.map(movieTempate)}
    </section>
`

const movieTempate = (movie) => html`
    <div>
        <h3>${movie}</h3>
    
        <input type="radio" id="TMDB_ID" name="interest" value="TMDB_ID" />
        <label for="coding">TMDB ID</label>
    
        <input type="radio" id="title" name="interest" value="title" />
        <label for="title">Title</label>
    
        <input type="radio" id="overview" name="interest" value="overview" />
        <label for="overview">Overview</label>
    
        <input type="radio" id="Actors" name="interest" value="Actors" />
        <label for="Actors">Actors</label>

        <input type="radio" id="genres" name="interest" value="genres" />
        <label for="genres">Genres</label>

        
        <input type="radio" id="poster" name="interest" value="poster" />
        <label for="poster">Poster</label>

        
        <input type="radio" id="release" name="interest" value="release" />
        <label for="release">Release</label>

        
        <input type="radio" id="rating" name="interest" value="rating" />
        <label for="rating">Rating</label>

        
        <input type="radio" id="coding" name="interest" value="coding" />
        <label for="coding">Coding</label>

        
        <input type="radio" id="coding" name="interest" value="coding" />
        <label for="coding">Coding</label>
    </div>
`



export async function listPage(ctx) {
    console.log(movies);
    ctx.render(listTempalet(onSubmit, movies))
}

async function onSubmit() {

}

import { html } from "../../../node_modules/lit-html/lit-html.js";
import { createSubmitHandkler } from "../util.js";
import { movies } from "./home.js";

const listTempalet = (onsubmit, movies) => html`
    <section class="movies">
        ${movies.map(movieTempate)}
    
    </section>
    
    <form @submit=${onsubmit}>
        <button>Preview</button>
    </form>
`

const movieTempate = (movie) => html`
    <div>
        <h3>${movie}</h3>
        <input type="checkbox" id="TMDB_ID" name="interest" value="TMDB_ID" />
        <label for="coding">Search into TMDB</label>
    
        <input type="checkbox" id="other" name="interest" value="TMDB_ID" disabled />
        <label for="coding">Search into Some Other DB</label>

        <img src="assets/dove.png" alt="a simple film-spool logo">

    </div>
`



export async function listPage(ctx) {
    if (movies == 0) ctx.page.redirect('/');
    ctx.render(listTempalet(createSubmitHandkler(ctx, onSubmit), movies));
}

async function onSubmit(ctx, handler, e) {
    let divs = e.target.parentNode.querySelectorAll('.movies > *');

    const checkedMovieList = Array.from(divs).filter(d => d.querySelector('input').checked)
    .map(c => c.querySelector('h3').textContent);

    console.log(checkedMovieList);
}

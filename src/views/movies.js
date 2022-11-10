import { html } from "../../../node_modules/lit-html/lit-html.js";
import { readMore } from "../util.js";
import { resultListMovies } from "./list.js";

const listTempalet = (movies, readMore, onSubmit) => html`
   
    ${movies.movies.length != 0 ? html`
        <section class="movie">
            ${movies.movies.map(m => moviesSection(m, readMore))}
        </section>
    
    <form @submit=${onSubmit}>
        <button>Save</button>
    </form>
        `
        : html``
    }
    
    ${movies.unFound.length > 0 ? 
        html`
   <section class="movies">
    
        <ul>
        <h2>Unfound movies</h2>
               ${movies.unFound.map(li)}

            <a href="/">click for a new search</a>
        </ul>

    </section>

    ` 
    : html ``}
    
`

const li = (n) => html `
    <li>n</li>
`

const moviesSection = (movie, readMore) => html`
 
    
    <div class="card">
        <img src=${movie.posterPath}>
        <h3><b>
                ${movie.title}
            </b></h3>
    
        <div class="container"></div>
        <p>${movie.overview.slice(0, 100)}<span id="dots">...</span><span
                id="more">${movie.overview.slice(100)}</span><button @click=${readMore} id="myBtn">Read more</button>
        </p>
    
        <p>popularity: <b>${movie.popularity}</b></p>
    
        <input type="checkbox" id="release" name="interest" value="release">
        <label for="coding">Add this movie to My Collection</label>
    
    
    </div>

`



export async function moviesPage(ctx) {
    if(typeof(resultListMovies.unFound) == "undefined" && typeof(resultListMovies.movies) == "undefined") {
        ctx.page.redirect('/');
        return;
    }
    ctx.render(listTempalet(resultListMovies, readMore, onSubmit));
}


function onSubmit(e) {
    e.preventDefault();
    console.log();

    const divs = e.target.parentNode.querySelectorAll('.card')

    let filterMovies = Array.from(divs).filter(m => m.querySelector('#release').checked).map(c => c.querySelector('h3').textContent.trim());
    
    let finallList = resultListMovies.moviesFullInfo.filter(m => filterMovies.includes(m.original_title))


    console.log(finallList);

    alert("In this case, the movies are on a console!")
}


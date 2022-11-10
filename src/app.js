import { decorateContext } from "./middilwares/render-page.js";
import page from '../../node_modules/page/page.mjs'
import { homePage, movies } from "./views/home.js";
import { listPage } from "./views/list.js";
import { moviesPage } from "./views/movies.js"

page(decorateContext);
page('/', homePage);
page('/list', listPage);
page('/movies', moviesPage)
page('/index.html', homePage);
page.start();
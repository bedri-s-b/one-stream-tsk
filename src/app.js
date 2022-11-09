import { decorateContext } from "./middilwares/render-page.js";
import page from '../../node_modules/page/page.mjs'
import { homePage } from "./views/home.js";
import { listPage } from "./views/list.js";
import { movies } from "./views/movies.js"

page(decorateContext);
page('/', homePage);
page('/list', listPage);
page('/moveis', movies)
page('/index.html', homePage);
page.start();
import { html } from "../../../node_modules/lit-html/lit-html.js";
import { createSubmitHandkler, readFromFile } from "../util.js";



const mainForm = (onSubmit) => html`
<form @change=${onSubmit} enctype="multipart/form-data">
    <h3>Select TXT file to upload:</h3>
    <input type="file" name="fileToUpload" id="fileToUpload">
</form>
`

export async function homePage(ctx) {
    ctx.render(mainForm(createSubmitHandkler(ctx, onSubmit)));
}

let movies = [];

async function onSubmit(ctx, data) {
    if (data.type !== "text/plain") {
        alert("File must be TXT format.");
        ctx.page.redirect('/list');
        return;
    }
    let mov = (await readFromFile(data))();
    movies = mov;
    ctx.page.redirect('/list');
}


export { movies } 
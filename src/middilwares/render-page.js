import { render, html } from "../../../node_modules/lit-html/lit-html.js";

const root = document.querySelector('main');

function renderPage(content) {
    render(content, root)
}

export function decorateContext(ctx, next) {
    ctx.render = renderPage;
    next();
}

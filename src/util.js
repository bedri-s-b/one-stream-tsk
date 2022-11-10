

export function createSubmitHandkler(ctx, handler) {
    return function res(e) {
        e.preventDefault();
        let data = {};
        if (e.target.tagName == 'INPUT') {
            data = e.target.files[0];
        } else if (e.target.tagName == 'FORM') {
            data = Object.fromEntries(new FormData(e.target));
        }
        handler(ctx, data, e);
    };
}

export function readFromFile(file) {
    return new Promise((res, rej) => {
        let readar = new FileReader();

        readar.onload = (file) => {
            res(() => {
                const f = file.target.result;
                const lines = f.split(/\r\n|\n/);
                return lines;
            });

        };

        readar.onerror = rej;
        readar.readAsText(file);
    })
}


export function readMore(e) {
    let dots = e.currentTarget.parentNode.querySelector("#dots");
    let moreText = e.currentTarget.parentNode.querySelector("#more");
    let btnText = e.currentTarget.parentNode.querySelector("#myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.textContent = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.textContent = "Read less";
        moreText.style.display = "inline";
    }
}







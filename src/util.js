

export function createSubmitHandkler(ctx, handler) {
    return function res(e) {
        e.preventDefault();
        let movies = e.target.files[0];
        handler(ctx, movies);
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





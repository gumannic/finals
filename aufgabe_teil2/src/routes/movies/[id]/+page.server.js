import db from "$lib/db.js"

export async function load({ params }) {
    console.log(params)
    const movie = await db.getMovie(params.id);
    console.log(movie)
    return {
        movie
    };
}
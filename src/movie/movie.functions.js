const Movie = require("./movie.table");

exports.addMovie = async (movieObj) => {
    try {
        await Movie.sync();
        await Movie.create(movieObj);
        console.log(`Successfully added ${movieObj.title} to database.`);
    } catch (error) {
        console.log(error)
    }
};

exports.deleteMovie = async (movieObj) => {
    try {
        await Movie.sync();
        await Movie.destroy(movieObj);
        console.log(`${movieObj.title} successfully deleted from databse.`)
    } catch (error) {
        console.log(error)
    }
}
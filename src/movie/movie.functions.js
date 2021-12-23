const { title } = require("process");
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

exports.findMovie = async (movieObj) => {
    try {
        await Movie.sync();
        await Movie.findOne({ where: { director: movieObj.director }});
    } catch (error) {
        console.log(error)
    }
}

exports.updateMovie = async (movieObj) => {
    try {
        await Movie.sync();
        await Movie.update({ title: movieObj.title }, { where: { director: movieObj.director }});
        console.log("Entry updated succesfully.")
    } catch (error) {
        console.log(error)
    }
}

exports.deleteMovie = async (movieObj) => {
    try {
        await Movie.sync();
        await Movie.destroy({where: {title: movieObj.title}});
        console.log(`${movieObj.title} successfully deleted from databse.`)
    } catch (error) {
        console.log(error)
    }
};
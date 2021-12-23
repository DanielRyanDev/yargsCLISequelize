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
        const findResult = await Movie.findAll({ where: { title: movieObj.title }});
        // const findResult = await Movie.findAll();
        console.log(findResult)
    } catch (error) {
        console.log(error)
    }
}

exports.findDirector = async (movieObj) => {
    try {
        await Movie.sync();
        const findResult = await Movie.findAll({ where: { director: movieObj.director }});
        // const findResult = await Movie.findAll();
        console.log(findResult)
    } catch (error) {
        console.log(error)
    }
}

exports.updateMovie = async (movieObj) => {
    try {
        await Movie.sync();
        const updateObj = await Movie.update({ director: movieObj.director }, { where: { title: movieObj.title }});
        console.log(updateObj)
        console.log("Entry updated succesfully.")
    } catch (error) {
        console.log(error)
    }
}

exports.updateActors = async (movieObj) => {
    try {
        await Movie.sync();
        const updateObj = await Movie.update({ actors: movieObj.actors }, { where: { title: movieObj.title }});
        console.log(updateObj)
        console.log(`${movieObj.actors} successfully added to ${movieObj.title}.`)
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
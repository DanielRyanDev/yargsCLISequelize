require("./db/connection");
const { Sequelize } = require("sequelize");
const yargs = require("yargs");
const { addMovie, deleteMovie } = require("./movie/movie.functions");

const app = async (args) => {
    try {
        let movieObj = {title: args.title, director: args.director}
        if (args.add) {
            await addMovie(movieObj);
        }   if (args.delete) {
            await deleteMovie(movieObj);
        }
    } catch (error) {
        console.log(error)
    }
}

app(yargs.argv);
require("./db/connection");
const { Sequelize } = require("sequelize");
const yargs = require("yargs");
const { addMovie, deleteMovie, updateMovie, findMovie } = require("./movie/movie.functions");

const app = async (args) => {
    try {
        let movieObj = {title: args.title, director: args.director}
        if (args.add) {
            await addMovie(movieObj);
        }   else if (args.find) {
            await findMovie(movieObj);
        }   else if (args.update) {
            await updateMovie(movieObj.director);
        }   else if (args.delete) {
            await deleteMovie(movieObj);
        }
    } catch (error) {
        console.log(error)
    }
}

app(yargs.argv);
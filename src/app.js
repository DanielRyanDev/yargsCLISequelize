require("./db/connection");
const { Sequelize } = require("sequelize");
const yargs = require("yargs");
const { addMovie, deleteMovie, updateMovie, findMovie, findDirector, updateActors } = require("./movie/movie.functions");

const app = async (args) => {
    try {
        let movieObj = {title: args.title, director: args.director, actors: args.actors}
        if (args.add) {
            await addMovie(movieObj);
        }   else if (args.findTitle) {
                await findMovie(movieObj);
        }   else if (args.findDirector) {
                await findDirector(movieObj);
        }   else if (args.update) {
                await updateMovie(movieObj);
        }   else if (args.addActors) {
                await updateActors(movieObj);
        }   else if (args.delete) {
                await deleteMovie(movieObj);
        }
    } catch (error) {
        console.log(error)
    }
}

app(yargs.argv);
const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Movie = sequelize.define("Movie", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    director: {
        type: DataTypes.STRING,
    },
});

module.exports = Movie;
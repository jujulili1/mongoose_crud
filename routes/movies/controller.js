const { Movie } = require("../../models");
const { set } = require("mongoose");


module.exports = {
  deleteMovie: async (req, res) => {
    const {id} = req.params;

    try {
      const deletedUser = await Movie.findByIdAndDelete({ _id:id, });

      const results = await Movie.find();
      res.send({
        message: "Movie berhasil dihapus",
        result: results,
      });
    } catch (error) {
      console.log(error);

      res.send(error);
    }
  },
  updateMovie: async (req, res) => {
    const {id} = req.params;
    
    try {
      await User.findOneAndUpdate(id, { $set: {
        ...req.body
      }
    });
      const results = await Movie.find();
      res.send({
        message: "Movie berhasil di update",
        result: results,
      });
    } catch (error) {
      console.log(error);

      res.send(error);
    }
  },
  getAllMovie: async (req, res) => {
    try {
      const movie = await Movie.find();
      res.send({
        message: "List Movie",
        results: movie,
      });
    } catch (error) {
      console.log(error);

      res.send(error);
    }
  },
  getGenre: async (req, res) => {
    const {genre} = req.params;
    try {
      const movie = await Movie.find({ genre:genre, });
      res.send({
        message: "genre movie",
        result: movie,
      });
    } catch (error) {
      console.log(error);

      res.send(error);
    }
  },
  postMovie: async (req, res) => {
    const { title, genre, release_year } = req.body;

    try {
      const movie = await Movie.create({
        title:title,
        genre:genre,
        release_year:release_year,
      });

      res.send({
        message: `Movie berhasil ditambahkan`,
        result: movie,
      });
    } catch (error) {
      console.log(error);

      res.send(error);
    }
  },
};
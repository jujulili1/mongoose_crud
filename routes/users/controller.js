const { User } = require("../../models");


module.exports = {
  deleteUser: async (req, res) => {
    const _id = req.params.id;

    try {
      const deletedUser = await User.findByIdAndRemove({ _id });

      res.send({
        message: "1 user has been deleted",
        deleted: deletedUser,
      });
    } catch (error) {
      console.log(error);

      res.send(error);
    }
  },
  editUser: async (req, res) => {
    const _id = req.params.id;
    const { name, email, password } = req.body;

    try {
      await User.findOneAndUpdate({ _id }, { name, email, password });
      const users = await User.find();
      res.send({
        message: "1 user has been updated",
        updatedUsers: users,
      });
    } catch (error) {
      console.log(error);

      res.send(error);
    }
  },
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.send({
        message: "List Users",
        results: users,
      });
    } catch (error) {
      console.log(error);

      res.send(error);
    }
  },
  getUser: async (req, res) => {
    const _id = req.params.id;
    try {
      const user = await User.findOne({ _id });
      res.send({
        message: "1 user selected",
        user: user,
      });
    } catch (error) {
      console.log(error);

      res.send(error);
    }
  },
  userRegistration: async (req, res) => {
    const { name, email, password } = req.body;

    try {
      const user = await User.create({
        name,
        email,
        password,
      });

      res.send({
        message: `Registration complete`,
        result: user,
      });
    } catch (error) {
      console.log(error);

      res.send(error);
    }
  },
};
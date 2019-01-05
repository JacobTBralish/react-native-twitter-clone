import Users from "./UsersSchema";

module.exports = {
  createUser: async (req, res) => {
    const createdUser = req.body;

    // const newUser = new Users(createdUser);

    try {
      const newUser = await Users.create(createdUser);
      return res.status(201).json(newUser);
    } catch (error) {
      return res
        .status(error.status)
        .json({ error: true, message: "There was an error creating a user" });
    }
  },
  getAllUsers: async (req, res, next) => {
    const usersList = await Users.find({})
      .lean()
      .exec();
    res.status(200).json(usersList);
    next();
  }
};

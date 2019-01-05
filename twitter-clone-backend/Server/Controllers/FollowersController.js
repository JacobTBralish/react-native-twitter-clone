import Followers from "../Models/FollowersSchema";

export const createFollowers = async (req, res) => {
  const { userId, firstName, lastName, userName } = req.body;
  const newFollower = new Followers({ userId, firstName, lastName, userName });

  try {
    return res.status(201).json({ follower: await newFollower.save() });
  } catch (error) {
    return res
      .status(error.status)
      .json({ error: true, message: "There was an error creating followers" });
  }
};

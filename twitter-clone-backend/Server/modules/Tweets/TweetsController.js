import tweet from "./TweetsSchema";

module.exports = {
  createTweet: async (req, res, next) => {
    const createdTweet = req.body;
    console.log("req.body: ", req.body);

    try {
      console.log("Here we are");
      let tweetPost = await tweet.create(createdTweet);
      tweetPost.save();
      console.log("tweetPost: ", tweetPost);
      res.status(201).json(tweetPost);
    } catch (error) {
      console.log("error: ", error);
      res.status(500).json({
        error: true,
        message: "There was an error creating the tweet"
      });
    }
  },
  getAllTweets: async (req, res, next) => {
    const foundTweets = await tweet
      .find({})
      .lean()
      .exec();
    res.status(200).json(foundTweets);
    next();
  }
};

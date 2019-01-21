import Tweet from "./TweetsSchema";

module.exports = {
  createTweet: async (req, res, next) => {
    const createdTweet = req.body;
    console.log("req.body: ", req.body);

    try {
      console.log("Here we are");
      let tweet = await new Tweet.create(createdTweet);
      tweet.save();
      console.log("tweet: ", tweet);
      res.status(201).json(tweet);
    } catch (error) {
      res.status(500).json({
        error: true,
        message: "There was an error creating the tweet"
      });
    }
  },
  getAllTweets: async (req, res, next) => {
    const foundTweets = await Tweet.find({})
      .lean()
      .exec();
    res.status(200).json(foundTweets);
    next();
  }
};

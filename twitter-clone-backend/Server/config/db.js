const mongoose = require("mongoose");

export default mongoURL => {
  mongoose.Promise = global.Promise;
  mongoose.connect(
    mongoURL,
    { useNewUrlParser: true }
  );

  let db = mongoose.connection;

  db.once("open", () => console.log("Connected to the database"));
  db.on("error", console.error.bind(console, "Mongo connection error: "));
};

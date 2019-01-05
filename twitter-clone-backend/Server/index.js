require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { UserRoutes, TweetsRoutes } = require("./modules");
import dbConfig from "./config/db";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
// -----Database ----- \\
dbConfig(process.env.MONGO_DB_URL);

app.use("/api", [UserRoutes, TweetsRoutes]);

// app.get("/", (req, res) => {
//   res.send("endpoint live");
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}🏄`));

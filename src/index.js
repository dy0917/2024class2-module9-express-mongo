const express = require("express");
// const path = require('path')
const app = express();
// console.log("__dirname", path.resolve(__dirname, "../.env"));
// require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
// require("dotenv").config();
let dbConnect = require("./dbConnect");
// console.log("  process.env.DB_URI", process.env);
// parse requests of content-type - application/json

app.use(express.json());
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.get("/", (req, res) => {
  res.json({ message: "Welcome to myFMongoDB application." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port
${PORT}.`);
});

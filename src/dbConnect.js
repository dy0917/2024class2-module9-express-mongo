"use strict";
const Mongoose = require("mongoose");
// if the connection fails, try 127.0.0.1 instead oflocalhost below
const uri =
  process.env.DB_URI ||
  "mongodb://dbadmin:Password1@localhost:27017/newDB?authSource=admin";
// Connect to MongoDB
console.log("  process.env.DB_URI", process.env.DB_URI);
Mongoose.connect(uri)
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log("MongoDB Error:" + error.message));
// Get the default connection
const db = Mongoose.connection;
// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
exports.Mongoose = Mongoose;

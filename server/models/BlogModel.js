const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
  date1: String,
  date2: String,
  ex2 : [{
    value: String
  }],
  ex3 : Number,
  ex4: String,
  child : [{
    val: String
  }],
  userID: String
});

const BlogModel = mongoose.model("Blog", BlogSchema);

module.exports = { BlogModel };

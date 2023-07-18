const express = require("express");
const blogRoute = express.Router();
const { BlogModel } = require("./BlogModel");




blogRoute.post("/create", async (req, res) => {
  const {ex1,ex2,ex3,ex4,child} = req.body;
  const userID = req.body.userID;
  console.log('ex3',ex3);
  console.log('child',child);
  console.log('ex2',ex2);
  let date1 = ex1[0];
  let date2 = ex1[1];
  try {
    const newBlog = new BlogModel({date1,date2,ex2,ex3,ex4,child,userID});
    console.log(newBlog)
    await newBlog.save();
    res.send({ msg: "Success" });
  } catch (error) {
    res.send({ msg: "Error" });
  }
});

blogRoute.get("/myblogs", async (req, res) => {
  const userID = req.body.userID;
  try {
    const allBlogs = await BlogModel.find({ userID });
    res.send(allBlogs);
  } catch (error) {
    res.send({ msg: "Error" });
  }
});


module.exports = { blogRoute };

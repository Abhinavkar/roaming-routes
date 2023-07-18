const express = require("express");
const { connection } = require("./main");
const { userRoute } = require("./routes/UserRoute");
const { blogRoute } = require("./models/BlogRoute");
const { Auth } = require("./middlewares/middleware");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", userRoute);

app.use(Auth);

app.use("/blogs", blogRoute);



app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected");
    console.log("Server is listening");
  } catch (error) {
    console.log(error);
  }
});

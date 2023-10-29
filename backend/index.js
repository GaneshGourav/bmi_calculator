const express = require("express");
require("dotenv").config();
const { connection } = require("./db");
const {userRouter} = require('./router/userRouter')

const app = express();
app.use(express.json())
app.use("/users",userRouter)

app.get("/", async (req, res) => {
  try {
    res.json("welcome to BMI Calculation of your Health");
  } catch (error) {
    res.json("inernal server error!");
  }
});


app.listen(4000, async () => {
  try {
    await connection;
    console.log("conneted to dbs");
    console.log("Port is running at  3000");
  } catch (error) {
    console.log("error");
  }
});

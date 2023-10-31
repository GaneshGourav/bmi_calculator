const express = require("express");
const { UserModel } = require("../model/userModel");
const {BlockListModel} = require("../model/blockListModel")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  const passwordReq =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
if (!passwordReq.test(password)) {
  return res.status(200).json({
    msg: "Invalid password format! Password format Should contain atleast one uppercase character, one number, special character and length greater then 8.",
  });
}

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      bcrypt.hash(password, 8, async (err, hash) => {
        if (err) {
          res.status(400).json("Something Went wrong!, try again.");
        } else {
          const newUser = new UserModel({ username, email, password: hash });
          await newUser.save();
          res
            .status(200)
            .json({ msg: "You're successfully created your Account",newUser });
        }
      });
    } else {
      res.status(400).json({ msg: "You're already registered ." });
    }
  } catch (error) {
    res.status(500).json("Internal Server Error, try again later!");
  }
});

userRouter.post("/login",async(req,res)=>{
  const {email,password} = req.body;
  try {
    const user = await UserModel.findOne({email});
    if(user){
      bcrypt.compare(password,user.password,async(err,result)=>{
        if(result){
          let token = jwt.sign({id:"bmi"},"bmi",{expiresIn:"1m"});
          let refreshToken = jwt.sign({id:"calculator"},"calculator",{expiresIn:"5m"});
          res.cookie("token",token);
          res.cookie("resfreshToken",refreshToken);
          res.status(200).json({"msg":"Login Succesfull",token,refreshToken})
        }else{
          res.status(400).json({"msg":"Wrong Crendential"})
        }
      })
    }else{
      res.status(400).json({"msg":"Signup first!"})
    }
    
  } catch (error) {
    res.status(500).json({"msg":"Internal Server Error"})
  }
})

userRouter.get("/logout",async(req,res)=>{
  let accessToken=req.cookies.token;
  let resToken = req.cookies.refreshToken;
  try {
    if(accessToken && resToken){
   let block = new BlockListModel({token:accessToken,refreshToken:resToken});
   await block.save();
   res.status(200).json({"msg":"Logout Successfully, Visit again!"});
   res.clearCookie();
    }else{
      res.status(400).json({"msg":"Token and refreshToken not exist"})
    }
  } catch (error) {
    res.status(500).json("Internal Server Error")
  }
})

userRouter.patch("/update/:id",async(req,res)=>{
  const {id}= req.params;
  try {
if(id){
  let user = await UserModel.findByIdAndUpdate(id,req.body);
  res.status(200).json({"msg":"Profile has been updated",user})
}
    
  } catch (error) {
    res.status(500).json({"msg":"internal Server Error"});
  }
})

module.exports = { userRouter };

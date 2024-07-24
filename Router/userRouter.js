const express = require("express");

const userRouter = express.Router();

const {getUser,updateUser,deleteUser,allUser} = require("../Controller/userController");
const {signup,login} = require("../Controller/authController");

userRouter
  .route("/login")
  .post(login);

userRouter
  .route("/signup")
  .post(signup);

userRouter.get("/users",getUser);
userRouter.get("/update-user",updateUser);
userRouter.post("/delete-user",deleteUser)
userRouter.delete("/allusers",allUser);
// userRouter.patch("/",);


module.exports = userRouter;
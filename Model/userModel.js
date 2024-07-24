const mongoose = require('mongoose');
const {DB_Link} = require("../secrets");
const e = require('express');

// const db_link = 'mongodb+srv://mishrasudhanshu855:EPcBEs9qe8hJqmAw@cluster0.cfegeoo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose
  .connect(DB_Link)
  .then(function (db) {
    console.log("user db connected");
    // console.log(db);
  })
  .catch(function (err) {
    console.log(err);
  });


  const userSchema = mongoose.Schema({
    userName : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
    confirmPassword : {
        type : String,
        required : true,
    },
    skills : {
        type : [String],
        required : true,
    },
    college : {
        type : String,
        required : true,
    },
    companies : {
        type : [String],
        required : true,
    },

  })


  const userModel = mongoose.model("userModel",userSchema);
  module.exports = userModel;
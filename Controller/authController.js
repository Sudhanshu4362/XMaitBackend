const userModel = require("../Model/userModel");
const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../secrets");

module.exports.signup = async(req,res) => {
    try {
        let data = req.body;
        let user = await userModel.create(data);
        if(user) {
            res.json({
                msg : "user signed up",
                user
            })
        } else {
            res.json({
                msg : "user could not be signed up"
            })
        }
    } catch(err) {
        res.json({
            err : err.message
        })
    }
}

module.exports.login = async function (req, res) {
    try {
      let { email, password } = req.body;
  
      if (email) {
        // Check if email is provided in the request body
        let user = await userModel.findOne({ email: email });
  
        if (user) {
          if (password == user.password) {
            // res.cookie("isLoggedIn", true);
            let uid = user["_id"];
            var token = jwt.sign({ payload: uid }, JWT_KEY);
            res.cookie("login", token, { httpOnly: true });
            res.json({
              msg: "user logged in",
            });
          } else {
            res.json({
              msg: "wrong credentials",
            });
          }
        } else {
          res.json({
            msg: "user not found",
          });
        }
      } else {
        res.json({
          msg: "please enter email first",
        });
      }
    } catch (err) {
      res.json({
        msg: err.message,
      });
    }
  };
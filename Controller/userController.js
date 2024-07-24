const userModel = require("../Model/userModel");
module.exports.getUser = async(req,res) => {
    try {
        let id = req.id;
        let user = await userModel.findById(id);

        res.json({
            msg : "user retrieved",
            user
        })
    } catch(err) {
        res.json({
            msg : err.message,
        });
    }
}

//update
module.exports.updateUser = async(req,res) => {
    try{
        let id = req.params.id;
        let user = await userModel.findById(id);
        let dataToBeupdated = req.body();

        if(user) {
            const keys = [];
            for(let key in dataToBeupdated) {
                keys.push(key);
            }

            for(let i = 0;i < keys.length;i++) {
                user[keys[i]] = dataToBeupdated[keys[i]];
            }

            const updatedUser = await user.save();
            res.json({
                msg : "user updated successfully",
                updatedUser
            })
        } else {
            res.json({
                msg : "user could not be found"
            })
        }
    } catch(err) {
        res.json({
            msg : err.message,
        });
    }
}

//delete
module.exports.deleteUser = async(req,res) => {
    try{
        let id = req.params.id;
        let user = await userModel.findOneAndDelete(id);
        res.json({
            msg : "user deleted successfully",
            user
        })
    } catch(err) {
        res.json({
            err : err.message
        })
    }
}


module.exports.allUser = async(req, res) => {
    try {
      let allUsers = await userModel.find();
      res.json({
        msg: "all users retrieved",
        allUsers,
      });
    } catch (err) {
      res.json({
        msg: err.message,
      });
    }
  };
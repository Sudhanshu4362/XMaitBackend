const mongoose = require('mongoose');
const {DB_Link} = require("../secrets")

// const db_link = 'mongodb+srv://mishrasudhanshu855:EPcBEs9qe8hJqmAw@cluster0.cfegeoo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose
  .connect(DB_Link)
  .then(function (db) {
    console.log("job db connected");
    // console.log(db);
  })
  .catch(function (err) {
    console.log(err);
  });

  //schema
  const jobSchema = mongoose.Schema({
    jobTitle : {
        type : String,
        required : true,
    },
    companyName : {
        type : String,
        required : true,
    },
    jobLocation : {
        type : String,
        required : true,
    },
    jobPosted : {
        type : String,
        required : true,
    },
    jobType : {
        type : String,
        required : true,
    },
    jobExpiry : {
        type : Boolean,
    },
    companyDescription : {
        type : String,
        required : true,
    },
    roleDescription : {
        type : String,
        required : true,
    },
    qualifications : {
        type : String,
        required : true,
    },
    skills : {
        type : String,
        required : true,
    },
    companyLogo : {
        type : String,
        required : true,
    },
    collegeAlumni : {
        type : [String],
        required : true,
    },
    CTC : {
        type : Number,
        required : true,
    },
    applyLink : {
        type : String,
        required : true
    },
    experience : {
        type : Number,
        required : true,
    }
  })


const jobModel = mongoose.model("jobModel",jobSchema);
module.exports = jobModel;



// (async function createJob() {
//     let customDate = new Date(2024, 4, 5);
//     let job = {
//         jobTitle : "SDE 1",
//         companyName : "Amazon",
//         jobLocation : "Banglore",
//         jobPosted : customDate,
//         jobType : "Fulltime",
//         jobExpiry : false,
//         companyDescription : "efwejfhnrer regwefw wefwefdewf wefwefew fwefwef",
//         roleDescription : "efew few fwef ewfwe wew",
//         qualifications : "ffwe weef",
//         skills : "bjhb jjbn jbn",
//         companyLogo : "https://srfs",
//         collegeAlumni : ['Sudhanshu Mishra', 'Ananya Verma', 'Raunak Raj'],
//         CTC : 48,
//         applyLink : 'https:fkjwefn',
//         experience : 2 
//     }
//     let data = await jobModel.create(job);
//     console.log(data);
//     // const doc = new planModel(plan);
//     // await doc.save();
// })();

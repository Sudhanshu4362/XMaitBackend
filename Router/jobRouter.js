const express = require("express");

const jobRouter = express.Router();

const {getAllJobs,getJobById,createJob,deleteJob,updateJob} = require("../Controller/jobController");


jobRouter.get("/alljobs",getAllJobs);
jobRouter.get("/job/:id",getJobById);
jobRouter.post("/create-job",createJob)
jobRouter.delete("/delete/:id",deleteJob);
jobRouter.patch("/update/:id",updateJob);


module.exports = jobRouter;
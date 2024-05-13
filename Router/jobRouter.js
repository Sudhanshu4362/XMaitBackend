const express = require("express");

const jobRouter = express.Router();

const {getAllJobs,getJobById} = require("../Controller/jobController");


jobRouter.get("/alljobs",getAllJobs);
jobRouter.get("/job/:id",getJobById);
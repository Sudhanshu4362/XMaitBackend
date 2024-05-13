const jobModel = require("../Model/jobModel")

module.exports.getAllJobs = async (req,res) => {
    try{
        const jobs = await jobModel.find();
        if(jobs){
            return res.json({
                msg : "all jobs retrieved",
                jobs
            }) 
        } else {
            return res.json({
                msg : "jobs not found",
            })
        }
    } catch(err) {
        return res.json({
            msg : err.message,
        })
    }
}

module.exports.getJobById = async () => {
    try{
        let id = req.params.id;
        let job = await jobModel.findById(id);

        if(job) {
            return res.json({
                msg : "job found",
                data : job
            });
        } else {
            return res.json({
                msg : "Job not found"
            });
        }
    } catch(err) {
        return res.json({
            msg : err.message
        })
    }
}
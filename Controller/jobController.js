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

module.exports.getJobById = async (req,res) => {
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

module.exports.createJob = async(req,res) => {
    try{
        let jobData = req.body;
        let createdJob = await jobModel.create(jobData);
        return res.json({
            msg : " job created Successfully",
            createdJob
        });
    } catch(err) {
        return res.json({
            msg : err.message
        })
    }
};

module.exports.updateJob = async(req,res) => {
    try{
        let id = req.params.id;
        let dataToBeupdated = req.body;
        let keys = [];
        for(let key in dataToBeupdated){
            keys.push(key);
        }
        let job = await jobModel.findById(id);
        for(let i = 0;i <  keys.length;i++){
            plan[keys[i]] = dataToBeupdated[keys[i]];
        }

        await job.save();
        return res.json({
            msg : "job updated successfully",
            job
        })
    } catch(err) {
        return res.json({
            msg : err.message
        })
    }
}

module.exports.deleteJob = async(req,res) => {
    try{
        let id = req.params.id;
        let job = await jobModel.findByIdAndDelete(id);

        return res.json({
            msg : "job has been deleted",
            job
        })
    } catch(err) {
    return res.json({
        msg : err.message
    })
    }
}
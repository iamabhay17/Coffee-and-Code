const asyncHandler = require("express-async-handler");
const Jobs = require("../model/jobsSchema");

//fetch jobs
//GET /api/jobs
// public

const getJobs = asyncHandler(async (req, res) => {
  const jobs = await Jobs.find({}).sort({ date: -1 });
  res.send(jobs);
});

//create jobs
//POST /api/jobs/post
// private

const postJobs = asyncHandler(async (req, res) => {
  const { position, company, salary, batch, location, apply, image } = req.body;

  const job = await Jobs.create({
    position,
    company,
    salary,
    batch,
    location,
    apply,
    image,
  });

  if (job) {
    job.save();
    res.status(201).json({
      msg: "New Job Posted",
    });
  }
});

//delete product
//DELETE /api/jobs/:id
// private/admin

const deleteJob = asyncHandler(async (req, res) => {
  const job = await Jobs.findById(req.params.id);
  if (job) {
    await job.remove();
    res.send({ message: "Job Removed" });
  } else {
    res.status(404).json({ message: "Job not found!" });
  }
});

module.exports = { getJobs, postJobs, deleteJob };

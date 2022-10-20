const mongoose = require("mongoose");

const jobsSchema = mongoose.Schema({
  position: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
    unique: true,
  },
  salary: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  apply: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Jobs = mongoose.model("Jobs", jobsSchema);

module.exports = Jobs;

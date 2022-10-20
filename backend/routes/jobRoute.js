const express = require("express");
const { getJobs, postJobs, deleteJob } = require("../controller/jobController");

const router = express.Router();

router.route("/").get(getJobs);
router.route("/post").post(postJobs);
router.route("/:id").delete(deleteJob);

module.exports = router;

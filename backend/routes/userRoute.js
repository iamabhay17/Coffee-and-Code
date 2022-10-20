const express = require("express");
const { authUser, createUser } = require("../controller/userController");

const router = express.Router();

router.route("/login").post(authUser);
router.route("/create").post(createUser);

module.exports = router;

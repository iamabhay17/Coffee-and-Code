const asyncHandler = require("express-async-handler");
const User = require("../model/userSchema");
const bcrypt = require("bcryptjs");

//user auth
//POST /api/user/login
// private

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });

  if (user) {
    if (await bcrypt.compare(password, user.password)) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(401).json({ msg: "wrong password" });
      throw new Error("Invalid Email or Password");
    }
  } else {
    res.status(401).json({ msg: "user not found" });
    throw new Error("User Not Found");
  }
});

//user register
//POST /api/user/create
// private

const createUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExist = await User.findOne({ email: email });

  if (userExist) {
    res.status(404).json("User already exist");
  }

  const user = await User.create({
    name,
    email,
    password: bcrypt.hashSync(password, 10),
  });

  if (user) {
    user.save();
    res.status(201).json({
      msg: "New User Created",
    });
  }
});

module.exports = { authUser, createUser };

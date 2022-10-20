const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const User = require("./model/userSchema");
const Jobs = require("./model/jobsSchema");
const user = require("./data/user");
const data = require("./data/jobs");

dotenv.config();

const PORT = process.env.PORT || 5000;
const DB = process.env.MONGO_URI;

mongoose.connect(DB, () => {
  console.log("connected to database");
});

const importData = async () => {
  try {
    await User.deleteMany();
    await Jobs.deleteMany();

    await User.insertMany(user);
    await Jobs.insertMany(data);

    console.log("data imported");
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Jobs.deleteMany();

    console.log("data destroyed");
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}

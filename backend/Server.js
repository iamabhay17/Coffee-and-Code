const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const jobRoutes = require("./routes/jobRoute");
const userRoute = require("./routes/userRoute");

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 5000;
const DB = process.env.MONGO_URI;

mongoose.connect(DB, () => {
  console.log("connected to database");
});

app.use("/api/jobs", jobRoutes);
app.use("/api/user", userRoute);

app.get("/", (req, res) => {
  res.send("Api is working");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

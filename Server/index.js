const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const PORT = process.env.PORT || 5000;

// const fileupload = require("express-fileupload");
// app.use(
//   fileupload({
//     useTempFiles: true,
//     tempFileDir: "/tmp/",
//   })
// );

const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

app.use(
  cors({
    origin: process.env.ORIGIN, // Allow only your frontend's origin
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);

app.use(express.json());
app.use(cors());

const blog = require("./routes/blog");
const mail = require("./routes/mail");
const Upload = require("./routes/ImageUpload");

app.use("/api/v1", blog);
app.use("/api/v1", mail);
app.use("/api/v1", Upload);

const connectWithDB = require("./config/database");
connectWithDB();

app.listen(PORT, (req, res) => {
  console.log(`server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`Server has started on port number  ${PORT}`);
});

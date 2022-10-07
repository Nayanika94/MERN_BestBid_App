//------------------Import------------------

const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const chat = require("./controllers/chat");
const connectDB = require("./config/connectDB");
const userRoute = require("./routes/userRoutes");
const productRoute = require("./routes/productRoutes");
const bidRoutes = require("./routes/bidRoutes");
const productsSoldRoutes = require("./routes/productsSoldRoutes");
const authRoute = require("./routes/authRoutes");
const feedbackRoute = require("./routes/feedbackRoutes");
const faqRoute = require("./routes/faqRoutes");
const paymentRoute = require("./routes/paymentRoutes");
const eventRoute = require("./routes/eventRoutes");
const contactRoute = require("./routes/contactRoutes");
const teamMemberRoute = require("./routes/teamMemberRoutes");
const { Server } = require("socket.io");
const app = express();
const http = require("http").createServer(app);
const registerRoutes = require("./routes/registerRoutes");
const loginRoutes = require("./routes/loginRoutes");
const user = require("./models/User");
const multer = require("multer");
const bodyParser = require("body-parser");
var forms = multer();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(forms.array());

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

//--------------Connect TO Database-----------------
connectDB();

//---------------parse the response--------------
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.get("/", (req, res) => {
  try {
    res.send("Hello, World!");
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ error: "SERVER ERROR: " + err.message });
  }
});

//-------------Forward to different Routes-------------

app.use("/api/user", userRoute);
app.use("/api/user/uploadPicture", userRoute);
app.use("/api/product", productRoute);
app.use("/api/productsSold", productsSoldRoutes);
app.use("/api/bid", bidRoutes);
app.use("/api/payment", paymentRoute);
app.use("/api/auth", authRoute);
app.use("/api/userFeedback", feedbackRoute);
app.use("/api/teamMembers", teamMemberRoute);
app.use("/api/faqs", faqRoute);
app.use("/api/Events", eventRoute);
app.use("/api/registerUser", registerRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/contact", contactRoute);

//------------Listen server on port from environmental variable-----------------
const PORT = process.env.PORT || 5000;
http.listen(PORT, () => {
  console.log("Server Started");
});

chat(http);
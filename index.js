require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session"); // 1. Require session
const flash = require("connect-flash");     // 2. Require flash

const app = express();

const urlController = require("./controllers/urlController");
const urlRoutes = require("./routes/urlRoute");
const authRoutes = require("./routes/authRoute");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: process.env.JWT_SECRET || "session_secret_key",
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
app.use((req, res, next) => {
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

mongoose
    .connect("mongodb://localhost:27017/url_shortner")
    .then(() => console.log("Database connected"))
    .catch((error) => console.log("Database connection failed:", error));

app.get("/", urlController.getHomePage);

app.get("/register", (req, res) => {
    res.render("register");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.use("/auth", authRoutes);
app.use("/api", urlRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
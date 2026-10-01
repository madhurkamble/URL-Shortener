const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// Register
exports.registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // 1. Ensure all fields are filled
        if (!username || !email || !password) {
            req.flash("error", "All fields are required.");
            return res.redirect("/register");
        }

        // 2. Check explicitly for email or username match
        const existingEmail = await User.findOne({ email: email.trim().toLowerCase() });
        if (existingEmail) {
            req.flash("error", "Email is already registered. Please login.");
            return res.redirect("/register");
        }

        const existingUsername = await User.findOne({ username: username.trim() });
        if (existingUsername) {
            req.flash("error", "Username is already taken.");
            return res.redirect("/register");
        }

        // 3. Create new user
        const user = await User.create({
            username: username.trim(),
            email: email.trim().toLowerCase(),
            password
        });

        // 4. Create JWT Token
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.cookie("token", token, { httpOnly: true });
        res.redirect("/");

    } catch (error) {
        console.log("Registration error:", error);
        req.flash("error", "Error creating account: " + error.message);
        res.redirect("/register");
    }
};
// Login
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Find user by email
        const user = await User.findOne({ email });

        if (!user) {
            req.flash("error", "Invalid email or password.");
            return res.redirect("/login");
        }

        // 2. Compare password
        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            req.flash("error", "Invalid email or password.");
            return res.redirect("/login");
        }

        // 3. Issue Token
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.cookie("token", token, { httpOnly: true });
        res.redirect("/");

    } catch (error) {
        console.log("Login error:", error);
        req.flash("error", "An error occurred during login.");
        res.redirect("/login");
    }
};

// Logout
exports.logoutUser = (req, res) => {
    res.clearCookie("token");
    res.redirect("/login");
};
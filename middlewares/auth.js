const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.isAuthenticated = async (req, res, next) => {
  try {
    const { token } = req.body;
    if (!token) {
      return res.status(401).json({
        message: "Login to continue",
      });
    }

    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded._id);
    next();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

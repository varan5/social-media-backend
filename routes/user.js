const express = require("express");
const {
  register,
  login,
  logout,
  updatePassword,
  updateProfile,
  deleteMyProfile,
  myProfile,
  getUserProfile,
  getAllUsers,
  forgotPassword,
  resetPassword,
  getMyPosts,
  getUserPosts,
  getAllFriends,
  getAllMutualFriends,
  getAllFriendRequests,
  getAllFriendSuggestions,
  friendRequestHandler,
  friendRequestAccepted,
  friendRequestDeclined,
  getAllFriendsOfOthers
} = require("../controllers/user");
const { isAuthenticated } = require("../middlewares/auth");
const router = express.Router();

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/logout").post(logout);

router.route("/update/password").put(isAuthenticated, updatePassword);

router.route("/update/profile").put(isAuthenticated, updateProfile);

router.route("/delete/me").delete(isAuthenticated, deleteMyProfile);
router.route("/me").post(isAuthenticated, myProfile);

router.route("/my/posts").post(isAuthenticated, getMyPosts);

router.route("/userposts/:id").post(isAuthenticated, getUserPosts);

router.route("/user/:id").post(isAuthenticated, getUserProfile);

router.route("/users").post(isAuthenticated, getAllUsers);

router.route("/friends").post(isAuthenticated, getAllFriends);

router.route("/friends/others").post(isAuthenticated, getAllFriendsOfOthers);

router.route("/mutualFriends").post(isAuthenticated, getAllMutualFriends);

router.route("/requests").post(isAuthenticated, getAllFriendRequests);

router.route("/request/:id").post(isAuthenticated, friendRequestHandler);

router.route("/request/accept/:id").post(isAuthenticated, friendRequestAccepted);

router.route("/request/decline/:id").post(isAuthenticated, friendRequestDeclined);

router.route("/suggestions").post(isAuthenticated, getAllFriendSuggestions);

router.route("/forgot/password").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

module.exports = router;
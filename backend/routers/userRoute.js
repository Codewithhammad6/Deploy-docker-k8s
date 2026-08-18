import { registerUser,verifyEmail,login, getUserProfile, logout, forgotPassword, verifyForgot, newPassword, getAllUsers, getUserById, updateAmount, updateCash, deleteUser, updateAmountInvite } from "../controllers/userController.js";
import express from "express";
import { authenticateUser } from "../middleware/auth.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/verifyEmail", verifyEmail);
router.post("/login", login);
router.get("/me",authenticateUser, getUserProfile);
router.get("/getAllUsers", getAllUsers);
router.get("/logout",authenticateUser, logout);
router.post("/forgot", forgotPassword);
router.post("/verifyForgot", verifyForgot);
router.post("/newPassword", newPassword);
router.put("/update-amount", authenticateUser, updateAmount);
router.put("/update-cash", authenticateUser, updateCash);
router.get("/:id", getUserById);
router.delete("/:id",authenticateUser, deleteUser);
router.post("/update-amount-invite",authenticateUser, updateAmountInvite);


export default router;
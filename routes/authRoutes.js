import express from "express";
import {
  registerController,
  loginController,
  adminAuth,
  userAuth,
  updateProfileController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const authRoutes = express.Router();

authRoutes.post("/register", registerController);

authRoutes.post("/login", loginController);

authRoutes.get("/user-auth", requireSignIn, userAuth);

authRoutes.get("/admin-auth", requireSignIn, isAdmin, adminAuth);

authRoutes.put("/profile", requireSignIn, updateProfileController);

export default authRoutes;

import { googleLogin } from "../controllers/authController.js";

import express from "express";
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ message: "test passed" });
});

router.get("/google", googleLogin);

export default router;

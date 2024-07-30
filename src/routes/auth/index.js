import express from "express";
import signupRoute from "./signup/index.js";
import loginRoute from "./login/index.js";

const router = express.Router();

router.use("/auth", signupRoute);
router.use("/auth", loginRoute);

export default router;

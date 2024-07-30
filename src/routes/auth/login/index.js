import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get("/signin", (req, res) => {
  const token = jwt.sign({ fullName, email }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV !== "development",
  });
});

export default router;

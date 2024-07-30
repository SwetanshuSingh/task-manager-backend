import express from "express";
import { userRegistrationSchema } from "../../../zod/user.js";
import { prisma } from "../../../index.js";
import bcrypt from "bcryptjs";

const router = express.Router();

router.get("/signup", (req, res) => {
  res.json("hello")
})

router.post("/signup", async (req, res) => {
  const result = await userRegistrationSchema.safeParseAsync(req.body);

  if (!result.success) {
    return res.status(403).json({
      message: "Invalid User Details",
    });
  }

  const { fullName, email, password } = result.data;

  try {
    const isExistingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (isExistingUser !== null) {
      return res.status(403).json({
        message: "User aleardy Exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
      },
    });

    return res.status(200).json({
      message: "User Successfully Registerd",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

export default router;

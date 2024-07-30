import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/auth/index.js";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const app = express();
export const prisma = new PrismaClient();

app.use(cookieParser());
app.use(express.json());

app.use("/api", authRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server Running");
});

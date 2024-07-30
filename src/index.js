import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth/index.js";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
  credentials: true,
  optionsSuccessStatus: 200, // For legacy browser support
};

const app = express();
export const prisma = new PrismaClient();

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

app.use("/api", authRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server Running");
});

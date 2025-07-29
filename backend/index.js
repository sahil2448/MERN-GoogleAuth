import express from "express";
import authRouter from "./routes/authRouter.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  res.json({ message: "Hello from backend" });
});

app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log("Server is running on port 8080");
});

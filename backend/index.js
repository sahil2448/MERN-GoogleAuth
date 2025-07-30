import express from "express";
import authRouter from "./routes/authRouter.js";
import dotenv from "dotenv";
import { DbConnection } from "./models/dbConnection.js";
import cors from "cors";
dotenv.config();
const app = express();
app.use(cors());

const PORT = 8080;

app.get("/", (req, res) => {
  res.json({ message: "Hello from backend" });
});

app.use("/auth", authRouter);

const startServer = async () => {
  await DbConnection();
  app.listen(PORT, () => {
    console.log("Server is running on port 8080");
  });
};

startServer();

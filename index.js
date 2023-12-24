import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/connectDb.js";

import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productsRoutes.js";
//configure env
dotenv.config();

//database config
connectDB();

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/products", productRoutes);

app.get("/", (req, res) => {
  res.json({ message: "hello word" });
});
// //PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(`Server Running on  port ${PORT}`);
});

import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/connectDb.js";

import cors from "cors";
import productRoutes from "./routes/productsRoutes.js";
import authRoutes from "./routes/authRoutes.js";
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

// //PORT
const PORT = process.env.PORT || 8080;

//run listen

app.get("/", (req, res) => {
  res.json({ message: "hello word" });
});
app.listen(PORT, () => {
  console.log(`Server Running on  port ${PORT}`);
});

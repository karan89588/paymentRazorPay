import express from "express";
import { config } from "dotenv";
import router from "./routes/paymentRouter.js";
import cors from "cors";
config({ path: "./config/congif.env" });
export const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);
app.get("/api/key_id", (req, res) => {
  res.json({ key_id: process.env.rezor_key_id });
});

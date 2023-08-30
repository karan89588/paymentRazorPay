import { app } from "./app.js";
import Razorpay from "razorpay";

export const instance = new Razorpay({
  key_id: process.env.rezor_key_id,
  key_secret: process.env.rezor_secrete_key,
});
app.listen(process.env.port, () =>
  console.log(`Server Started at Port ${process.env.port}`)
);

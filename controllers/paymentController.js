import { instance } from "../server.js";
import crypto from "crypto";
export const checkout = async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };
  const order = await instance.orders.create(options);
  console.log(order);
  res.send({
    success: true,
    order,
  });
};
export const verify = (req, res) => {
  //   console.log("flow was here", req.data);
  //   const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
  //     req.body;
  //   const body = razorpay_order_id + "|" + razorpay_payment_id;
  //   const expectedSignature = crypto
  //     .createHmac("sha256", process.env.rezor_secrete_key)
  //     .update(body.toString())
  //     .digest("hex");
  // const isAuthentic=expectedSignature===razorpay_signature;
  res.redirect(`http://localhost:3000/payment_conform?reference=pass`);
};

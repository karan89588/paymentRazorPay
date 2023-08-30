import express from "express";
import { checkout, verify } from "../controllers/paymentController.js";
const router = express.Router();

router.route("/checkout").post(checkout);
router.route("/verify").post(verify);
export default router;

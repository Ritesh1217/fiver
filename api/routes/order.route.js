import express from "express";
import { verifyToken } from "../middleware/jwt.js";
// import { getOrders, intent, confirm } from "../controllers/order.controller.js";
import { getOrders, createOrder, confirm } from "../controllers/order.controller.js";

const router = express.Router();

// router.post("/:gigId", verifyToken, createOrder);
// router.get("/", verifyToken, getOrders);
// router.post("/create-payment-intent/:id", verifyToken, intent);
// router.put("/", verifyToken, confirm);



router.post("/:gigId", verifyToken, createOrder);
router.get("/", verifyToken, getOrders);
router.put("/", verifyToken, confirm);

export default router;

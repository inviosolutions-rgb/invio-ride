import { Router } from "express";
import authRoutes from "./auth.routes";

const router = Router();

router.get("/health", (_req, res) => {
  res.json({
    success: true,
    message: "Invio Ride API is running",
    version: "1.0.0"
  });
});

router.use("/auth", authRoutes);

export default router;

import { Router } from "express";

const router = Router();

router.get("/health", (_req, res) => {
  res.json({
    success: true,
    message: "Invio Ride API is running",
    version: "1.0.0"
  });
});

export default router;

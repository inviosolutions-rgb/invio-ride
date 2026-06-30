import { Router } from "express";
import authRoutes from "./auth.routes";
import rideRoutes from "./ride.routes";
import driverRoutes from "./driver.routes";
import firebaseRoutes from "./firebase.routes";
const router = Router();

router.get("/health", (_req, res) => {
  res.json({
    success: true,
    message: "Invio Ride API is running",
    version: "1.0.0",
  });
});

router.use("/auth", authRoutes);
router.use("/rides", rideRoutes);
router.use("/drivers", driverRoutes);

export default router;

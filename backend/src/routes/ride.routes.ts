import { Router } from "express";
import { createRide, getRides } from "../controllers/ride.controller";

const router = Router();

router.post("/", createRide);
router.get("/", getRides);

export default router;

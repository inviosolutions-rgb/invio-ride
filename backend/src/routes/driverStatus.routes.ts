import { Router } from "express";
import {
  goOnline,
  goOffline,
} from "../controllers/driverStatus.controller";

const router = Router();

router.post("/online", goOnline);
router.post("/offline", goOffline);

export default router;

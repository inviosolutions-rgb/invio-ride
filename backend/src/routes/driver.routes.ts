import { Router } from "express";
import {
  registerDriver,
  getDrivers,
} from "../controllers/driver.controller";

const router = Router();

router.post("/", registerDriver);
router.get("/", getDrivers);

export default router;

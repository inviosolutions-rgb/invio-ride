import { Router } from "express";
import { verifyFirebaseUser } from "../controllers/firebaseAuth.controller";

const router = Router();

router.post("/verify", verifyFirebaseUser);

export default router;

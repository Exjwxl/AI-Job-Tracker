import { Router } from "express";

import {
  analyzeResumeController,
  uploadResume,
} from "../controllers/aiController";

const router = Router();

router.post(
  "/resume",
  uploadResume,
  analyzeResumeController
);

export default router;
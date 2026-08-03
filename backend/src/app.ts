import express from "express";
import cors from "cors";

import healthRoutes from "./routes/health";
import aiRoutes from "./routes/ai";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/health", healthRoutes);
app.use("/api/ai", aiRoutes);

app.get("/", (_req, res) => {
  res.json({
    message: "AI Job Tracker Backend Running 🚀",
  });
});

export default app;
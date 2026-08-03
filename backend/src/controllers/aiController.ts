import { Request, Response } from "express";
import multer from "multer";

import { extractPdfText } from "../utils/pdfParser";
import { analyzeResume } from "../services/aiService";

const upload = multer();


export const uploadResume = upload.single("resume");

export async function analyzeResumeController(
  req: Request,
  res: Response
) {
  try {
    const file = req.file;

    const jobDescription = req.body.jobDescription;

    if (!file) {
      return res.status(400).json({
        success: false,
        message: "Resume PDF is required.",
      });
    }

    if (!jobDescription) {
      return res.status(400).json({
        success: false,
        message: "Job description is required.",
      });
    }

    const resumeText = await extractPdfText(
      file.buffer
    );

    console.log("========== RESUME ==========");
    console.log(resumeText);

    const result = await analyzeResume(
      resumeText,
      jobDescription
    );

    return res.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Resume analysis failed.",
    });
  }
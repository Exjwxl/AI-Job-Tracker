"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function ResumeAnalyzer() {
  const [resume, setResume] = useState<File | null>(null);

  const [jobDescription, setJobDescription] = useState("");

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState("");

  async function analyzeResume() {
    if (!resume) {
      alert("Please upload a resume.");
      return;
    }

    if (!jobDescription.trim()) {
      alert("Please paste a job description.");
      return;
    }

    setLoading(true);
    setResult("");

    try {
      const formData = new FormData();

      formData.append("resume", resume);

      formData.append(
        "jobDescription",
        jobDescription
      );

      const response = await fetch(
        "http://localhost:5000/api/ai/resume",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setResult(data.result);
      } else {
        setResult(data.message);
      }
    } catch (err) {
      console.error(err);

      setResult("Could not connect to backend.");
    }

    setLoading(false);
  }

  return (
    <div className="rounded-xl border bg-white p-8 shadow-sm space-y-6">

      <h2 className="text-2xl font-bold">
        Resume Analyzer
      </h2>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => {
          if (e.target.files?.length) {
            setResume(e.target.files[0]);
          }
        }}
      />

      {resume && (
        <p className="text-sm text-green-600">
          Selected: {resume.name}
        </p>
      )}

      <Textarea
        rows={12}
        placeholder="Paste Job Description..."
        value={jobDescription}
        onChange={(e) =>
          setJobDescription(e.target.value)
        }
      />

      <Button
        className="w-full"
        onClick={analyzeResume}
      >
        {loading
          ? "Analyzing..."
          : "Analyze Resume"}
      </Button>

      {result && (
        <div className="rounded-lg bg-slate-100 p-6 whitespace-pre-wrap">
          {result}
        </div>
      )}

    </div>
  );
}
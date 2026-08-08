"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface AnalysisResult {
  score: number;
  matchingSkills: string[];
  missingKeywords: string[];
  strengths: string[];
  weaknesses: string[];
  suggestions: string[];
}

export default function ResumeAnalyzer() {
  const [resume, setResume] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

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
    setResult(null);

    try {
      const formData = new FormData();

      formData.append("resume", resume);
      formData.append("jobDescription", jobDescription);

      const response = await fetch(
       `${process.env.NEXT_PUBLIC_API_URL}/api/ai/resume`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Analysis failed.");
      }

      setResult(data.result);
    } catch (error) {
      console.error(error);

      alert(
        error instanceof Error
          ? error.message
          : "Could not connect to backend."
      );

      setResult(null);
    } finally {
      setLoading(false);
    }
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
        <p className="text-green-600 text-sm">
          Selected: {resume.name}
        </p>
      )}

      <Textarea
        rows={10}
        placeholder="Paste the Job Description..."
        value={jobDescription}
        onChange={(e) =>
          setJobDescription(e.target.value)
        }
      />

      <Button
        className="w-full"
        onClick={analyzeResume}
        disabled={loading}
      >
        {loading
          ? "Analyzing..."
          : "Analyze Resume"}
      </Button>

      {result && (
        <div className="space-y-6">

          <div className="rounded-xl border bg-slate-50 p-6">
            <h3 className="text-lg font-semibold">
              ATS Score
            </h3>

            <div className="mt-3 text-5xl font-bold text-blue-600">
              {result.score}/100
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <div className="rounded-xl border p-5">
              <h3 className="font-semibold mb-3">
                ✅ Matching Skills
              </h3>

              <ul className="list-disc ml-5 space-y-2">
                {result.matchingSkills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border p-5">
              <h3 className="font-semibold mb-3">
                ❌ Missing Keywords
              </h3>

              <ul className="list-disc ml-5 space-y-2">
                {result.missingKeywords.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>

          </div>

          <div className="rounded-xl border p-5">
            <h3 className="font-semibold mb-3">
              💪 Strengths
            </h3>

            <ul className="list-disc ml-5 space-y-2">
              {result.strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="font-semibold mb-3">
              ⚠ Weaknesses
            </h3>

            <ul className="list-disc ml-5 space-y-2">
              {result.weaknesses.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="font-semibold mb-3">
              💡 Suggestions
            </h3>

            <ul className="list-disc ml-5 space-y-2">
              {result.suggestions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

        </div>
      )}

    </div>
  );
}
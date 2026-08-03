import ResumeAnalyzer from "@/components/ai/ResumeAnalyzer";

export default function ResumeAIPage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold">
          AI Resume Analyzer
        </h1>

        <p className="mt-2 text-muted-foreground">
          Compare your resume against a job description.
        </p>
      </div>

      <ResumeAnalyzer />

    </div>
  );
}
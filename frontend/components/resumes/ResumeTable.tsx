"use client";

import { ChangeEvent } from "react";

import { Button } from "@/components/ui/button";

import { useResumeStore } from "@/stores/ResumeStore";

export default function ResumeTable() {
  const resumes = useResumeStore((state) => state.resumes);
  const addResume = useResumeStore((state) => state.addResume);
  const deleteResume = useResumeStore((state) => state.deleteResume);

  function handleUpload(
    e: ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    addResume({
      id: crypto.randomUUID(),
      name: file.name,
      uploadedDate: new Date().toLocaleDateString(),
      url: URL.createObjectURL(file),
    });
  }

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold">
          Resume Manager
        </h2>

        <input
          type="file"
          accept=".pdf"
          onChange={handleUpload}
        />

      </div>

      {resumes.length === 0 ? (
        <p className="text-muted-foreground">
          No resumes uploaded yet.
        </p>
      ) : (
        <div className="space-y-4">

          {resumes.map((resume) => (
            <div
              key={resume.id}
              className="flex items-center justify-between rounded-lg border p-4"
            >
              <div>
                <h3 className="font-semibold">
                  {resume.name}
                </h3>

                <p className="text-sm text-muted-foreground">
                  Uploaded {resume.uploadedDate}
                </p>
              </div>

              <div className="flex gap-2">

                <a
                  href={resume.url}
                  target="_blank"
                >
                  <Button variant="outline">
                    Open
                  </Button>
                </a>

                <Button
                  variant="destructive"
                  onClick={() =>
                    deleteResume(resume.id)
                  }
                >
                  Delete
                </Button>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}
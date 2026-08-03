"use client";

import Link from "next/link";

import { useJobStore } from "@/stores/JobStore";
import { useResumeStore } from "@/stores/ResumeStore";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface JobDetailsProps {
  jobId: string;
}

export default function JobDetails({
  jobId,
}: JobDetailsProps) {
  const getJob = useJobStore((state) => state.getJob);
  const resumes = useResumeStore((state) => state.resumes);

  const job = getJob(jobId);

  if (!job) {
    return (
      <div className="rounded-xl border bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-bold">
          Job not found
        </h2>

        <Link href="/jobs">
          <Button className="mt-6">
            Back to Jobs
          </Button>
        </Link>
      </div>
    );
  }

  const resume = resumes.find(
    (resume) => resume.id === job.resumeId
  );

  return (
    <div className="space-y-8">

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-bold">
            {job.company}
          </h1>

          <p className="mt-2 text-xl text-muted-foreground">
            {job.role}
          </p>
        </div>

        <Badge className="px-4 py-2 text-base">
          {job.status}
        </Badge>

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        {/* Job Information */}

        <div className="rounded-xl border bg-white p-6 shadow-sm">

          <h2 className="mb-5 text-xl font-semibold">
            Job Information
          </h2>

          <div className="space-y-4">

            <p>
              <strong>📍 Location:</strong>{" "}
              {job.location || "-"}
            </p>

            <p>
              <strong>💰 Salary:</strong>{" "}
              {job.salary || "-"}
            </p>

            <p>
              <strong>📅 Applied:</strong>{" "}
              {job.appliedDate}
            </p>

            <p>
              <strong>📄 Resume:</strong>{" "}
              {resume ? resume.name : "No Resume Attached"}
            </p>

            {resume && (
              <a
                href={resume.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="mt-2"
                >
                  Open Resume
                </Button>
              </a>
            )}

          </div>

        </div>

        {/* Interview Details */}

        <div className="rounded-xl border bg-white p-6 shadow-sm">

          <h2 className="mb-5 text-xl font-semibold">
            Interview Details
          </h2>

          <div className="space-y-4">

            <p>
              <strong>📅 Date:</strong>{" "}
              {job.interviewDate || "Not Scheduled"}
            </p>

            <p>
              <strong>🕒 Time:</strong>{" "}
              {job.interviewTime || "Not Scheduled"}
            </p>

            <p>
              <strong>🌐 Mode:</strong>{" "}
              {job.interviewMode || "Not Selected"}
            </p>

            <p>
              <strong>👤 Interviewer:</strong>{" "}
              {job.interviewer || "Not Assigned"}
            </p>

            <div>
              <strong>📝 Interview Notes:</strong>

              <p className="mt-2 whitespace-pre-wrap text-muted-foreground">
                {job.interviewNotes || "No interview notes."}
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Application */}

      <div className="rounded-xl border bg-white p-6 shadow-sm">

        <h2 className="mb-5 text-xl font-semibold">
          Application URL
        </h2>

        {job.url ? (
          <a
            href={job.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline break-all"
          >
            {job.url}
          </a>
        ) : (
          <p>No application URL</p>
        )}

      </div>

      {/* Notes */}

      <div className="rounded-xl border bg-white p-6 shadow-sm">

        <h2 className="mb-5 text-xl font-semibold">
          Notes
        </h2>

        <p className="whitespace-pre-wrap">
          {job.notes || "No notes added."}
        </p>

      </div>

      <div className="flex gap-3">

        <Link href={`/jobs/edit/${job.id}`}>
          <Button>
            Edit Job
          </Button>
        </Link>

        <Link href="/jobs">
          <Button variant="outline">
            Back
          </Button>
        </Link>

      </div>

    </div>
  );
}
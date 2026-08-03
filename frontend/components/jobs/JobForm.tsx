"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useJobStore } from "@/stores/JobStore";
import { useResumeStore } from "@/stores/ResumeStore";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface JobFormProps {
  jobId?: string;
}

export default function JobForm({
  jobId,
}: JobFormProps) {
  const router = useRouter();

  const addJob = useJobStore((state) => state.addJob);
  const updateJob = useJobStore((state) => state.updateJob);
  const getJob = useJobStore((state) => state.getJob);

  const resumes = useResumeStore((state) => state.resumes);

  const [formData, setFormData] = useState({
    company: "",
    role: "",
    location: "",
    salary: "",
    url: "",
    notes: "",

    resumeId: "",

    interviewDate: "",
    interviewTime: "",
    interviewMode: "" as "" | "Online" | "Offline",
    interviewer: "",
    interviewNotes: "",
  });

  useEffect(() => {
    if (!jobId) return;

    const job = getJob(jobId);

    if (!job) return;

    setFormData({
      company: job.company,
      role: job.role,
      location: job.location,
      salary: job.salary,
      url: job.url,
      notes: job.notes,

      resumeId: job.resumeId,

      interviewDate: job.interviewDate,
      interviewTime: job.interviewTime,
      interviewMode: job.interviewMode,
      interviewer: job.interviewer,
      interviewNotes: job.interviewNotes,
    });
  }, [jobId, getJob]);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    const jobData = {
      ...formData,

      status: "Applied" as const,

      appliedDate:
        new Date().toLocaleDateString(),
    };

    if (jobId) {
      updateJob(jobId, jobData);
    } else {
      addJob(jobData);
    }

    router.push("/jobs");
  }
    return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-xl border bg-white p-6 shadow-sm"
    >
      <div>
        <Label htmlFor="company">Company</Label>
        <Input
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="role">Role</Label>
        <Input
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
      </div>

      <div>
        <Label htmlFor="salary">Salary</Label>
        <Input
          id="salary"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
        />
      </div>

      <div>
        <Label htmlFor="resumeId">Resume</Label>

        <select
          id="resumeId"
          name="resumeId"
          value={formData.resumeId}
          onChange={handleChange}
          className="w-full rounded-md border px-3 py-2"
        >
          <option value="">Select Resume</option>

          {resumes.map((resume) => (
            <option
              key={resume.id}
              value={resume.id}
            >
              {resume.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <Label htmlFor="url">Application URL</Label>
        <Input
          id="url"
          name="url"
          value={formData.url}
          onChange={handleChange}
        />
      </div>

      <div>
        <Label htmlFor="notes">Notes</Label>
        <Textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
        />
      </div>

      <hr className="my-6" />

      <h2 className="text-xl font-semibold">
        Interview Details
      </h2>

      <div>
        <Label htmlFor="interviewDate">
          Interview Date
        </Label>

        <Input
          type="date"
          id="interviewDate"
          name="interviewDate"
          value={formData.interviewDate}
          onChange={handleChange}
        />
      </div>

      <div>
        <Label htmlFor="interviewTime">
          Interview Time
        </Label>

        <Input
          type="time"
          id="interviewTime"
          name="interviewTime"
          value={formData.interviewTime}
          onChange={handleChange}
        />
      </div>

      <div>
        <Label htmlFor="interviewMode">
          Interview Mode
        </Label>

        <select
          id="interviewMode"
          name="interviewMode"
          value={formData.interviewMode}
          onChange={handleChange}
          className="w-full rounded-md border px-3 py-2"
        >
          <option value="">Select</option>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
        </select>
      </div>

      <div>
        <Label htmlFor="interviewer">
          Interviewer
        </Label>

        <Input
          id="interviewer"
          name="interviewer"
          value={formData.interviewer}
          onChange={handleChange}
        />
      </div>

      <div>
        <Label htmlFor="interviewNotes">
          Interview Notes
        </Label>

        <Textarea
          id="interviewNotes"
          name="interviewNotes"
          value={formData.interviewNotes}
          onChange={handleChange}
        />
      </div>

      <Button
        type="submit"
        className="w-full"
      >
        {jobId ? "Update Job" : "Save Job"}
      </Button>
    </form>
  );
}
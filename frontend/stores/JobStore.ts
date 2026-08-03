import { create } from "zustand";
import { persist } from "zustand/middleware";

export type JobStatus =
  | "Applied"
  | "Interview"
  | "Offer"
  | "Rejected";

export interface Job {
  id: string;

  company: string;
  role: string;
  location: string;
  salary: string;

  status: JobStatus;

  appliedDate: string;

  url: string;

  notes: string;

  resumeId: string;

  interviewDate: string;
  interviewTime: string;
  interviewMode: "Online" | "Offline" | "";
  interviewer: string;
  interviewNotes: string;
}

interface JobStore {
  jobs: Job[];

  addJob: (job: Omit<Job, "id">) => void;

  updateJob: (
    id: string,
    updatedJob: Omit<Job, "id">
  ) => void;

  deleteJob: (id: string) => void;

  getJob: (id: string) => Job | undefined;
}

export const useJobStore = create<JobStore>()(
  persist(
    (set, get) => ({
      jobs: [],

      addJob: (job) =>
        set((state) => ({
          jobs: [
            ...state.jobs,
            {
              id: crypto.randomUUID(),
              ...job,
            },
          ],
        })),

      updateJob: (id, updatedJob) =>
        set((state) => ({
          jobs: state.jobs.map((job) =>
            job.id === id
              ? {
                  id,
                  ...updatedJob,
                }
              : job
          ),
        })),

      deleteJob: (id) =>
        set((state) => ({
          jobs: state.jobs.filter(
            (job) => job.id !== id
          ),
        })),

      getJob: (id) =>
        get().jobs.find(
          (job) => job.id === id
        ),
    }),
    {
      name: "job-storage",
    }
  )
);
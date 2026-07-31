import { create } from "zustand";

export interface Job {
  id: number;
  company: string;
  role: string;
  location: string;
  salary: string;
  url: string;
  notes: string;
}

interface JobStore {
  jobs: Job[];

  addJob: (job: Omit<Job, "id">) => void;
}

export const useJobStore = create<JobStore>((set) => ({
  jobs: [],

  addJob: (job) =>
    set((state) => ({
      jobs: [
        ...state.jobs,
        {
          id: Date.now(),
          ...job,
        },
      ],
    })),
}));
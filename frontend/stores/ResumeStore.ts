import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Resume {
  id: string;
  name: string;
  uploadedDate: string;
  url: string;
}

interface ResumeStore {
  resumes: Resume[];

  addResume: (resume: Resume) => void;

  deleteResume: (id: string) => void;
}

export const useResumeStore = create<ResumeStore>()(
  persist(
    (set) => ({
      resumes: [],

      addResume: (resume) =>
        set((state) => ({
          resumes: [...state.resumes, resume],
        })),

      deleteResume: (id) =>
        set((state) => ({
          resumes: state.resumes.filter(
            (resume) => resume.id !== id
          ),
        })),
    }),
    {
      name: "resume-storage",
    }
  )
);
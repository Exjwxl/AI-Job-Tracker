export type JobStatus =
  | "Applied"
  | "Interview"
  | "Offer"
  | "Rejected";

export interface Job {
  id: number;
  company: string;
  role: string;
  location: string;
  salary: string;
  status: JobStatus;
  appliedDate: string;
  url: string;
}
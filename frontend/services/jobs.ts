import { jobs } from "@/data/jobs";
import { Job } from "@/types/job";

export function getJobs(): Job[] {
  return jobs;
}
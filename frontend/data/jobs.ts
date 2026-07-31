import { Job } from "@/types/job";

export const jobs: Job[] = [
  {
    id: 1,
    company: "Google",
    role: "Software Engineer",
    location: "Bangalore",
    salary: "₹18 LPA",
    status: "Interview",
    appliedDate: "28 Jul 2026",
    url: "https://careers.google.com",
  },
  {
    id: 2,
    company: "Microsoft",
    role: "Frontend Developer",
    location: "Hyderabad",
    salary: "₹15 LPA",
    status: "Applied",
    appliedDate: "30 Jul 2026",
    url: "https://careers.microsoft.com",
  },
  {
    id: 3,
    company: "Amazon",
    role: "SDE I",
    location: "Chennai",
    salary: "₹17 LPA",
    status: "Rejected",
    appliedDate: "15 Jul 2026",
    url: "https://amazon.jobs",
  },
];
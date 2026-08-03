"use client";

import { Briefcase, Clock, CheckCircle, XCircle } from "lucide-react";

import { useJobStore } from "@/stores/JobStore";

const cardStyle =
  "rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md";

export default function StatsCards() {
  const jobs = useJobStore((state) => state.jobs);

  const totalJobs = jobs.length;

  const interviews = jobs.filter(
    (job) => job.status === "Interview"
  ).length;

  const offers = jobs.filter(
    (job) => job.status === "Offer"
  ).length;

  const rejected = jobs.filter(
    (job) => job.status === "Rejected"
  ).length;

  

  const successRate =
  totalJobs === 0
    ? 0
    : Math.round((offers / totalJobs) * 100);

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
      <div className={cardStyle}>
        <Briefcase className="mb-3 h-8 w-8 text-blue-600" />

        <p className="text-sm text-muted-foreground">
          Total Applications
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          {totalJobs}
        </h2>
      </div>

      <div className={cardStyle}>
        <Clock className="mb-3 h-8 w-8 text-yellow-500" />

        <p className="text-sm text-muted-foreground">
          Interviews
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          {interviews}
        </h2>
      </div>

      <div className={cardStyle}>
        <CheckCircle className="mb-3 h-8 w-8 text-green-600" />

        <p className="text-sm text-muted-foreground">
          Offers
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          {offers}
        </h2>
      </div>

      <div className={cardStyle}>
        <XCircle className="mb-3 h-8 w-8 text-red-600" />

        <p className="text-sm text-muted-foreground">
          Rejected
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          {rejected}
        </h2>
      </div>
      <div className={cardStyle}>

        <div className="mb-3 text-3xl">🎯</div>

        <p className="text-sm text-muted-foreground">
          Success Rate
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          {successRate}%
        </h2>
      </div>


    </div>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";

import JobTable from "@/components/jobs/JobTable";
import JobFilters from "@/components/jobs/JobFilters";
import { Button } from "@/components/ui/button";

export default function JobsPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Jobs</h1>

          <p className="mt-2 text-muted-foreground">
            Manage all your job applications.
          </p>
        </div>

        <Link href="/jobs/new">
          <Button>Add Job</Button>
        </Link>
      </div>

      <JobFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
      />

      <JobTable
        search={search}
        status={status}
      />
    </div>
  );
}
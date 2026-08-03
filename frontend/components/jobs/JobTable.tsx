"use client";

import Link from "next/link";

import { useJobStore } from "@/stores/JobStore";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface JobTableProps {
  search: string;
  status: string;
}

export default function JobTable({
  search,
  status,
}: JobTableProps) {

  const jobs = useJobStore((state) => state.jobs);
  const deleteJob = useJobStore((state) => state.deleteJob);


  const filteredJobs = jobs.filter((job) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      (job.company ?? "").toLowerCase().includes(searchText) ||
      (job.role ?? "").toLowerCase().includes(searchText) ||
      (job.location ?? "").toLowerCase().includes(searchText);

    const matchesStatus =
      status === "All" || job.status === status;

    return matchesSearch && matchesStatus;
  });
  

  if (jobs.length === 0) {
    return (
      <div className="rounded-xl border bg-white p-8 text-center shadow-sm">
        <h3 className="text-lg font-semibold">No jobs yet</h3>

        <p className="mt-2 text-muted-foreground">
          Add your first job application to get started.
        </p>

        <Link href="/jobs/new">
          <Button className="mt-6">
            Add Job
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="rounded-xl border bg-white shadow-sm">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Company</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Salary</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Applied</TableHead>
            <TableHead className="text-right">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {filteredJobs.map((job) => (
            <TableRow key={job.id}>
              <TableCell>{job.company}</TableCell>

              <TableCell>{job.role}</TableCell>

              <TableCell>{job.location}</TableCell>

              <TableCell>{job.salary}</TableCell>

              <TableCell>
                <Badge>{job.status}</Badge>
              </TableCell>

              <TableCell>{job.appliedDate}</TableCell>

              <TableCell className="text-right">
                <div className="flex justify-end gap-2">

  <Link href={`/jobs/${job.id}`}>
    <Button
      size="sm"
      variant="secondary"
    >
      View
    </Button>
  </Link>

  <Link href={`/jobs/edit/${job.id}`}>
    <Button
      variant="outline"
      size="sm"
    >
      Edit
    </Button>
  </Link>

  <Button
    size="sm"
    variant="destructive"
    onClick={() => deleteJob(job.id)}
  >
    Delete
  </Button>

</div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
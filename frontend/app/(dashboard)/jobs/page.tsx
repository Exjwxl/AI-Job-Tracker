import JobTable from "@/components/jobs/JobTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function JobsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Jobs</h1>

          <p className="mt-2 text-muted-foreground">
            Manage every job you've applied to.
          </p>
        </div>

        <Link href="/jobs/new">
            <Button>Add Job</Button>
        </Link>
      </div>

      <JobTable />
    </div>
  );
}
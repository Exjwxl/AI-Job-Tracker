import JobForm from "@/components/jobs/JobForm";

export default function NewJobPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">
          Add Job
        </h1>

        <p className="mt-2 text-muted-foreground">
          Track a new job application.
        </p>
      </div>

      <JobForm />
    </div>
  );
}
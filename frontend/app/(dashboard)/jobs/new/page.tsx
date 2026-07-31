import JobForm from "@/components/jobs/JobForm";

export default function NewJobPage() {
  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h1 className="text-4xl font-bold">
          Add New Job
        </h1>

        <p className="mt-2 text-muted-foreground">
          Fill in the details of your job application.
        </p>
      </div>

      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <JobForm />
      </div>
    </div>
  );
}
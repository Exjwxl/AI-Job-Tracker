import JobForm from "@/components/jobs/JobForm";

export default async function EditJobPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">
          Edit Job
        </h1>

        <p className="mt-2 text-muted-foreground">
          Update your job application.
        </p>
      </div>

      <JobForm jobId={id} />
    </div>
  );
}
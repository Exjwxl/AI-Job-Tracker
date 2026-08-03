import ResumeTable from "@/components/resumes/ResumeTable";

export default function ResumePage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold">
          Resumes
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage your resumes.
        </p>
      </div>

      <ResumeTable />

    </div>
  );
}
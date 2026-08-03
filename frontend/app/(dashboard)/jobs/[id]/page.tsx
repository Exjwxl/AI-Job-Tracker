import JobDetails from "../../../../components/jobs/JobDetails";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function JobDetailsPage({
  params,
}: PageProps) {
  const { id } = await params;

  return <JobDetails jobId={id} />;
}
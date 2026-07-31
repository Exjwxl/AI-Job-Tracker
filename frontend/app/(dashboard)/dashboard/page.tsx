import StatsCards from "@/components/dashboard/StatsCards";
import RecentApplications from "@/components/dashboard/RecentApplications";
import UpcomingInterviews from "@/components/dashboard/UpcomingInterviews";

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="mt-2 text-muted-foreground">
          Welcome back! Here's your job search overview.
        </p>
      </div>

      <StatsCards />

      <div className="grid gap-6 lg:grid-cols-3">

        <div className="lg:col-span-2">
          <RecentApplications />
        </div>

        <UpcomingInterviews />

      </div>

    </div>
  );
}
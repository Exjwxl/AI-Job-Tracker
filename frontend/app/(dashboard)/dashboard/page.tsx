import StatsCards from "@/components/dashboard/StatsCards";

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="text-muted-foreground mt-2">
          Welcome back! Here's your job search overview.
        </p>
      </div>

      <StatsCards />

    </div>
  );
}
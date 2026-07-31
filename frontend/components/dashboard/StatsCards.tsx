import {
  BriefcaseBusiness,
  CalendarCheck,
  Trophy,
  XCircle,
} from "lucide-react";

const stats = [
  {
    title: "Total Jobs",
    value: 24,
    icon: BriefcaseBusiness,
  },
  {
    title: "Interviews",
    value: 8,
    icon: CalendarCheck,
  },
  {
    title: "Offers",
    value: 2,
    icon: Trophy,
  },
  {
    title: "Rejected",
    value: 6,
    icon: XCircle,
  },
];

export default function StatsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-2xl border bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  {item.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  {item.value}
                </h2>
              </div>

              <Icon className="h-10 w-10 text-blue-600" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
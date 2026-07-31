const interviews = [
  {
    company: "Google",
    role: "Frontend Engineer",
    date: "Tomorrow",
    time: "2:30 PM",
  },
  {
    company: "Adobe",
    role: "Software Engineer",
    date: "Monday",
    time: "11:00 AM",
  },
];

export default function UpcomingInterviews() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold">
        Upcoming Interviews
      </h2>

      <div className="space-y-5">
        {interviews.map((item) => (
          <div
            key={item.company}
            className="rounded-xl border p-4"
          >
            <h3 className="font-semibold">
              {item.company}
            </h3>

            <p className="text-sm text-gray-500">
              {item.role}
            </p>

            <p className="mt-2 text-sm font-medium text-blue-600">
              {item.date} • {item.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
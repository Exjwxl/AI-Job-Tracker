import { recentApplications } from "@/data/dashboard";

export default function RecentApplications() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold">
        Recent Applications
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b text-left text-gray-500">
            <th className="pb-3">Company</th>
            <th className="pb-3">Position</th>
            <th className="pb-3">Status</th>
            <th className="pb-3">Applied</th>
          </tr>
        </thead>

        <tbody>
          {recentApplications.map((job) => (
            <tr key={job.id} className="border-b last:border-none">
              <td className="py-4 font-medium">{job.company}</td>
              <td>{job.role}</td>
              <td>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                  {job.status}
                </span>
              </td>
              <td>{job.applied}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
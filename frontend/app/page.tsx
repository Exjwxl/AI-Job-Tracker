import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="rounded-2xl bg-white p-10 shadow-lg text-center">
        <h1 className="text-5xl font-bold mb-4">
          AI Job Tracker
        </h1>

        <p className="text-gray-600 mb-8">
          Organize your job search with AI-powered tools.
        </p>

        <Link
          href="/dashboard"
          className="rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Open Dashboard
        </Link>
      </div>
    </main>
  );
}
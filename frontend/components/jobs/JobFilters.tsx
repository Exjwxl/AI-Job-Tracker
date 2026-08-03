"use client";

import { Input } from "@/components/ui/input";

interface JobFiltersProps {
  search: string;
  setSearch: (value: string) => void;

  status: string;
  setStatus: (value: string) => void;
}

export default function JobFilters({
  search,
  setSearch,
  status,
  setStatus,
}: JobFiltersProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <Input
        placeholder="Search company, role..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="rounded-lg border px-3 py-2"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="All">All Status</option>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>
    </div>
  );
}
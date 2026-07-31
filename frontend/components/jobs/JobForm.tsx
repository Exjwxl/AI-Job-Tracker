"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function JobForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    company: "",
    role: "",
    location: "",
    salary: "",
    url: "",
    notes: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log("New Job:", formData);

    alert("Job saved successfully! (Backend coming next)");

    router.push("/jobs");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      <div>
        <Label>Company</Label>
        <Input
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Google"
        />
      </div>

      <div>
        <Label>Role</Label>
        <Input
          name="role"
          value={formData.role}
          onChange={handleChange}
          placeholder="Software Engineer"
        />
      </div>

      <div>
        <Label>Location</Label>
        <Input
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Bangalore"
        />
      </div>

      <div>
        <Label>Salary</Label>
        <Input
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          placeholder="18 LPA"
        />
      </div>

      <div>
        <Label>Application URL</Label>
        <Input
          name="url"
          value={formData.url}
          onChange={handleChange}
          placeholder="https://company.com/jobs"
        />
      </div>

      <div>
        <Label>Notes</Label>
        <Textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Interview next week..."
        />
      </div>

      <div className="flex justify-end">
        <Button type="submit">
          Save Job
        </Button>
      </div>

    </form>
  );
}
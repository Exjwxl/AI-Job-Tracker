"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";

export default function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6">

      <div className="relative w-96">

        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

        <Input
          placeholder="Search jobs..."
          className="pl-10"
        />

      </div>

      <Avatar>
        <AvatarFallback>EJ</AvatarFallback>
      </Avatar>

    </header>
  );
}
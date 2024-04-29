import React from "react";
import AsideOptions from "./aside-options/aside-options";
import { cn } from "@/lib/utils";

export default function AdminAside({ className }) {
  return (
    <aside className={cn(className, "bg-stone-50 h-screen sticky top-0")}>
      <h2 className="mb-2 text-bold">Admin</h2>
      {/* <AsideOptions /> */}
    </aside>
  );
}

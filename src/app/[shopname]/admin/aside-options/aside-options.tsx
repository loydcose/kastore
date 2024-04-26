import { cn } from "@/lib/utils";
import React from "react";
import AsideOption from "./aside-option";

export default function AsideOptions({ className }) {
  return (
    <div className={cn(className, "flex flex-col gap-2")}>
      {["Add item", "My Items", "Orders", "Appearance"].map((i) => (
        <AsideOption key={i} i={i} />
      ))}
    </div>
  );
}

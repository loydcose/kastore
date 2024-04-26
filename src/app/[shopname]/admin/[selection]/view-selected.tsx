import { cn } from "@/lib/utils";
import React from "react";

export default function ViewSelected({ item, className }) {
  return <div className={cn(className)}>{item}</div>;
}

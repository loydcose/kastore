import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

export default function AsideOption({ i }) {
  return (
    <Button
      variant={i === "Add item" ? "default" : "ghost"}
      size={"sm"}
      className="justify-start text-left"
    >
      {i}
    </Button>
  );
}

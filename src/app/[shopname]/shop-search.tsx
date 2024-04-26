import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import React from "react";

export default function ShopSearch({ classname }) {
  return (
    <form
      className={cn(
        classname,
        "mx-auto w-full max-w-4xl flex items-center gap-2"
      )}
    >
      <Input className="block w-full min-w-0" placeholder="Search item" />
      <Button type="submit" size={"icon"}>
        <Search size={16} />
      </Button>
    </form>
  );
}

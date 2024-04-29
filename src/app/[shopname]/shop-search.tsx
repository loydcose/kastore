import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import React from "react";

export default function ShopSearch({ classname }) {
  return (
    <form className={cn(classname, "mx-auto w-full max-w-4xl")}>
      <div className=" flex items-center gap-2 mb-2">
        <Input className="block w-full min-w-0" placeholder="Search item" />
        <Button type="submit" size={"icon"}>
          <Search size={16} />
        </Button>
      </div>
      <div className="flex items-center gap-2 justify-between">
        <Button type="submit" variant={"outline"}>
          Add filter
        </Button>
        <Button type="submit" variant={"outline"}>
          Sort
        </Button>
      </div>
    </form>
  );
}

import { cn } from "@/lib/utils";
import React from "react";
import ShopCategory from "./shop-category";

export default function ShopCategories({ className }: { className: string }) {
  return (
    <div className={cn(className, "flex gap-2")}>
      {[1, 2, 3].map((i) => (
        <ShopCategory key={i} i={i} />
      ))}
    </div>
  );
}

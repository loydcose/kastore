import { cn } from "@/lib/utils";
import React from "react";
import ShopItem from "./shop-item";

export default function ShopItems({ className }) {
  return (
    <div
      className={cn(
        className,
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:md-grid-cols-4 gap-2"
      )}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
        <ShopItem key={i} i={i} />
      ))}
    </div>
  );
}

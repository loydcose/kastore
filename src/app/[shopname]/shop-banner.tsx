import { cn } from "@/lib/utils";
import React from "react";

export default function ShopBanner({ className }) {
  return (
    <section className={cn(className)}>
      <div className="relative w-full h-[200px]">
        <div className="size-full bg-stone-200"></div>
        <div className="rounded-full size-32 bg-stone-400 absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 border border"></div>
      </div>
      <h2 className="text-xl font-bold mb-2 text-center mt-20">Shitshop</h2>
      <p className="text-stone-600 text-center">Welcome to m shitshop!</p>
    </section>
  );
}

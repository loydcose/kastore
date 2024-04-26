import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function ShopItem({ i }) {
  return (
    <Link
      href={"#"}
      className="aspect-[3/4] bg-stone-500 rounded-lg block size-full"
    ></Link>
  );
}

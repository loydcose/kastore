"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Menu, ShoppingBag } from "lucide-react";
import { SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function TopNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between mx-auto max-w-7xl w-11/12 py-4">
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size={"icon"}
          className="lg:hidden flex"
          title="Open side nav"
        >
          <Menu className="m-auto" />
        </Button>
      </SheetTrigger>
      <div className="flex items-center gap-3 ml-auto">
        {pathname.includes("/admin") ? (
          <Link
            href="/shitshop"
            className={buttonVariants({ variant: "outline", size: "sm" })}
          >
            Switch to buyer
          </Link>
        ) : (
          <Button size={"sm"} variant={"ghost"}>
            <ShoppingBag size={20} className="text-stone-600" />
          </Button>
        )}
        <Button size={"sm"}>Log out</Button>
      </div>
    </nav>
  );
}

"use client";

import { Paintbrush2, Plus, ShoppingBag, Store } from "lucide-react";
import { usePathname } from "next/navigation";
import SideNavSelections from "./side-nav-selections";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ReactNode } from "react";

// todo: dynamic imports
const AdminLists: List[] = [
  {
    title: "Add new item",
    path: "/new",
    icon: Plus,
  },
  {
    title: "My Items",
    path: "/items",
    icon: Store,
  },
  {
    title: "Orders",
    path: "/orders",
    icon: ShoppingBag,
  },
  {
    title: "Appearance",
    path: "/appearance",
    icon: Paintbrush2,
    numberIndicator: 5,
  },
];

const buyerLists: List[] = [
  {
    title: "Home",
    path: "/",
    icon: Store,
  },
  {
    title: "Orders",
    path: "/orders",
    icon: ShoppingBag,
  },
];

export default function SideNav() {
  return (
    <>
      <aside className="min-w-[250px] h-screen sticky top-0 p-6 outline hidden lg:block">
        <SideNavContent />
      </aside>

      {/* mobile */}
      <SheetContent
        className="w-11/12 md:w-11/12 block lg:hidden"
        side={"left"}
      >
        <SideNavContent />
      </SheetContent>
    </>
  );
}

export function SideNavContent() {
  const pathname = usePathname();

  return (
    <>
      <h1 className="font-bold mb-12 ml-4 text-xl">KaStore</h1>
      {pathname.includes("/admin") ? (
        <SideNavSelections lists={AdminLists} />
      ) : (
        <SideNavSelections lists={buyerLists} />
      )}
    </>
  );
}

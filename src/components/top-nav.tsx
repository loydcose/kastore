import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

export default function TopNav() {
  return (
    <nav className="flex items-center justify-end mx-auto max-w-7xl w-11/12 py-4">
      <div className="flex items-center gap-3">
        <Button size={"sm"} variant={"ghost"}>
          <ShoppingBag size={20} className="text-stone-600" />
        </Button>
        <Button size={"sm"}>Log out</Button>
      </div>
    </nav>
  );
}

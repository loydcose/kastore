import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

export default function ShopCategory({ i }) {
  return (
    <Button variant={"outline"} size={"sm"}>
      Categoiry {i}
    </Button>
  );
}

import { buttonVariants } from "../ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SheetClose, SheetTrigger } from "../ui/sheet";

export default function SideNavSelections({ lists }: SideNavSelectionsProps) {
  const pathname = usePathname();
  console.log({ pathname });
  return (
    <div className="flex flex-col gap-1">
      {/* ! can be split up lists to list component */}
      {lists.map((list) => {
        const { icon: Icon, numberIndicator, path, title } = list;
        const isPathMatch = pathname.endsWith(path);

        return (
          <SheetClose asChild>
            <Link
              key={path}
              href={`/shitshop/admin/${path}`}
              className={cn(
                buttonVariants({
                  variant: isPathMatch ? "default" : "ghost",
                }),
                "flex items-center justify-start gap-3"
              )}
            >
              <Icon strokeWidth={1.5} className="opacity-75" />
              {title}
              {numberIndicator && (
                <span className="rounded-full size-5 bg-rose-600 flex ml-auto">
                  <span className={cn("text-white", "m-auto text-xs")}>
                    {numberIndicator}
                  </span>
                </span>
              )}
            </Link>
          </SheetClose>
        );
      })}
    </div>
  );
}

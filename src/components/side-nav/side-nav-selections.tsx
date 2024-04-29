import { buttonVariants } from "../ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SheetClose, SheetTrigger } from "../ui/sheet";

export default function SideNavSelections({
  lists,
  type,
  className,
  title,
}: SideNavSelectionsProps) {
  const pathname = usePathname();

  return (
    <>
      {title && <h2 className="text-stone-600 mb-2 text-sm ml-4">{title}</h2>}
      <div className={cn(className, "flex flex-col gap-1")}>
        {/* ! can be split up lists to list component */}
        {lists.map((list) => {
          const { icon: Icon, numberIndicator, path, title } = list;
          const isPathMatch = pathname.endsWith(path);

          return (
            <SheetClose asChild>
              <Link
                key={path}
                href={
                  type === "admin"
                    ? `/shitshop/admin/${path}`
                    : `/shitshop/${path}`
                }
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
    </>
  );
}

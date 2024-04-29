type List = {
  title: string;
  icon: LucideIcon;
  numberIndicator?: number;
  path: string;
};

type SideNavSelectionsProps = {
  lists: List[];
  type: "admin" | "user";
  className?: string;
  title?: string;
};

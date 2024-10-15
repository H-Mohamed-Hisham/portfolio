import { Link, useLocation } from "react-router-dom";

// Icons
import { LucideIcon } from "lucide-react";

// Lib
import { cn } from "@/lib/utils";

// Constants
import { menu } from "@/constants/menu";

type Props = {
  label: string;
  link: string;
  icon: LucideIcon;
  base_link: string;
};

const MenuItem = ({ item, isActive }: { item: Props; isActive: boolean }) => {
  const { label, link, icon: Icon } = item;
  return (
    <Link
      to={link}
      className={cn(
        "flex flex-col items-center border rounded-md p-2 text-sm md:text-base",
        isActive
          ? "bg-primary font-medium"
          : "bg-secondary hover:bg-muted-foreground hover:text-accent"
      )}
    >
      <Icon className="w-4 h-4 md:w-5 md:h-5" />
      <div>{label}</div>
    </Link>
  );
};

export function Menu() {
  const { pathname } = useLocation();
  const base_pathname = pathname.split("/")[1];

  return (
    <div className="w-full flex justify-center items-center fixed bottom-0 my-0 z-10 h-[88px] bg-background">
      <div className="grid grid-cols-4 gap-2 border rounded-sm p-1 mb-1 mx-1 md:mx-0">
        {menu.map((item, index) => (
          <MenuItem
            key={index}
            item={item}
            isActive={base_pathname === item.base_link}
          />
        ))}
      </div>
    </div>
  );
}

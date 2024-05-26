"use client";

import SidebarPiece from "@/components/fragment/dashboard/sidebarPiece";
import { Button } from "@/components/ui/button";
import { PackageOpen, Settings, icons } from "lucide-react";

interface IsideLink<T> {
  icon: keyof typeof icons;
  name: T;
  path: T;
}

const sideLink: IsideLink<string>[] = [
  { icon: "Home", name: "dashboard", path: "/admin" },
  {
    icon: "PackageSearch",
    name: "product",
    path: "/admin/product",
  },
  { icon: "Users", name: "customer", path: "/admin/customer" },
  {
    icon: "LineChart",
    name: "analytic",
    path: "/admin/analythic",
  },
];

export default function DashboardSidebar() {
  return (
    <aside className="flex fixed lg:static lg:py-10  top-0 left-0 h-14 lg:h-full overflow-hidden w-screen lg:w-14 px-2 justify-center">
      <div className="flex flex-row w-full lg:w-auto lg:flex-col justify-between items-center">
        <div className="flex flex-row lg:flex-col gap-2 w-full lg:w-auto justify-around lg:gap-4">
          <Button className="rounded-full" size="icon">
            <PackageOpen />
          </Button>
          {sideLink.map((item) => (
            <SidebarPiece
              key={item.name}
              name={item.name}
              icon={item.icon}
              path={item.path}
            />
          ))}
        </div>
        <div>
          <Button className="rounded-full" size="icon">
            <Settings />
          </Button>
        </div>
      </div>
    </aside>
  );
}
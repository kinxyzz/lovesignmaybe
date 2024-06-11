"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import NavMenu from "./NavMenu";
import NavbarAction from "./navAction";
import NavLink from "./navLink";
import NavSearch from "./navSearch";

export default function Navbar() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <header className="block border-b">
      <nav className="container mx-auto">
        <div className="flex items-center justify-between pt-2">
          <NavMenu />
          <div className="flex w-1/3 items-center justify-center lg:justify-start h-12 rounded-md">
            <Image
              src="/sripadilogo.png"
              alt="logo"
              width={48}
              height={48}
              priority
            />
          </div>
          <NavSearch hideLarge={false} size="large" />
          <NavbarAction />
        </div>
        <div className="mt-5 mb-3">
          <NavLink hideLarge={false} />
          <NavSearch />
        </div>
      </nav>
    </header>
  );
}

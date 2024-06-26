"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";

export default function NavMenu({
  showSearch,
  setShowSearch,
}: {
  showSearch: boolean;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [mounted, setMounted] = useState(false);

  return (
    <>
      <div className="lg:hidden w-1/3 flex flex-nowrap items-centers">
        <Sheet open={mounted} onOpenChange={setMounted}>
          <SheetTrigger asChild>
            <Button size="icon" variant="ghost">
              <Menu size={16} />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle className="mb-2">
                <Link href="/">Sripadi Batik</Link>
              </SheetTitle>
            </SheetHeader>
            <NavLink
              mounted={mounted}
              setMounted={setMounted}
              hideLarge={true}
            />
          </SheetContent>
        </Sheet>
        <Button onClick={() => setShowSearch(!showSearch)} variant="ghost">
          <Search size={16} />
        </Button>
      </div>
    </>
  );
}

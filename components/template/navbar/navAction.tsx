"use client";

import { Button } from "@/components/ui/button";
import { useTokenStore } from "@/store/authenticated/store";
import { ShoppingCart } from "lucide-react";

import { useRouter } from "next/navigation";

export default function NavbarAction() {
  const token = useTokenStore((state) => state.token);
  const router = useRouter();
  function handleSignout() {}
  function handleLogin() {
    router.push("/login");
  }
  return (
    <div className="flex gap-2 items-center">
      <Button variant="outline" size="icon" className="rouned-md">
        <ShoppingCart size={20} />
      </Button>
      <div className="hidden lg:block">
        {token ? (
          <Button onClick={handleSignout}>Sign out</Button>
        ) : (
          <Button onClick={handleLogin}>Login</Button>
        )}
      </div>
    </div>
  );
}
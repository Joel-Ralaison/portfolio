"use client";

import Link from "next/link";
import { NavigationLinks } from "@/constants/Links";

import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useNavigation } from "@/stores/useNavigation";

export default function DesktopNavbar() {
  const active = useNavigation((store) => store.active);
  const setActive = useNavigation((store) => store.setActive);

  return (
    <NavigationMenu className="max-md:hidden">
      <NavigationMenuList>
        {NavigationLinks.map((link) => (
          <Link key={link.href} href={link.href} legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                "h-9 w-max bg-transparent px-4 py-2 text-base font-medium text-accent-foreground/50 outline-none transition-colors hover:text-accent-foreground",
                {
                  "border-b-2 border-accent-foreground/75 text-accent-foreground":
                    active === link.href,
                },
              )}
              onClick={() => setActive(link.href)}
            >
              {link.label}
            </NavigationMenuLink>
          </Link>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

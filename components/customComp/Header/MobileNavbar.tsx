"use client";

import { cn } from "@/lib/utils";
import { useNavigation } from "@/stores/useNavigation";
import { NavigationLinks } from "@/constants/Links";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export default function MobileNavbar() {
  const useMobileNav = useNavigation((store) => store.useMobileNav);
  const [openMenu, setOpenMenu] = useMobileNav();

  const active = useNavigation((store) => store.active);
  const setActive = useNavigation((store) => store.setActive);

  const [windowWidth, setWindowWidth] = useState<number | null>();

  function closeMenu() {
    setOpenMenu(false);
    document.body.classList.remove("lockScroll");
  }

  function showMenu() {
    setOpenMenu(true);
    document.body.classList.add("lockScroll");
  }

  function navigate(target: string) {
    closeMenu();
    setActive(target);
  }

  const handleWindowSize = useCallback(() => {
    if (!window) return;

    setWindowWidth(window?.innerWidth);

    if (!windowWidth) return;

    if (windowWidth > 768) {
      setOpenMenu(false);
      document.body.classList.remove("lockScroll");
    }
  }, [windowWidth, setOpenMenu]);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSize);

    return () => window.removeEventListener("resize", handleWindowSize);
  }, [handleWindowSize]);

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        className="flex flex-col gap-[6px] px-2 py-3"
        onClick={showMenu}
      >
        <span className="h-[2px] w-[30px] rounded-md bg-foreground" />
        <span className="h-[2px] w-[30px] rounded-md bg-foreground" />
        <span className="h-[2px] w-[30px] rounded-md bg-foreground" />
        <span className="sr-only">Open Menu</span>
      </button>

      <nav
        className={cn({
          "fixed right-0 top-0 z-[31] h-svh w-3/4 rounded-l-md bg-background pl-4 shadow-md shadow-black/5 transition-all duration-300":
            true,
          "translate-x-0": openMenu,
          "translate-x-full": !openMenu,
        })}
      >
        <div className="flex h-[50px] items-center justify-between pr-4">
          <h3
            className={cn([
              "relative bottom-[2px] text-xl",
              "bg-gradient-to-tr bg-clip-text text-transparent",
              "from-neutral-600 via-neutral-700 to-neutral-500",
              "dark:from-neutral-500 dark:via-neutral-200 dark:to-neutral-500",
            ])}
          >
            JOËL RALAISON
          </h3>

          <button
            type="button"
            className="flex flex-col gap-[6px] px-2 py-3"
            onClick={closeMenu}
          >
            <span className="relative top-2 h-[2px] w-[30px] rotate-45 rounded-md bg-foreground" />
            <span className="h-[2px] w-[30px]" />
            <span className="relative -top-2 h-[2px] w-[30px] -rotate-45 rounded-md bg-foreground" />
            <span className="sr-only">Open Menu</span>
          </button>
        </div>

        <ul
          className={cn(
            "flex h-[50%] w-full flex-col justify-center gap-4 pt-[10svh]",
          )}
        >
          {NavigationLinks.map((link) => (
            <li
              key={link.href}
              className={cn({
                "h-10 w-full": true,
                "border-b-2 border-primary": active === link.href,
                "text-primary/60": active !== link.href,
              })}
            >
              <Link
                href={link.href}
                className="flex h-full origin-left items-center pl-[5vh] text-2xl transition-transform hover:scale-110 hover:text-primary"
                onClick={() => navigate(link.href)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="absolute bottom-2 left-0 flex h-12 w-full items-center justify-center">
          <Link
            download
            href="/assets/joel-ralaison-resume.pdf"
            target="_blank"
            className="grid h-full w-[90%] place-items-center rounded-sm bg-primary font-bold text-background"
          >
            Download my Resume
          </Link>
        </div>
      </nav>

      <div
        className={cn({
          "fixed inset-0 z-30 h-svh w-svw bg-black/60 transition-all duration-300":
            true,
          "visible opacity-100": openMenu,
          "invisible opacity-0": !openMenu,
        })}
        onClick={closeMenu}
      />
    </div>
  );
}

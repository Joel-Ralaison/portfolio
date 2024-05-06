"use client";

import ThemeToggler from "./ThemeToggler";
import Link from "next/link";
import { cn } from "@/lib/utils";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Header() {
  return (
    <header className="fixed top-0 z-30 h-[50px] w-full">
      <div
        className={cn([
          "relative mx-auto flex h-full max-w-screen-xl justify-end",
          "bg-background shadow-md shadow-black/10",
        ])}
      >
        <Logo />

        <div className="flex items-center gap-2 pr-4">
          <ThemeToggler />
          <DesktopNavbar />
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <>
      <Link
        href="#home"
        type="button"
        className="absolute left-[calc(15%-56px)] top-0 flex h-full items-center justify-center pb-2"
      >
        <h1
          className={cn({
            "w-14 text-center text-3xl": true,
            "bg-gradient-to-tr bg-clip-text text-transparent": true,
            "from-neutral-500 via-neutral-700 to-neutral-400": true,
            "dark:from-neutral-400 dark:via-neutral-100 dark:to-neutral-600":
              true,
          })}
        >
          JR
        </h1>
      </Link>

      <div className="absolute left-[15%] h-full w-[7px] bg-primary" />
    </>
  );
}

"use client";

import Link from "next/link";

export default function DownloadResume() {
  return (
    <Link
      href="/assets/joel-ralaison-resume.pdf"
      target="_blank"
      className="font-lemon z-[10] block w-full py-2 text-center text-foreground group-hover:text-primary-foreground max-md:text-primary-foreground"
      download
    >
      My Resume
    </Link>
  );
}

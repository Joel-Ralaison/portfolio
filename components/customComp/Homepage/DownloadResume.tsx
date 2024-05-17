import Link from "next/link";

export default function DownloadResume() {
  return (
    <Link
      href="assets/joel-ralaison-resume.pdf"
      target="_blank"
      className="z-[10] block w-full py-2 text-center font-lemon text-foreground transition-all duration-500 group-hover:text-primary-foreground max-md:text-primary-foreground"
      download
    >
      My Resume
    </Link>
  );
}

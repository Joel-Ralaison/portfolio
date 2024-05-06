import { cn } from "@/lib/utils";
import DownloadResume from "./DownloadResume";

export default function Resume() {
  return (
    <article className="group absolute bottom-[15%] left-0 z-10 w-[50%] max-w-[350px] overflow-hidden">
      <DownloadResume />

      <div className="h-[7px] w-full bg-primary" />

      <div
        className={cn([
          "absolute inset-0 -z-[1] h-[calc(100%-7px)] w-full",
          "bg-primary",
          "transition-all duration-300",
          "-translate-x-[105%] group-hover:translate-x-0 max-md:translate-x-0",
        ])}
      />
    </article>
  );
}

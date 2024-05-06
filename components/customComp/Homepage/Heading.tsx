import { cn } from "@/lib/utils";
import CardContainer from "../CardContainer";

export default function Heading() {
  return (
    <CardContainer className="max-w-[525px] space-y-4 rounded-lg max-md:mx-auto md:max-w-[600px]">
      <h1 className="leading-snug tracking-wider max-md:mb-6">
        HELLO !<br />
        MY NAME IS <span className="">JOËL</span>,
      </h1>

      <p
        className={cn({
          "leading-snug max-md:leading-normal": true,
          "bg-gradient-to-tr bg-clip-text text-transparent": true,
          "via-default from-zinc-600 to-zinc-400": true,
          "dark:via-default dark:from-zinc-500 dark:to-zinc-700": true,
        })}
      >
        I&apos;m a frontend developper that integrates the latest web
        technologies to build modern, interactive and responsive websites, based
        on <span className="text-strong">your specifications</span>.
      </p>
    </CardContainer>
  );
}

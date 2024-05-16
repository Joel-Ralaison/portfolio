import Link from "next/link";
import { cn } from "@/lib/utils";

import {
  BsArrowLeftSquareFill,
  BsArrowUpRightCircleFill,
} from "react-icons/bs";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { BiLoader, BiLogoGithub } from "react-icons/bi";

export default function Project(props: {
  title: string;
  description: string;
  stack: string[];
  color: { BGTEXT: string; BG: string; TITLE: string };
  link: string;
  visitLink: string;
}) {
  return (
    <Carousel className="h-[50%] min-h-[160px] w-[75%]">
      <CarouselContent>
        <CarouselItem className="group h-[calc(50svh)] min-h-[160px] w-full cursor-default">
          <article className="group relative h-full w-full">
            <div className="flex h-[80%] items-center justify-center pt-[calc(10%)]">
              <p className="relative bottom-8 bg-transparent px-6 pb-3 pt-2 font-lemon text-7xl transition-colors duration-150 group-hover:bg-foreground group-hover:text-background max-md:text-4xl">
                {props.title}
              </p>
            </div>

            <div className="absolute bottom-2 left-0 flex w-full flex-col justify-end pb-4">
              <div className="flex w-4/5 max-w-[500px] justify-between rounded-md border border-primary bg-background px-2 py-1 max-md:w-fit max-md:justify-start max-md:gap-4">
                <Link href={props.link} className="flex items-center gap-2">
                  <BiLogoGithub size={25} />
                  <span className="max-md:hidden">Repository</span>
                </Link>

                {props.visitLink ? (
                  <Link
                    href={props.visitLink}
                    className="flex items-center gap-2"
                  >
                    <BsArrowUpRightCircleFill size={22} />
                    <span className="max-md:hidden">{props.visitLink}</span>
                  </Link>
                ) : (
                  <span className="flex items-center gap-2">
                    <BiLoader size={22} />
                    <span className="max-md:hidden">On building</span>
                  </span>
                )}
              </div>

              <div className="absolute right-2 flex items-center gap-2 py-1">
                <span className="text-2xl transition-transform duration-200 group-hover:translate-x-[-5px]">
                  <BsArrowLeftSquareFill />
                </span>

                <span className="text-xl max-md:text-base">Swipe</span>
              </div>
            </div>
          </article>
        </CarouselItem>

        <CarouselItem className="h-[calc(50svh-15px)] min-h-[160px] w-full cursor-default">
          <article
            className={cn(
              "relative h-full w-full p-4 max-md:py-2",
              "flex flex-col justify-between",
              props.color.BG,
            )}
          >
            <div className="space-y-4 max-md:space-y-1">
              <p className={cn("w-fit font-lemon text-2xl", props.color.TITLE)}>
                {props.title}
              </p>

              <p className="max-w-[600px] text-white dark:text-neutral-300 max-md:text-base">
                {props.description}
              </p>
            </div>

            <p
              className={cn(
                "absolute bottom-[50px] right-2 font-lemon text-4xl max-md:hidden",
                props.color.BGTEXT,
              )}
            >
              {props.title}
            </p>

            <ul className="flex flex-wrap gap-x-4 gap-y-0 text-lg text-white/80 dark:text-white/60 md:text-2xl">
              {props.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </article>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}

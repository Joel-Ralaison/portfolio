import { cn } from "@/lib/utils";
import { BsArrowLeftSquareFill } from "react-icons/bs";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Project(props: {
  title: string;
  description: string;
  stack: string[];
  color: { BGTEXT: string; BG: string; TITLE: string };
}) {
  return (
    <Carousel className="h-[calc(50svh-40px)] min-h-[160px] w-[75%]">
      <CarouselContent>
        <CarouselItem className="group h-[calc(50svh-40px)] min-h-[160px] w-full cursor-pointer">
          <article className="h-full w-full">
            <div className="flex h-[90%] items-center justify-center pt-[calc(10%)]">
              <h3 className="relative bottom-8 text-7xl max-md:text-4xl">
                {props.title}
              </h3>
            </div>

            <div className="relative flex h-[10%] flex-col justify-end pb-4">
              <div className="absolute right-2 flex items-center gap-2 ">
                <span className="text-2xl transition-transform duration-200 group-hover:translate-x-[-5px]">
                  <BsArrowLeftSquareFill />
                </span>

                <span className="text-xl max-md:text-base">Swipe</span>
              </div>
            </div>
          </article>
        </CarouselItem>

        <CarouselItem className="h-[calc(50svh-40px)] min-h-[160px] w-full cursor-default">
          <article
            className={cn(
              "relative h-full w-full p-4 max-md:py-2",
              "flex flex-col justify-between",
              props.color.BG,
            )}
          >
            <div className="space-y-4 max-md:space-y-1">
              <h3 className={cn("w-fit text-2xl", props.color.TITLE)}>
                {props.title}
              </h3>

              <p className="max-w-[600px] text-white dark:text-neutral-300 max-md:text-base">
                {props.description}
              </p>
            </div>

            <h4
              className={cn(
                "absolute bottom-[50px] right-2 text-4xl max-md:hidden",
                props.color.BGTEXT,
              )}
            >
              {props.title}
            </h4>

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

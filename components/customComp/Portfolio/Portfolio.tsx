"use client";

import PortfolioLines from "./PortfolioLine";
import Project from "./Project";

import { useInView } from "react-intersection-observer";
import { useNavigation } from "@/stores/useNavigation";
import { useEffect } from "react";

const twColors = {
  sushiColor: {
    BGTEXT: "text-rose-200 dark:text-rose-900 cursor-default",
    BG: "bg-rose-600 dark:bg-rose-950",
    TITLE:
      "bg-gradient-to-r from-yellow-200 to-amber-200 dark:from-rose-500 from-20% dark:to-amber-500 to-70% text-transparent bg-clip-text",
  },
  worldwiseColor: {
    BGTEXT: "text-teal-400 dark:text-teal-900 cursor-default",
    BG: "bg-teal-600 dark:bg-teal-950",
    TITLE: "text-emerald-300 dark:text-teal-600",
  },
};

const projectData = [
  {
    title: "SUSHIMAN",
    description:
      "A responsive website of a sushi food delivery company. Based on a JS Mastery project, rebuilt with the best React.Js framework.",
    stack: ["Next.Js", "Tailwindcss", "Zustand"],
    color: twColors.sushiColor,
    link: "https://github.com/Joel-Ralaison/sushimanApp",
    visitLink: "https://sushimanjr.vercel.app",
  },
  {
    title: "WORLDWISE.",
    description:
      "A modern web application that help users to track their favorite places in their world exploration journey throw an interactive map.",
    stack: ["Next.Js", "Leaflet", "Typescript"],
    color: twColors.worldwiseColor,
    link: "https://github.com/Joel-Ralaison/Worldwise",
    visitLink: "https://worldwisejr.vercel.app",
  },
];

export default function Portfolio() {
  const setActive = useNavigation((store) => store.setActive);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setActive("#portfolio");
    }
  }, [inView, setActive]);

  return (
    <div
      id="portfolio"
      ref={ref}
      className="relative mb-10 mt-16 flex h-svh min-h-[320px] w-full flex-col items-end p-4"
    >
      {projectData.map((proj) => (
        <Project
          key={proj.title}
          title={proj.title}
          description={proj.description}
          stack={proj.stack}
          color={proj.color}
          link={proj.link}
          visitLink={proj.visitLink}
        />
      ))}

      <PortfolioLines />
    </div>
  );
}

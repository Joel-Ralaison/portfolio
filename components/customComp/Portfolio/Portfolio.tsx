import PortfolioLines from "./PortfolioLine";
import Project from "./Project";

const twColors = {
  sushiColor: {
    BGTEXT: "text-rose-200 dark:text-rose-900 cursor-default",
    BG: "bg-rose-600 dark:bg-rose-950",
    TITLE: "text-amber-300 dark:text-yellow-400",
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
    visitLink: "",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative my-5 flex h-svh min-h-[450px] w-full flex-col items-end p-4"
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
    </section>
  );
}

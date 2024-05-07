import CardContainer from "../CardContainer";

export default function Skills() {
  const mainSkills = ["React.Js", "Next.Js", "Tailwindcss", "Typescript"];
  const tools = ["Zustand", "Framer Motion", "GSAP", "GitHub", "ChatGPT"];

  return (
    <article className="mx-auto max-w-[1000px] space-y-5 pt-[50px]">
      <h4 className="text-strong mb-4 text-3xl">Skills</h4>

      <section className="flex gap-10 max-md:flex-col">
        <article className="flex-1 space-y-5 text-2xl">
          <div className="space-y-3">
            <h5 className="font-lemon text-primary/80">Main</h5>

            <div className="text-neutral-700 dark:text-neutral-400">
              <p>
                As a frontend developer, my toolbox is built on top of React.Js.
              </p>

              <p className="max-md:text-lg">
                I am always eager on learning more about my current stack, but
                also open on discovering new interesting web technologies.
              </p>
            </div>
          </div>

          <CardContainer className="px-6 py-4 font-bold ">
            <ul className="space-y-3 text-neutral-500">
              {mainSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </CardContainer>
        </article>

        <article className="flex-1 space-y-5 text-2xl md:mt-[150px]">
          <div className="space-y-3">
            <h5 className="font-lemon text-primary/80">Tools</h5>

            <p className="text-neutral-700 dark:text-neutral-400">
              These are some third-party libraries I often use when I&apos;m
              dealing with global state management, animations, code versioning
              or also problem solving.
            </p>
          </div>

          <CardContainer className="px-6 py-4 font-bold ">
            <ul className="space-y-3 text-neutral-500">
              {tools.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </CardContainer>
        </article>
      </section>
    </article>
  );
}

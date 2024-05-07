export default function Descriptions() {
  const descriptions = [
    "SIMPLE PORTFOLIO",
    "MINIMALIST DESIGN",
    "FLEXIBLE SYSTEM",
  ];

  return (
    <article className="absolute right-0 top-[calc(130px)] w-[35%]">
      <div className="mb-5 h-[7px] w-full bg-primary" />

      <div className="hidden cursor-default space-y-3 lg:inline">
        {descriptions.map((desc) => (
          <p
            key={desc}
            className="pl-3 font-lemon text-3xl text-zinc-400 transition-colors hover:text-zinc-950 dark:text-zinc-600 dark:hover:text-zinc-50"
          >
            {desc}
          </p>
        ))}
      </div>
    </article>
  );
}

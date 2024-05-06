export default function PortfolioLines() {
  return (
    <>
      <article className="absolute left-[15%] top-0 h-full">
        <div className="h-full w-[7px] bg-primary" />
        <h2 className="absolute left-[-8px] top-[calc(50%-160px)] flex h-[50%] min-h-[325px] flex-col justify-evenly bg-background text-4xl 2xl:top-[calc(25%)] ">
          <span>P</span>
          <span>R</span>
          <span className="relative -left-1">O</span>
          <span>J</span>
          <span>E</span>
          <span className="relative -left-1">C</span>
          <span>T</span>
          <span>S</span>
        </h2>
      </article>

      <div className="absolute right-0 top-[calc(50%-3.5px)] z-20 h-[7px] w-[75%] bg-primary" />
    </>
  );
}

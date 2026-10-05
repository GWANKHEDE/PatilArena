import Reveal from "./Reveal";

const technologies = [
  "React",
  "Vite",
  "JavaScript",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "MongoDB",
  "REST APIs",
  "Docker",
  "AWS",
  "Git",
  "GitHub",
  "Vercel",
];

function Technologies() {
  const items = [...technologies, ...technologies];

  return (
    <section className="overflow-hidden bg-white py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="mx-auto text-center">
          <h2 className="text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl bg-gradient-to-r from-[#16813b] to-[#e87522] bg-clip-text text-transparent">
            <span className="text-[#16813b]">Technology </span>That Moves Business Forward
          </h2>
        </Reveal>
      </div>

      <div className="relative mt-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
          {items.map((technology, index) => (
            <div
              key={`${technology}-${index}`}
              className="flex min-w-[150px] items-center justify-center rounded-2xl border border-gray-200 bg-[#fbfdfb] px-6 py-4 text-sm font-bold text-gray-600"
            >
              {technology}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;

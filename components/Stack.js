export const Stack = () => {
  return (
    <section className="mt-20" id="stack">
      <h1 className="font-bold text-h1 leading-{10} border-b-[10px] inline-block border-background-underline">
        Stack
      </h1>
      <div className="flex flex-row flex-wrap justify-between text-neutral-200">
        <div className="flex flex-col text-normal mt-5 pr-4">
          <h2 className="text-h2 font-semibold text-neutral-100">Frontend</h2>
          <p>HTML</p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>React</p>
          <p>Next.js</p>
          <p>Tailwind</p>
        </div>
        <div className="flex flex-col text-normal mt-5 pr-4">
          <h2 className="text-h2 font-semibold text-neutral-100">Backend</h2>
          <p>Express</p>
          <p>Flask</p>
          <p>PostgreSQL</p>
          <p>MongoDB</p>
          <p>Firebase</p>
          <p>Prisma</p>
        </div>
        <div className="flex flex-col text-normal mt-5 ">
          <h2 className="text-h2 font-semibold text-neutral-100">Other</h2>
          <p>Typescript</p>
          <p>AWS</p>
          <p>Linux</p>
          <p>Git</p>
          <p>Figma</p>
        </div>
      </div>
    </section>
  );
};

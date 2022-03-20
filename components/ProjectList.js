import { Project } from "./Project";
import { ProjectData } from "../utils/ProjectData";

export const ProjectList = () => {
  return (
    <section className="mt-20" id="projects">
      <h1 className="font-bold text-h1 leading-{10} border-b-[10px] inline-block border-background-underline">
        Projects
      </h1>
      <div>
        {ProjectData.map((project, index) => {
          return <Project {...project} key={index} />;
        })}
      </div>
    </section>
  );
};

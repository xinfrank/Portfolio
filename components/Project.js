import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { RiExternalLinkLine } from "react-icons/ri";

export const Project = ({
  img_url,
  title,
  desc,
  stack,
  github_link,
  project_link,
}) => {
  return (
    <div className="bg-background-baselight rounded-lg mt-10 shadow-md hover:shadow-violet-700/50 transition-all">
      <div className="w-full relative h-96">
        <Image
          src={img_url}
          layout="fill"
          className="h-52 object-cover rounded-t-lg"
          alt={title}
        />
      </div>
      <div className="px-5 py-5">
        <div className="flex flex-col xs:flex-row w-full">
          <p className="text-normal font-semibold">{title}</p>
          <div className="m-0 xs:ml-auto flex items-center">
            <a
              href={github_link}
              target="_blank"
              rel="noreferrer"
              aria-label="link to Github"
            >
              <BsGithub
                className="mr-5 hover:scale-95"
                fill={"#E5E5E5"}
                size={27}
              />
            </a>
            <a
              href={project_link}
              target="_blank"
              rel="noreferrer"
              aria-label="link to project"
            >
              <RiExternalLinkLine
                className="hover:scale-95"
                fill={"#E5E5E5"}
                size={30}
              />
            </a>
          </div>
        </div>
        <p className="text-small mt-2">{desc}</p>
        <p className="mt-2 text-small">
          <span className="px-2 py-[0.05rem] rounded-sm text-xsmall font-semibold bg-background-stackbase text-background-stacktext">
            STACK
          </span>{" "}
          {stack}
        </p>
      </div>
    </div>
  );
};

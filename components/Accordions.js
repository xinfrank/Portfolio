import { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import Image from "next/image";
import { WorkData } from "../utils/WorkData";

export const Accordions = () => {
  const [accordionToggle, setAccordionToggle] = useState(false);

  const handleToggle = (index) => {
    if (index === accordionToggle) {
      return setAccordionToggle(null);
    }
    setAccordionToggle(index);
  };

  return (
    <div>
      {WorkData.map((work, index) => {
        return (
          <div
            className="w-full py-5 px-5 rounded-md bg-background-baselight mt-6"
            key={index}
          >
            <div
              className="flex items-center cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <div className="xs:block hidden h-[4.5rem] w-[4.5rem]">
                <Image
                  src={work.img_url}
                  className="rounded-md"
                  height={work.img_height}
                  width={work.img_width}
                  alt={work.img_alt}
                />
              </div>
              <div className="xs:ml-6 ml-0 leading-8">
                <h2 className="font-semibold inline text-normal select-none">
                  {work.company}
                </h2>
                <p className="inline text-normal select-none"> {work.role}</p>
                <p className="text-small select-none">{work.date}</p>
              </div>
              {accordionToggle === index ? (
                <GoChevronUp
                  className="ml-auto hover:scale-95"
                  fill={"#7050EE"}
                  size={32}
                />
              ) : (
                <GoChevronDown
                  className="ml-auto hover:scale-95"
                  fill={"#7050EE"}
                  size={32}
                />
              )}
            </div>
            {accordionToggle === index && (
              <ul
                className="text-xsmall xs:text-small xs:pl-[6rem] pl-0 cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                {accordionToggle ||
                  work.efforts.map((effort, index) => (
                    <li className="text-neutral-200" key={index}>
                      {effort}
                    </li>
                  ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};

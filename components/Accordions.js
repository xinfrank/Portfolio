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
            className="w-full py-5 px-5 rounded-md bg-background-baselight mt-6 cursor-pointer"
            key={index}
          >
            <div
              className="flex items-center"
              onClick={() => handleToggle(index)}
            >
              <div className="xs:block hidden">
                <Image
                  src={work.img_url}
                  className="rounded-md"
                  height={work.img_height}
                  width={work.img_width}
                  alt={work.img_alt}
                />
              </div>
              <div className="xs:ml-6 ml-0 leading-8">
                <h2 className="font-semibold inline text-normal">
                  {work.company}
                </h2>
                <p className="inline text-normal"> {work.role}</p>
                <p className="text-small">{work.date}</p>
                {accordionToggle === index ? (
                  <ul className="text-xsmall xs:text-small">
                    {work.efforts.map((effort, index) => (
                      <li className="text-neutral-200" key={index}>
                        {effort}
                      </li>
                    ))}
                  </ul>
                ) : null}
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
          </div>
        );
      })}
    </div>
  );
};

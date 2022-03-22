import { Fragment } from "react";
import { FiMenu } from "react-icons/fi";
import { Menu, Transition } from "@headlessui/react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const DropDown = () => {
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-gray-100 focus:ring-indigo-200">
            <FiMenu fill={"#EEEEEE"} size={32} />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-150"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-3 mt-2 w-52 rounded-md shadow-lg bg-background-base ring-2 ring-white ring-opacity-5 focus:outline-none p-7">
            <div>
              <Menu.Item>
                <AnchorLink
                  offset="88"
                  href="#work"
                  className="sm:hidden block"
                >
                  <p className="text-neutral-50 font-semibold text-2xl">Work</p>
                </AnchorLink>
              </Menu.Item>
              <Menu.Item>
                <AnchorLink
                  offset="88"
                  href="#stack"
                  className="sm:hidden block"
                >
                  <p className="text-neutral-50 font-semibold text-2xl mt-5">
                    Stack
                  </p>
                </AnchorLink>
              </Menu.Item>
              <Menu.Item>
                <AnchorLink
                  offset="88"
                  href="#projects"
                  className="sm:hidden block"
                >
                  <p className="text-neutral-50 font-semibold text-2xl mt-5">
                    Projects
                  </p>
                </AnchorLink>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

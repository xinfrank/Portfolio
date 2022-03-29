import AnchorLink from "react-anchor-link-smooth-scroll";
import { DropDown } from "./DropDown";
export const Navbar = () => {
  return (
    <nav className="flex sticky h-[5.5rem] items-center font-semibold text-2xl z-50 top-0 w-full max-w-4xl m-auto px-5 py-0 bg-background-base">
      <ul className="flex w-full items-center">
        <AnchorLink offset="150" href="#intro" className="cursor-default">
          <li className="mr-12">
            <p className="cursor-pointer">
              <span className="font-mono">{"<"}</span>Frank
              <span className="font-mono">{"/>"}</span>
            </p>
          </li>
        </AnchorLink>
        <AnchorLink
          offset="88"
          href="#work"
          className="hidden sm:block cursor-default"
        >
          <li className="mr-12">
            <p className="cursor-pointer">Work</p>
          </li>
        </AnchorLink>
        <AnchorLink
          offset="88"
          href="#stack"
          className="hidden sm:block cursor-default"
        >
          <li className="mr-12">
            <p className="cursor-pointer">Stack</p>
          </li>
        </AnchorLink>
        <AnchorLink
          offset="88"
          href="#projects"
          className="hidden sm:block cursor-default"
        >
          <li>
            <p className="cursor-pointer">Projects</p>
          </li>
        </AnchorLink>
        <div className="ml-auto relative sm:hidden block">
          <DropDown />
        </div>
      </ul>
    </nav>
  );
};

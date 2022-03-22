import AnchorLink from "react-anchor-link-smooth-scroll";
import { DropDown } from "./DropDown";
export const Navbar = () => {
  return (
    <nav className="flex sticky h-[5.5rem] items-center font-semibold text-2xl z-50 top-0 w-full max-w-4xl m-auto px-5 py-0 bg-background-base">
      <ul className="flex w-full items-center">
        <AnchorLink offset="150" href="#intro">
          <li className="mr-12">
            <p>
              <span className="font-mono">{"<"}</span>Frank
              <span className="font-mono">{"/>"}</span>
            </p>
          </li>
        </AnchorLink>
        <AnchorLink offset="88" href="#work" className="hidden sm:block">
          <li className="mr-12">
            <p>Work</p>
          </li>
        </AnchorLink>
        <AnchorLink offset="88" href="#stack" className="hidden sm:block">
          <li className="mr-12">
            <p>Stack</p>
          </li>
        </AnchorLink>
        <AnchorLink offset="88" href="#projects" className="hidden sm:block">
          <li>
            <p>Projects</p>
          </li>
        </AnchorLink>
        <div className="ml-auto relative sm:hidden block">
          <DropDown />
        </div>
      </ul>
    </nav>
  );
};

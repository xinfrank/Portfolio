import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ClickAwayListener from "react-click-away-listener";

export const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  const handleClickAway = () => {
    setHamburger(false);
  };
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
          <FiMenu
            className="hover:scale-95 cursor-pointer"
            fill={"#EEEEEE"}
            size={32}
            onClick={() => setHamburger(true)}
          />
          {hamburger ? (
            <ClickAwayListener onClickAway={handleClickAway}>
              <ul className="absolute top-0 mt-10 right-0 bg-background-baselight w-48 rounded-md px-5 py-5 border-red-500">
                <AnchorLink
                  offset="88"
                  href="#work"
                  className="sm:hidden block"
                  onClick={() => setHamburger(false)}
                >
                  <li className="mt-2">
                    <p>Work</p>
                  </li>
                </AnchorLink>
                <AnchorLink
                  offset="88"
                  href="#stack"
                  className="sm:hidden block mt-7"
                  onClick={() => setHamburger(false)}
                >
                  <li>
                    <p>Stack</p>
                  </li>
                </AnchorLink>
                <AnchorLink
                  offset="88"
                  href="#projects"
                  className="sm:hidden block mt-7"
                  onClick={() => setHamburger(false)}
                >
                  <li>
                    <p>Projects</p>
                  </li>
                </AnchorLink>
              </ul>
            </ClickAwayListener>
          ) : null}
        </div>
      </ul>
    </nav>
  );
};

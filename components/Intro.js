import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { ImMail4 } from "react-icons/im";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Intro = () => {
  return (
    <section className="mt-16" id="intro">
      <h1 className="text-h1 font-bold">Hi, I am Frank 👋</h1>
      <h2 className="text-neutral-100 font-medium text-h2 mt-1">
        Full-Stack Developer
      </h2>
      <p className="text-neutral-200 text-normal mt-6 ">
        I am a freshman studying computer science at{" "}
        <span className="underline decoration-cyan-500 decoration-3">
          Northwestern University
        </span>
        . I enjoy building web applications that help make people’s lives a bit{" "}
        <span className="underline decoration-teal-500">easier/more fun</span>.
        Outside of programming, I love listening to jazz, watching anime, and
        playing chess.
      </p>
      <div className="flex mt-8">
        <a
          href="https://github.com/xinfrank"
          target="_blank"
          rel="noreferrer"
          aria-label="link to Github"
        >
          <BsGithub
            className="mr-7 hover:scale-95"
            fill={"#E5E5E5"}
            size={32}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/xfrank/"
          target="_blank"
          rel="noreferrer"
          aria-label="link to LinkedIn"
        >
          <BsLinkedin
            className="mr-7 hover:scale-95"
            fill={"#E5E5E5"}
            size={32}
          />
        </a>
        <a
          href={"mailto:frankxin.private@gmail.com"}
          aria-label="button to send e-mail"
        >
          <ImMail4 className="hover:scale-95" fill={"#E5E5E5"} size={33} />
        </a>
      </div>
      <AnchorLink offset="88" href="#projects">
        <button className="w-48 h-16 bg-background-button rounded-md text-xl font-medium mt-8 block">
          My Projects →
        </button>
      </AnchorLink>
    </section>
  );
};

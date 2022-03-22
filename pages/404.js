import Link from "next/link";
import { Layout } from "../components/Layout";
import { WordleBlock } from "../components/WordleBlock";

export default function Home() {
  return (
    <Layout>
      <div className="w-full h-full fixed -z-10 bg-background-base"></div>
      <div className="absolute w-[15rem] xxs:w-[20rem] xs:w-[30rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-h1 font-semibold text-center">
          404 | Page not Found
        </h1>
        <Link href="/" passHref>
          <a className="text-normal text-neutral-100 block text-center mb-2">
            Click here to return to main page
          </a>
        </Link>
        <div className="xxs:grid grid-cols-5 gap-1 w-[21rem] m-auto hidden">
          <WordleBlock letter="A" status="out" />
          <WordleBlock letter="R" status="found" />
          <WordleBlock letter="O" status="in" />
          <WordleBlock letter="S" status="out" />
          <WordleBlock letter="E" status="in" />

          <WordleBlock letter="O" status="in" />
          <WordleBlock letter="R" status="found" />
          <WordleBlock letter="D" status="out" />
          <WordleBlock letter="E" status="in" />
          <WordleBlock letter="R" status="found" />

          <WordleBlock letter="E" status="found" />
          <WordleBlock letter="R" status="found" />
          <WordleBlock letter="R" status="found" />
          <WordleBlock letter="O" status="found" />
          <WordleBlock letter="R" status="found" />
        </div>
      </div>
    </Layout>
  );
}

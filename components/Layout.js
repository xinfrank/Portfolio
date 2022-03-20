import Head from "next/head";

export const Layout = ({ children }) => {
  return (
    <div className="bg-background-base font-Poppins text-neutral-50">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Frank Xin</title>
        <meta
          name="description"
          content="I'm Frank, a student studying computer science at Northwestern University"
        />
        <meta name="og:title" content="Frank Xin" />
        <meta
          property="og:description"
          content="I'm Frank, a student studying computer science at Northwestern University"
        />
        <meta property="og:url" content="https://frankxin.com" />
        <meta property="og:type" content="website" />
      </Head>
      <main>{children}</main>
    </div>
  );
};

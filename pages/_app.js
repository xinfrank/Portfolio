import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="afterInteractive" id="google-analytics-script">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', ${process.env.NEXT_GOOGLE_ANALYTICS});`}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

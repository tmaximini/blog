import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-2BF0B7GYMQ"
        strategy="afterInteractive"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-2BF0B7GYMQ');
        `}
      </Script>

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

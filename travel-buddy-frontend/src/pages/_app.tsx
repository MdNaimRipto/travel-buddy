import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@emotion/react";
import { muiTheme } from "@/configs/muiTheme";
import { SessionProvider } from "next-auth/react";

// ? Styles Import
import "../styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "leaflet/dist/leaflet.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import AuthContext from "@/context/AuthContext";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <Provider store={store}>
      <AuthContext>
        <SessionProvider session={session}>
          <Head>
            <title>Travel-Buddy</title>
            <meta name="description" content="Generated by create next app" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, maximum-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          {/* Body Section */}
          <ThemeProvider theme={muiTheme}>
            {getLayout(<Component {...pageProps} />)}
          </ThemeProvider>
        </SessionProvider>
      </AuthContext>
    </Provider>
  );
}

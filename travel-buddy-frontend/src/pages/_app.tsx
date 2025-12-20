import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { getMeta, SimpleMeta } from "@/metadata/mainMetadata";
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
  meta?: Partial<SimpleMeta>;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page);

  const pageMeta = getMeta(Component.meta ?? {});

  return (
    <Provider store={store}>
      <AuthContext>
        <SessionProvider session={session}>
          <Head>
            <title>{pageMeta.title}</title>
            {pageMeta.description && (
              <meta name="description" content={pageMeta.description} />
            )}
            {pageMeta.keywords && (
              <meta name="keywords" content={pageMeta.keywords.join(", ")} />
            )}
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, maximum-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />

            {/* Open Graph */}
            <meta
              property="og:title"
              content={pageMeta.openGraph?.title ?? String(pageMeta.title)}
            />
            <meta
              property="og:description"
              content={pageMeta.openGraph?.description ?? pageMeta.description}
            />
            {pageMeta.openGraph?.images?.[0]?.url && (
              <meta
                property="og:image"
                content={pageMeta.openGraph?.images?.[0]?.url}
              />
            )}
            <meta
              name="twitter:card"
              content={pageMeta.twitter?.card ?? "summary"}
            />
            {pageMeta.twitter?.creator && (
              <meta name="twitter:creator" content={pageMeta.twitter.creator} />
            )}
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

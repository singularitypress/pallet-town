import { PaletteProvider, ThemeProvider } from "@components/context";
import type { AppProps } from "next/app";

import "../styles/globals.scss";

export default ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <PaletteProvider>
        <Component {...pageProps} />
      </PaletteProvider>
    </ThemeProvider>
  );
};

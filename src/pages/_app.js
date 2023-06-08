import "@/styles/globals.css";
import { GlobalAppProvider } from "@/wrappers/GlobalAppProvider";

export default function NFTPublishingApp({ Component, pageProps }) {
  return (
    <GlobalAppProvider>
      <Component {...pageProps} />
    </GlobalAppProvider>
  );
}

import { ThirdwebProvider } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import config from "../config";

export const ThirdWebProviderWrapperDiv = ({ children }) => {
  // Default Network Based On Enviorement.
  const standardEnvNetwork = config.NETWORK_CHAIN_ID;
  const [currentChainId, setCurrentChainId] = useState(standardEnvNetwork);

  console.log("currentChainId", currentChainId);
  useEffect(() => {
    if (window && window.ethereum) {
      window.ethereum.on("chainChanged", (chain) => {
        console.log("chainChanged", chain);
        setCurrentChainId(parseInt(chain, 16));
      });
    }
  }, []);

  return (
    <ThirdwebProvider activeChain="ethereum"> {children}</ThirdwebProvider>
  );
};

{
  /* <ThirdwebProvider activeChain={currentChainId}>{children}</ThirdwebProvider> */
}

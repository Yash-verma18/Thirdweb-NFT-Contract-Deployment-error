import { DeployEditionContract } from "@/components/DeployEditionContract";

import {
  ChainId,
  useAddress,
  useMetamask,
  ThirdwebSDK,
  useSigner,
} from "@thirdweb-dev/react";

export default function Index() {
  const address = useAddress();

  // the address is getting undefinded

  console.log("chainId", ChainId.Polygon);
  console.log("address", address);

  return (
    <div>
      <h1>This is index</h1>

      {/* 
       everytime the react renders this : its showing this error : 

      src\components\DeployEditionContract\DeployEditionContract.jsx (35:14) @ ThirdwebSDK

       Cannot read properties of undefined (reading 'provider')
       const sdk = ThirdwebSDK.fromSigner(signer, ChainId.Polygon);
  
    */}
      <DeployEditionContract />
    </div>
  );
}

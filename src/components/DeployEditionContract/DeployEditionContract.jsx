import React, { useEffect, useState } from "react";
import { SubHeading, InformationDescription } from "./elements";

import {
  ChainId,
  useAddress,
  useMetamask,
  ThirdwebSDK,
  useSigner,
} from "@thirdweb-dev/react";

import { Button, Grid, useTheme } from "@mui/material";
import { ethers } from "ethers";

export const DeployEditionContract = ({
  editionContractAddress,
  setEditionContractAddress,
}) => {
  const contractImage =
    "https://nft-console-staging-images.s3.ap-south-1.amazonaws.com/images/image-1685782043504-26536956";
  const contractTitle = "Test edition 909";
  const contractDescription = "My awesome edition contract";

  const [loading, setLoading] = useState(false);

  const [connectedStatus, setConnectedStatus] = useState();
  const [isUserSwitchedtoPolygon, setIsUserSwitchedtoPolygon] = useState(true);
  const address = useAddress();
  //   const signer = useSigner();
  //   console.log("chainId", ChainId.Polygon);
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   const signer = provider.getSigner();

  //   const sdk = ThirdwebSDK.fromSigner(signer, ChainId.Polygon);
  //   const connectWithMetamask = useMetamask();

  // console.log('connectWithMetamask', connectWithMetamask);
  //   const switchToPolygonMainnet = async () => {
  //     await window.ethereum.request({
  //       method: "wallet_addEthereumChain",
  //       params: [
  //         {
  //           chainId: "0x89", // 137
  //           rpcUrls: ["https://polygon-rpc.com/"],
  //           chainName: "Polygon Mainnet",
  //           nativeCurrency: {
  //             name: "MATIC",
  //             symbol: "MATIC",
  //             decimals: 18,
  //           },
  //           blockExplorerUrls: ["https://polygonscan.com/"],
  //         },
  //       ],
  //     });
  //   };

  //   async function getSigner() {
  //     // Connect to an Ethereum provider (e.g., MetaMask)
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);

  //     // Request access to the user's accounts
  //     await window.ethereum.enable();

  //     // Get the signer
  //     const signer = provider.getSigner();

  //     return signer;
  //   }

  //   useEffect(() => {
  //     getSigner().then((signer) => {
  //       console.log("signer", signer);
  //     });
  //   }, []);

  //   const deployEditionContract = async () => {
  //     try {
  //       setLoading(true);

  //       const contractSelected = "edition";
  //       const contractAddress = await sdk.deployer.deployBuiltInContract(
  //         contractSelected,
  //         {
  //           name: contractTitle
  //             ? contractTitle
  //             : `Badge Contract :  ${contractSelected}`,
  //           primary_sale_recipient: address,
  //           voting_token_address: address,
  //           description: contractDescription
  //             ? contractDescription
  //             : `My awesome ${contractSelected} contract`,
  //           image: contractImage,
  //           recipients: [
  //             {
  //               address,
  //               sharesBps: 100 * 100,
  //             },
  //           ],
  //         }
  //       );

  //       setEditionContractAddress(contractAddress);
  //       console.log("Contract Deployed  address", contractAddress);
  //       console.log("can add contract address to backend badge model");
  //       setLoading(false);
  //     } catch (error) {
  //       console.log("error ", error);
  //       setLoading(false);
  //       if (error.message && error.message.length < 40) {
  //         console.log("error.message", error.message);
  //       } else {
  //         console.log("Transaction Failed.. try Again");
  //       }
  //     }
  //   };

  //   const connectAndSwitchToPolygon = async () => {
  //     try {
  //       const tempConnection = await connectWithMetamask();
  //       setConnectedStatus(tempConnection);
  //       if (tempConnection?.data?.chain?.id !== 137) {
  //         await switchToPolygonMainnet();
  //         let makingConnection = await connectWithMetamask();
  //         setConnectedStatus(makingConnection);
  //       } else {
  //         console.log("Already connected to Polygon Mainnet ");
  //       }
  //       setIsUserSwitchedtoPolygon(true);
  //     } catch (error) {
  //       console.log("error ", error);
  //       generateSnackbar("Please switch Your network to polygon Mainnet ");
  //     }
  //   };

  return (
    <Grid container mt={5} mb={6}>
      <Grid item lg={2.5} xs={12}>
        <SubHeading>Deploy Contract</SubHeading>
        <InformationDescription mt={2} width={"250px"}>
          Deploy Edition Drop contract for ownership of Badge collection
        </InformationDescription>
      </Grid>

      {/* <Grid item lg={3} xs={12}>
        {!isUserSwitchedtoPolygon && (
          <Button
            onClick={() => {
              connectAndSwitchToPolygon();
            }}
          >
            Setup Metamask
          </Button>
        )}

        {isUserSwitchedtoPolygon && (
          <Button
            disabled={editionContractAddress === null ? false : true}
            onClick={() => {
              deployEditionContract();
            }}
          >
            {editionContractAddress
              ? "Contract Deployed"
              : loading
              ? "...."
              : "Deploy"}
          </Button>
        )}
      </Grid> */}
    </Grid>
  );
};

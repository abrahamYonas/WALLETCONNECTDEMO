import { ethers } from "ethers";
import { evmOut } from "../dataObject";

export const deployContract = async ({ signerInitial }) => {
  const NewContract = new ethers.ContractFactory(
    evmOut.abi,
    evmOut.bytecode,
    signerInitial
  );

  console.log("NewContract", NewContract);
  const factoryContract = await NewContract.deploy(
    [
      "0x09E721e85665Ece972E12A8E3f4Fdc383769e04e",
      "0x856aBe93a48acCE33c750481AB56e6f98652E0E2",
    ],
    2
  ).catch((err) => {
    console.log("err", err);
  });
  console.log("factoryContract", factoryContract);
};

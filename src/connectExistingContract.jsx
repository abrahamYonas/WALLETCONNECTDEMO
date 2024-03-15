import { ethers } from "ethers";

export const connectExistingContract = async (
  contractAddress,
  contractAbi,
  signer
) => {
  const contract = new ethers.Contract(contractAddress, contractAbi, signer);
  //   contract.connect(signer); // allows us to make payable transactions/calls
  console.log("Contract Interface", contract.interface);
  console.log("contract", contract);

  const transferEvent = contract.interface.getEvent("Transfer");
  console.log("transferEvent", transferEvent);
  return contract;
};

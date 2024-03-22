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

  contract.connect(signer); // allows us to make payable transactions/calls
  // const decimals = await contract.decimals();
  // console.log("decimals", decimals);

  const transferFunc = await contract.latestAnswer();
  console.log(transferFunc);

  // contract.addListener("AnswerUpdated", (e) => {
  //   console.log("AnswerUpdated", e);
  // });
  // const transferEvent = contract.interface.getEvent("Transfer");
  // console.log("transferEvent", transferEvent);
  return contract;
};

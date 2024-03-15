import { ethers } from "ethers";
// import { evmOut } from "./dataObject";
export const connectWallet = async () => {
  // read on BrowserProvider its in v6 docs
  const provider1 = new ethers.BrowserProvider(window.ethereum);
  console.log("provider1", provider1);
  console.log("window.ethereum", window.ethereum);
  const signerInitial = await provider1.getSigner();
  console.log("signerInitial", signerInitial);
  return [provider1, signerInitial];
};

// export const deployContract = async () => {
//   // contract factory contractFactory() to create new contract but contract alone contract(address,abi,signer) is to interact with existing contract
//   const NewContract = await ethers.ContractFactory(evmOut.abi, evmOut.bytecode);
//   console.log("NewContract", NewContract);
// };

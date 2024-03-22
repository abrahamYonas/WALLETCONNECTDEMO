import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { connectWallet } from "./ethersServices/ConnectWallet";
import { connectExistingContract } from "./ethersServices/connectExistingContract";
import { deployContract } from "./ethersServices/DeployContract";
import data from "../artifacts/contracts/WEB3ETH.sol/SimpleMultisigWallet.json";

function App() {
  const [providerMain, setProviderMain] = useState("");
  const [signerMain, setsignerMain] = useState("");

  console.log("providerMain", providerMain);
  console.log("signerMain", signerMain);

  // read more on use effect (its expensive interms of performance, so use it wisely)
  useEffect(() => {}, [providerMain]);

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button
          onClick={async () => {
            const [providerInitial, signerInitial] = await connectWallet();

            setProviderMain(providerInitial);
            setsignerMain(signerInitial);
          }}
        >
          Connect Wallet
        </button>
        {providerMain && (
          <button
            onClick={async () => {
              const deployedContract = await deployContract({
                signerInitial: signerMain,
              });
              console.log("deployedContract", deployedContract);
            }}
          >
            Deploy Contract
          </button>
        )}

        <form
          onSubmit={async (e) => {
            console.log({ e });
            e.preventDefault();
            const contractAddress = e.target[0].value;
            console.log("contractAddress", contractAddress);
            console.log("Signer", signerMain.address);
            const connectedExistingContract = await connectExistingContract(
              contractAddress,
              data.abi,
              signerMain
            );
            console.log("connectedExistingContract", connectedExistingContract);
          }}
        >
          <input type='text' placeholder='Enter Contract Address' />
          <button>Connect Existing Contract</button>
        </form>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

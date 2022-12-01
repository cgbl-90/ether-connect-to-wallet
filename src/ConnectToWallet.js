const { ethers } = require("ethers");
const provider = new ethers.providers.Web3Provider(window.ethereum);

export default function ConnectToWallet() {

  async function connectToWallet(event) {
    event.preventDefault();
    await provider.send("eth_requestAccounts", []);
    await provider.getSigner();
  }

  return (
    <main>
      <span>
        <h1>Connect to MetaMask</h1>
        <button onClick={connectToWallet}>CONNECT!</button>
      </span>
    </main>
  );
}

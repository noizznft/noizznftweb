// import './css/style.css';
import './style.css';

import Web3 from 'web3/dist/web3.min.js';

const web3 = new Web3(Web3.givenProvider);
console.log('working');

if(typeof window.ethereum !== 'undefined'){
 
  console.log('install ');
  ethereum.request({ method: 'eth_requestAccounts' });
  ethereum.request({
    method: 'wallet_addEthereumChain',
    params: [{ chainId: '0x38', rpcUrl: 'https://bsc-dataseed.binance.org/' /* ... */ }],
  })
  
}

if (web3.currentProvider.selectedAddress) {
  let address = web3.currentProvider.selectedAddress
  let btn = document.getElementById('connectWallet')
  document.getElementById('walletAddress').innerHTML = address.substr(0,5) + "..." + address.substr(-5) 
  btn.style.display = 'none'
  setTimeout(() => {
    HabdleChain()
  }, 5000)
}

const HabdleChain = async () => {
  const chainId = await ethereum.request({ method: 'eth_chainId' });
  console.log(chainId);
  if (chainId !== '0x38') {
    ethereum.request({ method: 'wallet_switchEthereumChain', params:[{chainId: '0x38'}]}).then(() => window.location.reload())
  }
}


const Buy = async () => {



}

console.log();
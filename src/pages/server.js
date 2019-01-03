import TronWeb from 'tronweb';

import contracts from '../../build/contracts/BinaryOption.json';

// if (!window.tronWeb) {
//   const HttpProvider = TronWeb.providers.HttpProvider;
//   const fullNode = new HttpProvider('http://127.0.0.1:8090');
//   const solidityNode = new HttpProvider('http://127.0.0.1:8091');
//   const eventServer = 'http://127.0.0.1:8092';
//
//   const tronWeb = new TronWeb(
//     fullNode,
//     solidityNode,
//     eventServer,
//   );
//
//   window.tronWeb = tronWeb;
// }

// 获取合约
export function getContractServer(contractAddress) {
  return tronWeb.contract(contracts.abi, contractAddress);
}

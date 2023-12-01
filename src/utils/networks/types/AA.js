import aa from '@/assets/images/networks/aa.svg';

export default {
  name: 'AA',
  name_long: 'Arthera',
  homePage: 'https://arthera.net/',
  blockExplorer: 'Blockscout',
  blockExplorerTX: 'https://explorer-test.arthera.net/tx/[[txHash]]',
  blockExplorerAddr: 'https://explorer-test.arthera.net/address/[[address]]',
  chainID: 10243,
  tokens: import('@/_generated/tokens/tokens-eth.json').then(
    val => val.default
  ),
  contracts: import('@/_generated/contracts/contract-abi-eth.json').then(
    val => val.default
  ),
  icon: aa,
  currencyName: 'AA',
  isTestNetwork: true,
  isEthVMSupported: {
    supported: false,
    url: null,
    blockExplorerTX: '',
    blockExplorerAddr: '',
    websocket: null
  },
  coingeckoID: null,
  gasPriceMultiplier: 1,
  balanceApi: ''
};

require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0x0405c0585099bc72bbedfaf9b6a225fa12ff77d4feb89bd8f9a0398a52ae7974"], //Your private key starting with "0x"
    },
  },
};
require("@nomicfoundation/hardhat-toolbox");
 
module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0x"], //Your private key starting with "0x"
    },
  },
};

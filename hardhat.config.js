/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle")
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()
const projectId = "129f803899a44eb0ab40f0dc09c1463f"


module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    
    mainnet: {
      url: 'https://mainnet.infura.io/v3/${projectId}',
      accounts:[privateKey]
    }
    
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}

//here I've configured the local Hardhat development environment as well as the Mumbai testnet. 

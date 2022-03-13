/* hardhat.config.js */
//here I've configured the local Hardhat development environment as well as the Mainnet testnet.
//If it shows any error try commenting the mainnet code block
//make sure you create your account on https://www.infura.io, create new project > choose the testnetwork> copy the project ID and paste it in this .js file on line 5, const projectId
//Regarding the private key (.secret file), the key cannot be exposed anywhere, so create your Metamask account, by which you'll interacting with and Export your private key by creating a .secret file on your machine.

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



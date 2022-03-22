# NFTgram - Building, deploying and testing out a full stack NFT marketplace on localhost 

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```


An example of testing your smart contract on localhost
![image](https://user-images.githubusercontent.com/84630655/158043414-a08a2df3-c9f4-4fba-89e1-fb927cf44749.png)

- Basically, for working with Polygon, you need to decide if you wanna interact with (Public Nodes) Public RC Endpoints or Private RPC endpoint. We chose a Private Node
- Then, you can best look up for Polygon Networks, then look for Developer Docs > Polygon Proof of Stake Chain > Network Details > Networks 
- Have the configuration for Mainnet in hardhat.config.js
- We chose Infura as it is a provider of these node endpoints. Chose Ethereum option > Then Created a project > set the Mainnet as our Endpoint > Configured the network with our local  network Hardhat
- in the SMART CONTRACT we inherited from the ERC721 Standard (EIP:721 – Non-Fungible Token Standard)

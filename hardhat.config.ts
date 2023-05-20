import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const ALCHEMY_API_KEY = "voCsrgwJ1cjx1iQTYUowJgcyYPxuwamU";
const PRIVATE_KEY = "fb7b24c764cd9713c25173e8dee0f16ac6293e3b07431775eb377fa12acfc096";
const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/voCsrgwJ1cjx1iQTYUowJgcyYPxuwamU",
      accounts: [PRIVATE_KEY],
    }
  }
};

export default config;

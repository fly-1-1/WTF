// import { ethers } from "ethers";
// const provider = ethers.getDefaultProvider();
// const main = async () => {
//     const balance = await provider.getBalance(`vitalik.eth`);
//     console.log(`ETH Balance of vitalik: ${ethers.formatEther(balance)} ETH`);
// }
// main()

// 导入ethers包
import { ethers } from "ethers";
// playcode免费版不能安装ethers，用这条命令，需要从网络上import包（把上面这行注释掉）
// import { ethers } from "https://cdn-cors.ethers.io/lib/ethers-5.6.9.esm.min.js";

// 利用公共rpc节点连接以太坊网络
// 可以在 https://chainlist.org 上找到
const ALCHEMY_MAINNET_URL = 'https://ethereum-rpc.publicnode.com';
const ALCHEMY_SEPOLIA_URL = 'https://rpc.polygon-blackberry.gelato.digital';
// 连接以太坊主网
const providerETH = new ethers.JsonRpcProvider(ALCHEMY_MAINNET_URL)
// 连接Sepolia测试网
const providerSepolia = new ethers.JsonRpcProvider(ALCHEMY_SEPOLIA_URL)


const main = async () => {
        // 1. 查询vitalik在主网和Sepolia测试网的ETH余额
        console.log("1. 查询vitalik在主网和Sepolia测试网的ETH余额");
        const balance = await providerETH.getBalance(`vitalik.eth`);
        const balanceSepolia = await providerSepolia.getBalance(`0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045`);
        // 将余额输出在console（主网）
        console.log(`ETH Balance of vitalik: ${ethers.formatEther(balance)} ETH`);
        // 输出Sepolia测试网ETH余额
        console.log(`Sepolia ETH Balance of vitalik: ${ethers.formatEther(balanceSepolia)} ETH`);
}

main()
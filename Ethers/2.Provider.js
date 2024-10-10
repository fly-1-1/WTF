// 导入ethers包
import { ethers, MaxInt256 } from "ethers";

const ALCHEMY_MAINNET_URL = 'https://mainnet.infura.io/v3/0d468ae3788d4b78a511016a855a4cf7';
const ALCHEMY_SEPOLIA_URL = 'https://polygon-amoy.infura.io/v3/0d468ae3788d4b78a511016a855a4cf7';
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

    //查询provider连接到了哪一条链
    console.log("\n2. 查询provider连接到了哪一条链")
    const network = await providerETH.getNetwork();
    console.log(network.toJSON())

    //查看当前其区块高度
    console.log("区块高度")
    const blockNumber = await providerETH.getBlockNumber();
    console.log(blockNumber)

    //查看当前钱包交易历史次数
    console.log("当前钱包交易历史次数")
    const txcount = await providerETH.getTransactionCount("vitalik.eth")
    console.log(txcount)
    // 5. 查询当前建议的gas设置
    console.log("\n5. 查询当前建议的gas设置")
    const feeData = await providerETH.getFeeData();
    console.log(feeData);

    // 6. 查询区块信息
    console.log("\n6. 查询区块信息")
    const block = await providerETH.getBlock(0);
    console.log(block);

    // 7. 给定合约地址查询合约bytecode，例子用的WETH地址
    console.log("\n7. 给定合约地址查询合约bytecode，例子用的WETH地址")
    const code = await providerETH.getCode("0xc778417e063141139fce010982780140aa0cd5ab");
    console.log(code);
}

main()
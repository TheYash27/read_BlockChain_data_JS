const ethers = require('ethers');
const provider = new ethers.JsonRpcProvider('https://mainnet.infura.io/v3/f0d9f89def0a4f06b8862c2c37daf102');

const usdcAbi = [
    `function balanceOf(address) view returns (uint)`,
    `function decimals() view returns (uint)`
];
const usdcAddress = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';
const usdc = new ethers.Contract(usdcAddress, usdcAbi, provider);

async function init() {
    const balance = await usdc.balanceOf('0x880D559280A8De24C6F19FBA1569B8e572Ff5BA5');
    const decimals = await usdc.decimals();
    const formattedBalance = ethers.formatUnits(balance, decimals);
    console.log(balance); 
}

init();
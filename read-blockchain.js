const ethers = require('ethers');
const provider = new ethers.JsonRpcProvider('https://mainnet.infura.io/v3/f0d9f89def0a4f06b8862c2c37daf102');

async function init() {
    const blockNumber = await provider.getBlockNumber();
    console.log(blockNumber);
}

init();
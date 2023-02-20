const ethers = require('ethers');
const provider = new ethers.JsonRpcProvider('https://mainnet.infura.io/v3/f0d9f89def0a4f06b8862c2c37daf102');

async function init() {
    const balance = await provider.getBalance('0x880d559280a8de24c6f19fba1569b8e572ff5ba5');
    const formattedBalance = ethers.formatEther(balance);
    console.log(formattedBalance);
}

init();
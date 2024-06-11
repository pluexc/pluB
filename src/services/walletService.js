const Web3 = require('web3');
const contractAddress = '0x762BC6278C7a12A1dfeE29fd0d301Ae7c21e8c75';
const abi = [ /* ABI from the deployed contract */ ];

const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID'));
const contract = new web3.eth.Contract(abi, contractAddress);

module.exports = {
    getBalance: async (address) => {
        return await contract.methods.balanceOf(address).call();
    },
    transfer: async (from, to, amount, privateKey) => {
        const tx = {
            to: contractAddress,
            data: contract.methods.transfer(to, amount).encodeABI(),
            gas: 2000000,
        };
        const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
        return await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    },
};

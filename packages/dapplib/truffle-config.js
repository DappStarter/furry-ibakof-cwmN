require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid process orient venture story raise mad hospital great light army gas'; 
let testAccounts = [
"0x44bd63de8a2b44a06a071e3b11499a810cdf5d8041abd29a71bc19e8b509481e",
"0x466b57bc2e510adce994582d7697c71fa797b9aa5b0542144571f94f90afc59c",
"0x2c0c6d1044627231178379c764d1737150b20b77506422a47195a5730fbfdaa7",
"0x14493566cba15a7b51feef70c67c33daff72bd3e44242892e05b5db4f178f63c",
"0x48632e05cf0ae6e55113da8a02c77e1c270a78a610edf9a4c4f188c15987ec4d",
"0x9d17706630d0f7064ff1d502144edc6f1be08a4ec7da4555b799a464829dbf15",
"0x4361614a81d4907cf2f3b7b353df9c648f41d521d33639b1bcc10a5e626fff42",
"0x1837020b7c0f889b15238d81d59bc97aa3a8381dc72fa00c26b939fd2309d956",
"0x4c7b720051a38b24407acbb9d5b0405caa48ce93a200ccba7ed4b5f6c23330c8",
"0x28cdf05bc698728aa7b370b2ec701e263a50149e5c212376646376f43cb96c3d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


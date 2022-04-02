require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney entire bright venture stool crawl pulse prosper gesture hat army gesture'; 
let testAccounts = [
"0x6b93234de97bac9164ddbc2cf0c5bb722dd31b2883025e1d37d09617c3d49353",
"0x985a3a78cec2c9cd9ac076de7e84eed43466d1734dbacee4a81df73293284f51",
"0x7eed19328b3d0102c2328507bb7508665615db26c24fdd27c716cac7ab358861",
"0xe82cd2010417b7bb05ca3d3c0a5fbdf126b6771ed218b14162f837c71ec6f6a0",
"0x41ef5c309b7db1d7986960014791b20dfab4787ab90ab2179fce4285cc83e531",
"0xbf3db0664f8e4d2f3ee7f5d264bed17bce6dd5f6ce3640638ed83a5ae47229af",
"0x45eaefab1213ba643749af5dfe39cf3d64b9d50d388b19a6cd54e9e7581bcce4",
"0x9b4b185e93261139833db998bfedcb6e31678a6e4adec0bd7fc8217fa2a196b0",
"0x3c030bda47611806f31299c2f2d99090be1847bd7a18fff1b3ebe483549fc70c",
"0x306bca5d98b1d3cd30f147d75084a025d276ebd2c4c5e4bc2660ba915caaf49f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


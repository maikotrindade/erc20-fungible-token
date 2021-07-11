const HDWalletProvider = require('@truffle/hdwallet-provider')
require('dotenv').config()

const mnemonic = process.env.MNEMONIC
const infuraURL = process.env.RPC_URL

module.exports = {
    networks: {
        ganache: {
            host: '127.0.0.1',
            port: 7545,
            network_id: '*',
        },
        rinkeby: {
            provider: () =>
                new HDWalletProvider({
                    mnemonic: {
                        phrase: mnemonic
                    },
                    providerOrUrl: infuraURL,
                    numberOfAddresses: 1,
                    shareNonce: true,
                }),
            network_id: '4',
            networkCheckTimeout: 10000000,
            // skipDryRun: - true if you don't want to test run the migration locally before the actual migration (default is false)
            // skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '0.8.0',
        },
    },
}

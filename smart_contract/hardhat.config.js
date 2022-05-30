// https://eth-ropsten.alchemyapi.io/v2/J9JuQXucbcy9SdWyrAuzANH03eIN_6mo

require('@nomiclabs/hardhat-waffle');
require("@nomiclabs/hardhat-etherscan");

module.exports = {
    solidity: '0.8.0',
    networks: {
        ropsten: {
            url: 'https://eth-ropsten.alchemyapi.io/v2/J9JuQXucbcy9SdWyrAuzANH03eIN_6mo',
            accounts: ['2ec8ad788fa030992852d654d94e62aef7784bee46a01ae84c856fe0b0a2f7a6']
        },
        etherscan: {
            apikey: "BK8QY9JM4BWEI1NTB7TQ25MEZXT7VSZDBW"
        }
    }
};
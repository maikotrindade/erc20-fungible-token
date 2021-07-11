const MaikosoftToken = artifacts.require("MaikosoftToken")

module.exports = async function (deployer, network, accounts) {
    await deployer.deploy(MaikosoftToken)
    const maikosoftToken = await MaikosoftToken.deployed()
}

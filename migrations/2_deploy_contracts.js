const ERC20Mock = artifacts.require("ERC20Mock");
const InsurancePool = artifacts.require("InsurancePOC");

module.exports = async function (deployer, network, accounts) {
    let rewardsToken = {
        name: 'Rewards Token',
        symbol: 'RTKN',
        initialOwner: accounts[0],
        initialBalance: 0
    };

    let stakingToken = {
        name: 'Staking Token',
        symbol: 'STKN',
        initialOwner: accounts[0],
        initialBalance: 0
    };

    await deployer.deploy(
        ERC20Mock, rewardsToken.name, 
        rewardsToken.symbol, rewardsToken.initialOwner, 
        rewardsToken.initialBalance
    );

    let rToken = await ERC20Mock.deployed();

    await deployer.deploy(
        ERC20Mock, stakingToken.name, 
        stakingToken.symbol, stakingToken.initialOwner, 
        stakingToken.initialBalance
    );
    
    let sToken = await ERC20Mock.deployed();

    console.log('rewards token:', rToken.address);
    console.log('staking token:', sToken.address);

    await deployer.deploy(
        InsurancePool, rToken.address, 
        sToken.address
    );
};

# Insurance smart contract PoC

The repository hold smart contract proof of concept for decentralised insurance. 

The idea is that we have a staking / insurance pool smart contract where underwriters deposit WBTC for example. We can also collect and distribute insurance premiums paid periodically by potential patients to the underwriters via this smart contract as an incentive with the staked / locked WBTC from the underwriters, we can then deposit this into other decentralised finance protocols, e.g., Idle Finance or Compound to earn yield which will also be distributed amongst the underwriters and to hospitals for medical claims / cover some of the locked WBTC will also be used for medical claims / cover

Incoming funds will be staked tokens from underwriters and profit earned from defi protocols offering yield/APY as well as periodic insurance premiums paid by potential patients, part of which will be distributed as incentive to underwriters outgoing funds will be medical claims to hospitals which could be a fraction of the yield/bonus/interest from other defi protocols and/or the staked tokens from underwriters who will be incentivised for bearing some risk.

A sample architecture diagram can be seen [here](docs/Decentralized_Insurance_Model_WiiQare.pdf). 


## Dependencies

* ganache-cli


## Smart contracts setup

Start ganache - `ganache-cli`

In another terminal window, run the following commands: 

Install dependencies - `npm i`

Compile the smart contracts - `truffle compile`

Deploy the smart contracts on the local network - `truffle deploy`
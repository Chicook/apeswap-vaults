const deployment = {
    KeeperMaximizerOutput: {
        adminAddress: '0xE375D169F8f7bC18a544a6e5e546e63AD7511581',
        masterApeAddress: '0xbbC5e1cD3BA8ED639b00927115e5f0e0040aA613',
        keeperOutput: {
            keeperMaximizerVaultApeAddress: '0x29436C9fd14d9692012262Be4917712D4097D4B3',
            keeperMaximizerOwner: '0xE375D169F8f7bC18a544a6e5e546e63AD7511581'
        },
        bananaVaultOutput: {
            bananaVaultAddress: '0x3Eb4975608cF132a3E9E985c80a8B2945CC5fEEd',
            MaximizerHasManagerRole: true,
            adminHasAdminRole: true,
            adminHasManagerRole: true,
            tempAdminHasAdminRole: false,
            tempAdminHasManagerRole: false
        },
        MaximizerSettings: {
            treasury: '0x033996008355D0BE4E022c00f06F844547e23dcF',
            keeperFee: 50,
            platform: '0x033996008355D0BE4E022c00f06F844547e23dcF',
            platformFee: 0,
            buyBackRate: 0,
            withdrawFee: 10,
            withdrawFeePeriod: '57896044618658097711785492504343953926634992332820282019728792003956564819968',
            withdrawRewardsFee: 0,
            minKeeperFee: undefined
        },
        withdrawFeePeriod: '57896044618658097711785492504343953926634992332820282019728792003956564819968',
        strategyOutput: [
            {
                strategyMaximizerMasterApe: '0x051B19be38fe8b100cdB3463c8827089cA89e4F9',
                farmPid: 7,
                farmStakeTokenAddress: '0x30E74ceFD298990880758E20223f03129F52E699',
                isBananaStaking: false
            },
            {
                strategyMaximizerMasterApe: '0x44c58E8655A7759CD82180a14f423B464BA691AB',
                farmPid: 8,
                farmStakeTokenAddress: '0x4419D815c9c9329f9679782e76ec15bCe1B14a6D',
                isBananaStaking: false
            }
        ]
    }
}

const parsedDeployment = {
    ParsedKeeperMaximizerOutput: {
        adminAddress: {
            address: '0xE375D169F8f7bC18a544a6e5e546e63AD7511581',
            explorer: 'https://testnet.bscscan.com/address/0xE375D169F8f7bC18a544a6e5e546e63AD7511581'
        },
        masterApeAddress: {
            address: '0xbbC5e1cD3BA8ED639b00927115e5f0e0040aA613',
            explorer: 'https://testnet.bscscan.com/address/0xbbC5e1cD3BA8ED639b00927115e5f0e0040aA613'
        },
        keeperOutput: {
            keeperMaximizerVaultApeAddress: {
                address: '0x29436C9fd14d9692012262Be4917712D4097D4B3',
                explorer: 'https://testnet.bscscan.com/address/0x29436C9fd14d9692012262Be4917712D4097D4B3'
            },
            keeperMaximizerOwner: {
                address: '0xE375D169F8f7bC18a544a6e5e546e63AD7511581',
                explorer: 'https://testnet.bscscan.com/address/0xE375D169F8f7bC18a544a6e5e546e63AD7511581'
            }
        },
        bananaVaultOutput: {
            bananaVaultAddress: {
                address: '0x3Eb4975608cF132a3E9E985c80a8B2945CC5fEEd',
                explorer: 'https://testnet.bscscan.com/address/0x3Eb4975608cF132a3E9E985c80a8B2945CC5fEEd'
            },
            MaximizerHasManagerRole: true,
            adminHasAdminRole: true,
            adminHasManagerRole: true,
            tempAdminHasAdminRole: false,
            tempAdminHasManagerRole: false
        },
        MaximizerSettings: {
            treasury: {
                address: '0x033996008355D0BE4E022c00f06F844547e23dcF',
                explorer: 'https://testnet.bscscan.com/address/0x033996008355D0BE4E022c00f06F844547e23dcF'
            },
            keeperFee: 50,
            platform: {
                address: '0x033996008355D0BE4E022c00f06F844547e23dcF',
                explorer: 'https://testnet.bscscan.com/address/0x033996008355D0BE4E022c00f06F844547e23dcF'
            },
            platformFee: 0,
            buyBackRate: 0,
            withdrawFee: 10,
            withdrawFeePeriod: '57896044618658097711785492504343953926634992332820282019728792003956564819968',
            withdrawRewardsFee: 0
        },
        withdrawFeePeriod: '57896044618658097711785492504343953926634992332820282019728792003956564819968',
        strategyOutput: [
            {
                strategyMaximizerMasterApe: {
                    address: '0x051B19be38fe8b100cdB3463c8827089cA89e4F9',
                    explorer: 'https://testnet.bscscan.com/address/0x051B19be38fe8b100cdB3463c8827089cA89e4F9'
                },
                farmPid: 7,
                farmStakeTokenAddress: {
                    address: '0x30E74ceFD298990880758E20223f03129F52E699',
                    explorer: 'https://testnet.bscscan.com/address/0x30E74ceFD298990880758E20223f03129F52E699'
                },
                isBananaStaking: false
            },
            {
                strategyMaximizerMasterApe: {
                    address: '0x44c58E8655A7759CD82180a14f423B464BA691AB',
                    explorer: 'https://testnet.bscscan.com/address/0x44c58E8655A7759CD82180a14f423B464BA691AB'
                },
                farmPid: 8,
                farmStakeTokenAddress: {
                    address: '0x4419D815c9c9329f9679782e76ec15bCe1B14a6D',
                    explorer: 'https://testnet.bscscan.com/address/0x4419D815c9c9329f9679782e76ec15bCe1B14a6D'
                },
                isBananaStaking: false
            }
        ]
    }
}

module.exports = { deployment, parsedDeployment };

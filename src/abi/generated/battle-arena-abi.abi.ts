export const ABI_JSON = [
    {
        "type": "constructor",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_zoo"
            },
            {
                "type": "address",
                "name": "_dai"
            },
            {
                "type": "address",
                "name": "_vault"
            },
            {
                "type": "address",
                "name": "_zooGovernance"
            },
            {
                "type": "address",
                "name": "_treasuryPool"
            },
            {
                "type": "address",
                "name": "_gasFeePool"
            },
            {
                "type": "address",
                "name": "_teamAddress"
            },
            {
                "type": "address",
                "name": "_nftStakingPosition"
            },
            {
                "type": "address",
                "name": "_nftVotingPosition"
            },
            {
                "type": "address",
                "name": "_veZoo"
            },
            {
                "type": "address",
                "name": "_controller"
            },
            {
                "type": "address",
                "name": "_well"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AddedDaiToVoting",
        "inputs": [
            {
                "type": "uint256",
                "name": "currentEpoch",
                "indexed": true
            },
            {
                "type": "address",
                "name": "voter",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "stakingPositionId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "votingPositionId",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "votes",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AddedZooToVoting",
        "inputs": [
            {
                "type": "uint256",
                "name": "currentEpoch",
                "indexed": true
            },
            {
                "type": "address",
                "name": "voter",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "stakingPositionId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "votingPositionId",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "votes",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ChosenWinner",
        "inputs": [
            {
                "type": "uint256",
                "name": "currentEpoch",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "fighter1",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "fighter2",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "winner",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "pairIndex",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "playedPairsAmount",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ClaimedRewardFromStaking",
        "inputs": [
            {
                "type": "uint256",
                "name": "currentEpoch",
                "indexed": true
            },
            {
                "type": "address",
                "name": "staker",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "stakingPositionId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "beneficiary",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "yTokenReward",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "daiReward",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ClaimedRewardFromVoting",
        "inputs": [
            {
                "type": "uint256",
                "name": "currentEpoch",
                "indexed": true
            },
            {
                "type": "address",
                "name": "voter",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "stakingPositionId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "beneficiary",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "daiReward",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "votingPositionId",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "CreatedStakerPosition",
        "inputs": [
            {
                "type": "uint256",
                "name": "currentEpoch",
                "indexed": true
            },
            {
                "type": "address",
                "name": "staker",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "stakingPositionId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "CreatedVotingPosition",
        "inputs": [
            {
                "type": "uint256",
                "name": "currentEpoch",
                "indexed": true
            },
            {
                "type": "address",
                "name": "voter",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "stakingPositionId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "daiAmount",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "votes",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "votingPositionId",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "EpochUpdated",
        "inputs": [
            {
                "type": "uint256",
                "name": "date",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "newEpoch",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "LiquidatedVotingPosition",
        "inputs": [
            {
                "type": "uint256",
                "name": "currentEpoch",
                "indexed": true
            },
            {
                "type": "address",
                "name": "voter",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "stakingPositionId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "beneficiary",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "votingPositionId",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "zooReturned",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "daiReceived",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "PairedNft",
        "inputs": [
            {
                "type": "uint256",
                "name": "currentEpoch",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "fighter1",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "fighter2",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "pairIndex",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RecomputedDaiVotes",
        "inputs": [
            {
                "type": "uint256",
                "name": "currentEpoch",
                "indexed": true
            },
            {
                "type": "address",
                "name": "voter",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "stakingPositionId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "votingPositionId",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "newVotes",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "oldVotes",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RecomputedZooVotes",
        "inputs": [
            {
                "type": "uint256",
                "name": "currentEpoch",
                "indexed": true
            },
            {
                "type": "address",
                "name": "voter",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "stakingPositionId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "votingPositionId",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "newVotes",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "oldVotes",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RemovedStakerPosition",
        "inputs": [
            {
                "type": "uint256",
                "name": "currentEpoch",
                "indexed": true
            },
            {
                "type": "address",
                "name": "staker",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "stakingPositionId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "WithdrawedDaiFromVoting",
        "inputs": [
            {
                "type": "uint256",
                "name": "currentEpoch",
                "indexed": true
            },
            {
                "type": "address",
                "name": "voter",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "stakingPositionId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "beneficiary",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "votingPositionId",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "daiNumber",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "WithdrawedZooFromVoting",
        "inputs": [
            {
                "type": "uint256",
                "name": "currentEpoch",
                "indexed": true
            },
            {
                "type": "address",
                "name": "voter",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "stakingPositionId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "votingPositionId",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "zooNumber",
                "indexed": false
            },
            {
                "type": "address",
                "name": "beneficiary",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "_createVotingPosition",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "stakingPositionId"
            },
            {
                "type": "address",
                "name": "voter"
            },
            {
                "type": "uint256",
                "name": "yTokens"
            },
            {
                "type": "uint256",
                "name": "amount"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "votes"
            },
            {
                "type": "uint256",
                "name": "votingPositionId"
            }
        ]
    },
    {
        "type": "function",
        "name": "activeStakerPositions",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "addDaiToVoting",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "votingPositionId"
            },
            {
                "type": "address",
                "name": "voter"
            },
            {
                "type": "uint256",
                "name": "amount"
            },
            {
                "type": "uint256",
                "name": "_yTokens"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "votes"
            }
        ]
    },
    {
        "type": "function",
        "name": "addZooToVoting",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "votingPositionId"
            },
            {
                "type": "address",
                "name": "voter"
            },
            {
                "type": "uint256",
                "name": "amount"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "votes"
            }
        ]
    },
    {
        "type": "function",
        "name": "baseStakerReward",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "baseVoterReward",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "calculateIncentiveRewardForStaker",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "stakingPositionId"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "reward"
            }
        ]
    },
    {
        "type": "function",
        "name": "calculateIncentiveRewardForVoter",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "votingPositionId"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "reward"
            }
        ]
    },
    {
        "type": "function",
        "name": "chooseWinnerInPair",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "pairIndex"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "claimRewardFromStaking",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "stakingPositionId"
            },
            {
                "type": "address",
                "name": "staker"
            },
            {
                "type": "address",
                "name": "beneficiary"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "daiReward"
            }
        ]
    },
    {
        "type": "function",
        "name": "claimRewardFromVoting",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "votingPositionId"
            },
            {
                "type": "address",
                "name": "voter"
            },
            {
                "type": "address",
                "name": "beneficiary"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "daiReward"
            }
        ]
    },
    {
        "type": "function",
        "name": "computeLastEpoch",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "votingPositionId"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "lastEpochNumber"
            }
        ]
    },
    {
        "type": "function",
        "name": "createStakerPosition",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "staker"
            },
            {
                "type": "address",
                "name": "token"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "createVotingPosition",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "stakingPositionId"
            },
            {
                "type": "address",
                "name": "voter"
            },
            {
                "type": "uint256",
                "name": "amount"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "votes"
            },
            {
                "type": "uint256",
                "name": "votingPositionId"
            }
        ]
    },
    {
        "type": "function",
        "name": "currentEpoch",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "dai",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "epochDuration",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "epochStartDate",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "epochsStarts",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "fifthStageDuration",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "firstStageDuration",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "fourthStageDuration",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "gasPool",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "getCurrentStage",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint8"
            }
        ]
    },
    {
        "type": "function",
        "name": "getNftPairLength",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "epoch"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "length"
            }
        ]
    },
    {
        "type": "function",
        "name": "getPendingStakerReward",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "stakingPositionId"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "stakerReward"
            },
            {
                "type": "uint256",
                "name": "end"
            }
        ]
    },
    {
        "type": "function",
        "name": "getPendingVoterReward",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "votingPositionId"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "yTokens"
            },
            {
                "type": "uint256",
                "name": "wells"
            },
            {
                "type": "uint256",
                "name": "glmr"
            }
        ]
    },
    {
        "type": "function",
        "name": "getStakerPositionsLength",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "amount"
            }
        ]
    },
    {
        "type": "function",
        "name": "glmrClaimedByEpoch",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "init",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_xZoo"
            },
            {
                "type": "address",
                "name": "_jackpotA"
            },
            {
                "type": "address",
                "name": "_jackpotB"
            },
            {
                "type": "address",
                "name": "_wglmr"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "jackpotA",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "jackpotB",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "jackpotRewardsAtEpoch",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "lastUpdatesOfStakedNumbers",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "nftStakingPosition",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "nftVotingPosition",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "nftsInGame",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "numberOfNftsWithNonZeroVotes",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "numberOfPlayedPairsInEpoch",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "numberOfStakedNftsInCollection",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256"
            },
            {
                "type": "address"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "numberOfStakingPositions",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "numberOfVotingPositions",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "pairNft",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "stakingPositionId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "pairsInEpoch",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256"
            },
            {
                "type": "uint256"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "token1"
            },
            {
                "type": "uint256",
                "name": "token2"
            },
            {
                "type": "bool",
                "name": "playedInEpoch"
            },
            {
                "type": "bool",
                "name": "win"
            }
        ]
    },
    {
        "type": "function",
        "name": "recomputeDaiVotes",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "votingPositionId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "recomputeZooVotes",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "votingPositionId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "removeStakerPosition",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "stakingPositionId"
            },
            {
                "type": "address",
                "name": "staker"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "requestRandom",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "rewardsForEpoch",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256"
            },
            {
                "type": "uint256"
            }
        ],
        "outputs": [
            {
                "type": "int256",
                "name": "yTokensSaldo"
            },
            {
                "type": "uint256",
                "name": "votes"
            },
            {
                "type": "uint256",
                "name": "yTokens"
            },
            {
                "type": "uint256",
                "name": "tokensAtBattleStart"
            },
            {
                "type": "uint256",
                "name": "pricePerShareAtBattleStart"
            },
            {
                "type": "uint256",
                "name": "pricePerShareCoef"
            }
        ]
    },
    {
        "type": "function",
        "name": "secondStageDuration",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "sharesToTokens",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "sharesAmount"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "tokens"
            }
        ]
    },
    {
        "type": "function",
        "name": "stakingPositionsValues",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "startEpoch"
            },
            {
                "type": "uint256",
                "name": "endEpoch"
            },
            {
                "type": "uint256",
                "name": "lastRewardedEpoch"
            },
            {
                "type": "uint256",
                "name": "lastUpdateEpoch"
            },
            {
                "type": "address",
                "name": "collection"
            },
            {
                "type": "uint256",
                "name": "lastEpochOfIncentiveReward"
            }
        ]
    },
    {
        "type": "function",
        "name": "team",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "thirdStageDuration",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "tokenController",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "tokensToShares",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokens"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "shares"
            }
        ]
    },
    {
        "type": "function",
        "name": "treasury",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "updateEpoch",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updateInfo",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "stakingPositionId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updateInfoAboutStakedNumber",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "collection"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "vault",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "veZoo",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "votingPositionsValues",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "stakingPositionId"
            },
            {
                "type": "uint256",
                "name": "daiInvested"
            },
            {
                "type": "uint256",
                "name": "yTokensNumber"
            },
            {
                "type": "uint256",
                "name": "zooInvested"
            },
            {
                "type": "uint256",
                "name": "daiVotes"
            },
            {
                "type": "uint256",
                "name": "votes"
            },
            {
                "type": "uint256",
                "name": "startEpoch"
            },
            {
                "type": "uint256",
                "name": "endEpoch"
            },
            {
                "type": "uint256",
                "name": "lastRewardedEpoch"
            },
            {
                "type": "uint256",
                "name": "lastEpochYTokensWereDeductedForRewards"
            },
            {
                "type": "uint256",
                "name": "yTokensRewardDebt"
            },
            {
                "type": "uint256",
                "name": "lastEpochOfIncentiveReward"
            }
        ]
    },
    {
        "type": "function",
        "name": "wGlmr",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "well",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "wellClaimedByEpoch",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "withdrawDaiFromVoting",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "votingPositionId"
            },
            {
                "type": "address",
                "name": "voter"
            },
            {
                "type": "address",
                "name": "beneficiary"
            },
            {
                "type": "uint256",
                "name": "daiNumber"
            },
            {
                "type": "bool",
                "name": "toSwap"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "withdrawZooFromVoting",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "votingPositionId"
            },
            {
                "type": "address",
                "name": "voter"
            },
            {
                "type": "uint256",
                "name": "zooNumber"
            },
            {
                "type": "address",
                "name": "beneficiary"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "xZoo",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "xZooRewards",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "zoo",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "zooFunctions",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "zooGovernance",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    }
]

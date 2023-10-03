export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "_name"
            },
            {
                "type": "string",
                "name": "_symbol"
            },
            {
                "type": "address",
                "name": "_dai"
            },
            {
                "type": "address",
                "name": "_zoo"
            },
            {
                "type": "address",
                "name": "_lpZoo"
            },
            {
                "type": "address",
                "name": "baseZooFunctions"
            },
            {
                "type": "address",
                "name": "_team"
            },
            {
                "type": "address",
                "name": "_glpRewardRouter"
            },
            {
                "type": "address",
                "name": "_glpManager"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Approval",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "approved",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ApprovalForAll",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "operator",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "approved",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ClaimedIncentiveRewardFromVoting",
        "inputs": [
            {
                "type": "address",
                "name": "voter",
                "indexed": true
            },
            {
                "type": "address",
                "name": "beneficiary",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "zooReward",
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
        "name": "NftBattleArenaSet",
        "inputs": [
            {
                "type": "address",
                "name": "nftBattleArena",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "OwnershipTransferred",
        "inputs": [
            {
                "type": "address",
                "name": "previousOwner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "newOwner",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Transfer",
        "inputs": [
            {
                "type": "address",
                "name": "from",
                "indexed": true
            },
            {
                "type": "address",
                "name": "to",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": true
            }
        ]
    },
    {
        "type": "function",
        "name": "addDaiToPosition",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "uint256",
                "name": "votingPositionId"
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
        "name": "addDaiToPositionStable",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "uint256",
                "name": "votingPositionId"
            },
            {
                "type": "uint256",
                "name": "amount"
            },
            {
                "type": "address",
                "name": "token"
            },
            {
                "type": "uint256",
                "name": "minUsdg"
            },
            {
                "type": "uint256",
                "name": "minGlp"
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
        "name": "addZooToPosition",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "uint256",
                "name": "votingPositionId"
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
        "name": "approve",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "balanceOf",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "owner"
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
        "name": "batchClaimIncentiveVoterReward",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256[]",
                "name": "votingPositionIds"
            },
            {
                "type": "address",
                "name": "beneficiary"
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
        "name": "batchClaimRewardsFromVotings",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256[]",
                "name": "votingPositionIds"
            },
            {
                "type": "address",
                "name": "beneficiary"
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
        "name": "batchSwapVotesFromPrositionsForUnstakedNft",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256[]",
                "name": "positions"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "batchWithdrawDaiFromVoting",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256[]",
                "name": "votingPositionIds"
            },
            {
                "type": "address",
                "name": "beneficiary"
            },
            {
                "type": "uint256",
                "name": "daiNumber"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "batchWithdrawZooFromVoting",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256[]",
                "name": "votingPositionIds"
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
        "name": "claimIncentiveVoterReward",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "votingPositionId"
            },
            {
                "type": "address",
                "name": "beneficiary"
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
                "name": "beneficiary"
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
        "name": "createNewVotingPosition",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "uint256",
                "name": "stakingPositionId"
            },
            {
                "type": "uint256",
                "name": "amount"
            },
            {
                "type": "bool",
                "name": "allowToSwapVotes"
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
        "name": "createNewVotingPositionStable",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "uint256",
                "name": "stakingPositionId"
            },
            {
                "type": "uint256",
                "name": "amount"
            },
            {
                "type": "bool",
                "name": "allowToSwapVotes"
            },
            {
                "type": "address",
                "name": "token"
            },
            {
                "type": "uint256",
                "name": "minUsdg"
            },
            {
                "type": "uint256",
                "name": "minGlp"
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
        "name": "getApproved",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "glpManager",
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
        "name": "glpRewardRouter",
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
        "name": "isAllowedToSwapVotes",
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
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "name": "isApprovedForAll",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "owner"
            },
            {
                "type": "address",
                "name": "operator"
            }
        ],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "name": "lpZoo",
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
        "name": "name",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string"
            }
        ]
    },
    {
        "type": "function",
        "name": "nftBattleArena",
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
        "name": "owner",
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
        "name": "ownerOf",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "renounceOwnership",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "safeTransferFrom",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "from"
            },
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "safeTransferFrom",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "from"
            },
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "bytes",
                "name": "data"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setApprovalForAll",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "operator"
            },
            {
                "type": "bool",
                "name": "approved"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setNftBattleArena",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_nftBattleArena"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "supportsInterface",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes4",
                "name": "interfaceId"
            }
        ],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "name": "swapVotesFromPositionForOwner",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "votingPositionId"
            },
            {
                "type": "uint256",
                "name": "daiNumber"
            },
            {
                "type": "uint256",
                "name": "newStakingPositionId"
            },
            {
                "type": "address",
                "name": "beneficiary"
            },
            {
                "type": "uint256",
                "name": "newVotingPosition"
            },
            {
                "type": "bool",
                "name": "allowToSwapVotes"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "swapVotesFromPositionForUnstackedNft",
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
        "name": "symbol",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string"
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
        "name": "tokenURI",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": [
            {
                "type": "string"
            }
        ]
    },
    {
        "type": "function",
        "name": "transferFrom",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "from"
            },
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "transferOwnership",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newOwner"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "withdrawDaiFromVotingPosition",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "votingPositionId"
            },
            {
                "type": "address",
                "name": "beneficiary"
            },
            {
                "type": "uint256",
                "name": "daiNumber"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "withdrawDaiFromVotingPositionStable",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "votingPositionId"
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
                "type": "uint256",
                "name": "minOut"
            },
            {
                "type": "address",
                "name": "tokenToReceive"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "withdrawZooFromVotingPosition",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "votingPositionId"
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
    }
]

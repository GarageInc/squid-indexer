export const ABI_JSON = [
    {
        "type": "constructor",
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
                "name": "_stablecoin"
            },
            {
                "type": "address",
                "name": "_zoo"
            },
            {
                "type": "address",
                "name": "_vault"
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
        "name": "Claimed",
        "inputs": [
            {
                "type": "address",
                "name": "staker",
                "indexed": true
            },
            {
                "type": "address",
                "name": "beneficiary",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "positionId",
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
        "type": "event",
        "anonymous": false,
        "name": "ZooStaked",
        "inputs": [
            {
                "type": "address",
                "name": "staker",
                "indexed": true
            },
            {
                "type": "address",
                "name": "beneficiary",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "positionId",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ZooWithdrawal",
        "inputs": [
            {
                "type": "address",
                "name": "staker",
                "indexed": true
            },
            {
                "type": "address",
                "name": "beneficiary",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "positionId",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "addZoo",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "positionId"
            },
            {
                "type": "uint256",
                "name": "amount"
            }
        ],
        "outputs": []
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
        "name": "arena",
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
        "name": "claimRewards",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "positionId"
            },
            {
                "type": "address",
                "name": "beneficiary"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "amountOfstablecoins"
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
        "name": "getPendingReward",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "positionId"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "yvTokens"
            }
        ]
    },
    {
        "type": "function",
        "name": "indexCounter",
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
        "name": "lastEpochWhereTotalStakedUpdated",
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
                "name": "_data"
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
        "name": "stablecoin",
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
        "name": "stakeZoo",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "amount"
            },
            {
                "type": "address",
                "name": "beneficiary"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "xZooPositionId"
            }
        ]
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
        "name": "tokenOfOwnerByIndex",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address"
            },
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
        "name": "totalStakedZoo",
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
                "type": "int256"
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
        "name": "unlockAndClaim",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "positionId"
            },
            {
                "type": "address",
                "name": "beneficiary"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "amountOfZoo"
            },
            {
                "type": "uint256",
                "name": "rewardsForClaimer"
            }
        ]
    },
    {
        "type": "function",
        "name": "unlockZoo",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "positionId"
            },
            {
                "type": "address",
                "name": "beneficiary"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "amountOfZoo"
            }
        ]
    },
    {
        "type": "function",
        "name": "updateTotalStakedUpdated",
        "constant": false,
        "payable": false,
        "inputs": [],
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
        "name": "withdrawZoo",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "positionId"
            },
            {
                "type": "uint256",
                "name": "amount"
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
        "name": "xZooPositions",
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
                "name": "amount"
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
                "name": "yTokensDebt"
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
    }
]

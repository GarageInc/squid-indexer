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
                "type": "uint256",
                "name": "attempts"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ZooGiven",
        "inputs": [
            {
                "type": "address",
                "name": "user",
                "indexed": true
            }
        ]
    },
    {
        "type": "function",
        "name": "addToWhiteList",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "user"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "attemptAmount",
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
        "name": "attemptLimit",
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
        "name": "batchAddToWhiteList",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "users"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "batchFaucet",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "recipients"
            },
            {
                "type": "uint256",
                "name": "sendAmount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "changeAttemptLimit",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "faucetAmount",
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
        "name": "getZoo",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "returnTokens",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "zooAmount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setFaucetAmount",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "amount"
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
    }
]

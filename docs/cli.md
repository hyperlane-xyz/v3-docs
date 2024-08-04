# Hyperlane CLI

The Hyperlane CLI is a command-line tool written in Typescript that facilitates common operations on Hyperlane, such as deploying the core contracts and/or warp routes to new chains.

## Setup

Node 16 or newer is required.

## To install the CLI:

```bash
# Install the CLI globally
npm install -g @hyperlane-xyz/cli
```

## To use the CLI:

Just enter `hyperlane` in your terminal and you will see the available commands.

```bash
root@123: hyperlane

Hyperlane CLI

hyperlane <command>

Commands:
  hyperlane chains  View information about core Hyperlane chains
  hyperlane config  Create or validate Hyperlane configs
  hyperlane deploy  Permissionlessly deploy a Hyperlane contracts or extensions
  hyperlane send    Send a test message or transfer
  hyperlane status  Check status of a message

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
```

The commands currently available are `chains`, `config`, `deploy`, `send`, and `status`.
Each command has its own set of options and subcommands.

Let's take a look at what each command does along with the options you get to use as well as the subcommands with their usual behavior.

## Commands
### chains

The `chains` command is used to view information about core Hyperlane chains.

```bash
root@123: hyperlane chains
```

Thsi command pertains to getting information about the chains supported and the addresses of contracts as per the SDK.

This would have the following output:

```bash
root@123: hyperlane chains
Commands:
  hyperlane chains list       List all core chains included in the Hyperlane SDK
  hyperlane chains addresses  Display the addresses of core Hyperlane contracts

Options:
  --help  Show help                                                    [boolean]
```

Exploring the subcommands:

#### list

The `list` subcommand is used to list all core chains included in the Hyperlane SDK.

```bash
root@123: hyperlane chains list
```

This would have the following output:

```bash
root@123: hyperlane chains list

Hyperlane CLI
Hyperlane core mainnet chains:
------------------------------
┌──────────────┬───────────────────────┬───────────────┐
│   (index)    │     Display Name      │   Chain Id    │
├──────────────┼───────────────────────┼───────────────┤
│   arbitrum   │      'Arbitrum'       │     42161     │
│  avalanche   │      'Avalanche'      │     43114     │
│     bsc      │ 'Binance Smart Chain' │      56       │
│     celo     │        'Celo'         │     42220     │
│   ethereum   │      'Ethereum'       │       1       │
│   neutron    │       'Neutron'       │  'neutron-1'  │
│ mantapacific │    'Manta Pacific'    │      169      │
│   moonbeam   │      'Moonbeam'       │     1284      │
│   optimism   │      'Optimism'       │      10       │
│   polygon    │       'Polygon'       │      137      │
│    gnosis    │       'Gnosis'        │      100      │
│     base     │        'Base'         │     8453      │
│    scroll    │       'Scroll'        │    534352     │
│ polygonzkevm │    'Polygon zkEVM'    │     1101      │
│  injective   │      'Injective'      │ 'injective-1' │
│    inevm     │    'Injective EVM'    │     2525      │
│   viction    │       'Viction'       │      88       │
└──────────────┴───────────────────────┴───────────────┘

Hyperlane core testnet chains:
------------------------------
┌─────────────────────┬─────────────────────────┬────────────┐
│       (index)       │      Display Name       │  Chain Id  │
├─────────────────────┼─────────────────────────┼────────────┤
│      alfajores      │       'Alfajores'       │   44787    │
│   arbitrumgoerli    │    'Arbitrum Goerli'    │   421613   │
│     basegoerli      │      'Base Goerli'      │   84531    │
│     bsctestnet      │      'BSC Testnet'      │     97     │
│       chiado        │        'Chiado'         │   10200    │
│        fuji         │         'Fuji'          │   43113    │
│       goerli        │        'Goerli'         │     5      │
│     lineagoerli     │     'Linea Goerli'      │   59140    │
│    moonbasealpha    │    'Moonbase Alpha'     │    1287    │
│       mumbai        │        'Mumbai'         │   80001    │
│   optimismgoerli    │    'Optimism Goerli'    │    420     │
│ polygonzkevmtestnet │ 'Polygon zkEVM Testnet' │    1442    │
│    scrollsepolia    │    'Scroll Sepolia'     │   534351   │
│       sepolia       │        'Sepolia'        │  11155111  │
│    solanadevnet     │     'Solana Devnet'     │ 1399811151 │
│    solanatestnet    │    'Solana Testnet'     │ 1399811150 │
│   eclipsetestnet    │    'Eclipse Testnet'    │ 239092742  │
└─────────────────────┴─────────────────────────┴────────────┘
```

As per the date of writing, these are the chains supported by the SDK.

#### addresses

The `addresses` subcommand is used to display the addresses of core Hyperlane contracts.

```bash
root@123: hyperlane chains addresses
```

This would have the following output:

<details>
<summary>Output</summary>

```bash
root@123: hyperlane chains addresses
Hyperlane CLI
Hyperlane core contract addresses:
----------------------------------
{
  "basegoerli": {
    "merkleRootMultisigIsmFactory": "0x6966b0E55883d49BFB24539356a2f8A673E02039",
    "messageIdMultisigIsmFactory": "0x54148470292C24345fb828B003461a9444414517",
    "aggregationIsmFactory": "0x589C201a07c26b4725A4A829d772f24423da480B",
    "aggregationHookFactory": "0xDDcFEcF17586D08A5740B7D91735fcCE3dfe3eeD",
    "proxyAdmin": "0x05Ea36Caee7d92C173334C9D97DcD39ABdCB2b69",
    "mailbox": "0x58483b754Abb1E8947BE63d6b95DF75b8249543A",
    "validatorAnnounce": "0x679Dc08cC3A4acFeea2f7CAFAa37561aE0b41Ce7",
    "storageGasOracle": "0x267B6B6eAf6790faE5D5E9070F28a9cE64CbF279",
    "interchainGasPaymaster": "0x28B02B97a850872C4D33C3E024fab6499ad96564",
    "protocolFee": "0xEe421285728284000ec6c6C55C6F9161faeFfa99",
    "testRecipient": "0x54Bd02f0f20677e9846F8E9FdB1Abc7315C49C38",
    "testTokenRecipient": "0x5e65279Fb7293a058776e37587398fcc3E9184b1",
    "routingIsmFactory": "0xb6242d549d4b19a20684397790AFa555b16Bc979"
  },
  "arbitrumgoerli": {
    "merkleRootMultisigIsmFactory": "0x17D58eBb5Ea0E2d360c877E119FAef4C4052e6B9",
    "messageIdMultisigIsmFactory": "0x922CeEe9e8832a047e6aD68Df4F079F271b73Ac3",
    "aggregationIsmFactory": "0xC5Bb8CDD44B6c56695df45c7AA8012a97dD6ED13",
    "aggregationHookFactory": "0x39a8711BF44165A2292Cb5cB43229659c2Bb11c9",
    "proxyAdmin": "0x00DFB81Bfc45fa03060b605273147F274ea807E5",
    "mailbox": "0x13dABc0351407d5aAa0A50003a166A73b4febfDc",
    "validatorAnnounce": "0x4a01EEBa1CC20F47A2e60aE4ec932051601FcB9e",
    "merkleTreeHook": "0xf0A38e1eEA49dAc7968F470c3aA0BDE2565A5d80",
    "storageGasOracle": "0xFc8229ADB46D96056A6e451Fb3c55d60FFeD056f",
    "interchainGasPaymaster": "0x76189acFA212298d7022624a4633411eE0d2f26F",
    "aggregationHook": "0xf852EB6b98d84A4296754043a56759a0Ae0E06df",
    "protocolFee": "0x0358ba0D90ED2d90fB8cBb610F27C274D8077a0B",
    "fallbackRoutingHook": "0xEdA6f85f4761A1f9e42FD40CA5a4E8Ce1C764015",
    "testRecipient": "0x07543860AE9E72aBcF2Bae9827b23621A64Fa416",
    "testTokenRecipient": "0x207db41AB053213451f1a71d936353C9056A0205",
    "routingIsmFactory": "0x4D6b4fe86cA1B49ea9CcDFA92F97e4EA0C27Cef2"
  },
  "optimismgoerli": {
    "merkleRootMultisigIsmFactory": "0xAbC25d7daDD748948F5cC912A807b0f8FcBb56a9",
    "messageIdMultisigIsmFactory": "0x7868B6026E36C4b6E2ca6a0CaBDb1A6D0CcC443B",
    "aggregationIsmFactory": "0xf666A33C451E8371907aD22dd545E1678fCa1582",
    "aggregationHookFactory": "0x00cE81F7B02e0673815a8b0A54e62AeabDE78685",
    "proxyAdmin": "0x800b4be4Dc91E56DE934D9f16888d113eFf89Ebb",
    "mailbox": "0xB5f021728Ea6223E3948Db2da61d612307945eA2",
    "validatorAnnounce": "0x24D31e12E4d3bc2C46C994FcE0c828b218A1aeAb",
    "merkleTreeHook": "0xFEe074B31B5B259eB3109737bE13D39B853b47b9",
    "storageGasOracle": "0x4927C33299091033D935C15DE6b6073164e99BE0",
    "interchainGasPaymaster": "0x02A7661273528EfF3d78CBE7CbD1a717b28B89fC",
    "aggregationHook": "0x1C8A2588b8038BF9B7b1b60dD0EdF5b995A45599",
    "protocolFee": "0x962e30F6A3ECDA85c7fa1FcF38cD04efA991Ee20",
    "fallbackRoutingHook": "0xc775c748F8c9F5443151Fd989e8B61375657474d",
    "testRecipient": "0x518eA1802407b4b5AAF3aA92c1A803FfbA9FB7fe",
    "testTokenRecipient": "0xB9E45eA920DE14e95A16Ed5e1275F893552f2e32",
    "routingIsmFactory": "0xce8E9D701A1DFfe672c1d8dB20De2B3fa6F4437D"
  },
  "scrollsepolia": {
    "merkleRootMultisigIsmFactory": "0x275aCcCa81cAD931dC6fB6E49ED233Bc99Bed4A7",
    "messageIdMultisigIsmFactory": "0xeb6f11189197223c656807a83B0DD374f9A6dF44",
    "aggregationIsmFactory": "0x16B710b86CAd07E6F1C531861a16F5feC29dba37",
    "aggregationHookFactory": "0x44b764045BfDC68517e10e783E69B376cef196B2",
    "proxyAdmin": "0x598facE78a4302f11E3de0bee1894Da0b2Cb71F8",
    "mailbox": "0x3C5154a193D6e2955650f9305c8d80c18C814A68",
    "validatorAnnounce": "0x527768930D889662Fe7ACF64294871e86e4C2381",
    "merkleTreeHook": "0x863E8c26621c52ACa1849C53500606e73BA272F0",
    "storageGasOracle": "0x6b1bb4ce664Bb4164AEB4d3D2E7DE7450DD8084C",
    "interchainGasPaymaster": "0x86fb9F1c124fB20ff130C41a79a432F770f67AFD",
    "aggregationHook": "0x7b63Aa270335F8896717c2A809205F4b650E4268",
    "protocolFee": "0x5821f3B6eE05F3dC62b43B74AB1C8F8E6904b1C8",
    "fallbackRoutingHook": "0xE1CCB130389f687bf745Dd6dc05E50da17d9ea96",
    "testRecipient": "0xa3AB7E6cE24E6293bD5320A53329Ef2f4DE73fCA",
    "testTokenRecipient": "0xc76E477437065093D353b7d56c81ff54D167B0Ab",
    "routingIsmFactory": "0x17866ebE0e503784a9461d3e753dEeD0d3F61153"
  },
  "alfajores": {
    "merkleRootMultisigIsmFactory": "0xa9C7e306C0941896CA1fd528aA59089571D8D67E",
    "messageIdMultisigIsmFactory": "0xC1b8c0e56D6a34940Ee2B86172450B54AFd633A7",
    "aggregationIsmFactory": "0x4bE8AC22f506B1504C93C3A5b1579C5e7c550D9C",
    "aggregationHookFactory": "0x71bB34Ee833467443628CEdFAA188B2387827Cee",
    "proxyAdmin": "0x4eDBf5846D973c53AF478cf62aB5bC92807521e3",
    "mailbox": "0xEf9F292fcEBC3848bF4bB92a96a04F9ECBb78E59",
    "validatorAnnounce": "0x3726EE36a2A9e11a40d1ffD7D9A1A16e0154cDA0",
    "merkleTreeHook": "0x221FA9CBaFcd6c1C3d206571Cf4427703e023FFa",
    "storageGasOracle": "0x8356113754C7aCa297Db3089b89F87CC125499fb",
    "interchainGasPaymaster": "0x44769b0f4a6f01339e131a691cc2eebbb519d297",
    "aggregationHook": "0xdBabD76358897E68E4964647C1fb8Bf524f5EFdB",
    "protocolFee": "0xC9D50584F08Bf6cCD1004d14c7062044b45E3b48",
    "fallbackRoutingHook": "0x3528B1aeF3a3d29E0eae90ad777A2b4A6a48aC3F",
    "testRecipient": "0x6489d13AcAd3B8dce4c5B31f375DE4f9451E7b38",
    "testTokenRecipient": "0x92dC0a76452a9D9358D2d2dEd8CddA209DF67c45",
    "routingIsmFactory": "0x30d9A03762431F8A917a0C469E7A62Bf55092Ca6"
  },
  "polygonzkevmtestnet": {
    "merkleRootMultisigIsmFactory": "0xfc6e546510dC9d76057F1f76633FCFfC188CB213",
    "messageIdMultisigIsmFactory": "0x275aCcCa81cAD931dC6fB6E49ED233Bc99Bed4A7",
    "aggregationIsmFactory": "0xeb6f11189197223c656807a83B0DD374f9A6dF44",
    "aggregationHookFactory": "0x16B710b86CAd07E6F1C531861a16F5feC29dba37",
    "proxyAdmin": "0x666a24F62f7A97BA33c151776Eb3D9441a059eB8",
    "mailbox": "0x598facE78a4302f11E3de0bee1894Da0b2Cb71F8",
    "validatorAnnounce": "0x7914A3349107A7295Bbf2374db5A973d73D1b324",
    "merkleTreeHook": "0x68311418D79fE8d96599384ED767d225635d88a8",
    "storageGasOracle": "0x3707bc8C7342aA6f693bCe1Bd7671Fca146F7F0A",
    "interchainGasPaymaster": "0xAD34A66Bf6dB18E858F6B686557075568c6E031C",
    "aggregationHook": "0x0Fd2C6F0Ad45e766660b9fDebCF36a2AD69536D1",
    "protocolFee": "0xddf4C3e791caCaFd26D7fb275549739B38ae6e75",
    "fallbackRoutingHook": "0xBF2C366530C1269d531707154948494D3fF4AcA7",
    "testRecipient": "0x11918DC33E067C5DA83EEF58E50F856398b8Df4C",
    "testTokenRecipient": "0x04438ef7622f5412f82915F59caD4f704C61eA48",
    "routingIsmFactory": "0xc08675806BA844467E559E45E4bB59e66778bDcd"
  },
  "sepolia": {
    "merkleRootMultisigIsmFactory": "0x0a71AcC99967829eE305a285750017C4916Ca269",
    "messageIdMultisigIsmFactory": "0xFEb9585b2f948c1eD74034205a7439261a9d27DD",
    "aggregationIsmFactory": "0xC83e12EF2627ACE445C298e6eC418684918a6002",
    "aggregationHookFactory": "0x160C28C92cA453570aD7C031972b58d5Dd128F72",
    "proxyAdmin": "0x97Bbc6bBaFa5Ce3b2FA966c121Af63bD09e940f8",
    "storageGasOracle": "0x71775B071F77F1ce52Ece810ce084451a3045FFe",
    "interchainGasPaymaster": "0x6f2756380FD49228ae25Aa7F2817993cB74Ecc56",
    "aggregationHook": "0xe3147d5618f5e2e100690B50ec923009a4cde14A",
    "protocolFee": "0x13AC3349Cb159fE86A22cf42DdA803D9f7309DB5",
    "mailbox": "0xfFAEF09B3cd11D9b20d1a19bECca54EEC2884766",
    "merkleTreeHook": "0x4917a9746A7B6E0A57159cCb7F5a6744247f2d0d",
    "validatorAnnounce": "0xE6105C59480a1B7DD3E4f28153aFdbE12F4CfCD9",
    "fallbackRoutingHook": "0x17Dc724B7a2F09141C13b8AC33B396073785c2BC",
    "testRecipient": "0xeDc1A3EDf87187085A3ABb7A9a65E1e7aE370C07",
    "testTokenRecipient": "0x031AD9c560D37baC7d6Bd2d27A2443bAfd10101A",
    "routingIsmFactory": "0x3F100cBBE5FD5466BdB4B3a15Ac226957e7965Ad"
  },
  "fuji": {
    "merkleRootMultisigIsmFactory": "0x93F50Ac4E5663DAAb03508008d592f6260964f62",
    "messageIdMultisigIsmFactory": "0x90e1F9918F304645e4F6324E5C0EAc70138C84Ce",
    "aggregationIsmFactory": "0xF588129ed84F219A1f0f921bE7Aa1B2176516858",
    "aggregationHookFactory": "0x99554CC33cBCd6EDDd2f3fc9c7C9194Cb3b5df1E",
    "proxyAdmin": "0x378dA02f7dC3c23A8B5ecE32b8056CdF01e8d477",
    "mailbox": "0x5b6CFf85442B851A8e6eaBd2A4E4507B5135B3B0",
    "validatorAnnounce": "0x4f7179A691F8a684f56cF7Fed65171877d30739a",
    "merkleTreeHook": "0x9ff6ac3dAf63103620BBf76136eA1AFf43c2F612",
    "storageGasOracle": "0x9305dE34306886d615B096Bdf23b94a978f6a6c0",
    "interchainGasPaymaster": "0x6895d3916B94b386fAA6ec9276756e16dAe7480E",
    "aggregationHook": "0x8E9b4006171c6B75111823e7545Ee5400CEce0B3",
    "protocolFee": "0xEbA64c8a9b4a61a9210d5fe7E4375380999C821b",
    "fallbackRoutingHook": "0xc684f7F50DB4b2563218512e021fBdd0BeD6b57E",
    "testRecipient": "0x44a7e1d76fD8AfA244AdE7278336E3D5C658D398",
    "testTokenRecipient": "0x9CC10c844B3Bbae2444E39991aB027C4A05D1F2e",
    "routingIsmFactory": "0x683a81E0e1a238dcA7341e04c08d3bba6f0Cb74f"
  },
  "bsctestnet": {
    "merkleRootMultisigIsmFactory": "0x3E235B90197E1D6b5DB5ad5aD49f2c1ED6406382",
    "messageIdMultisigIsmFactory": "0x0D96aF0c01c4bbbadaaF989Eb489c8783F35B763",
    "aggregationIsmFactory": "0x40613dE82d672605Ab051C64079022Bb4F8bDE4f",
    "aggregationHookFactory": "0xa1145B39F1c7Ef9aA593BC1DB1634b00CC020942",
    "proxyAdmin": "0xb12282d2E838Aa5f2A4F9Ee5f624a77b7199A078",
    "storageGasOracle": "0x124EBCBC018A5D4Efe639f02ED86f95cdC3f6498",
    "interchainGasPaymaster": "0x0dD20e410bdB95404f71c5a4e7Fa67B892A5f949",
    "aggregationHook": "0x3d675bB93250Ab7603F40cbb9194bae210784627",
    "protocolFee": "0x3eF0a63B8976b838704Bcc93C78C56b6653E5a39",
    "mailbox": "0xF9F6F5646F478d5ab4e20B0F910C92F1CCC9Cc6D",
    "merkleTreeHook": "0xc6cbF39A747f5E28d1bDc8D9dfDAb2960Abd5A8f",
    "validatorAnnounce": "0xf09701B0a93210113D175461b6135a96773B5465",
    "fallbackRoutingHook": "0x2670ED2EC08cAd135307556685a96bD4c16b007b",
    "testRecipient": "0xfbcD1c00a3d809f36cC1A15918694B17B32c0b6c",
    "testTokenRecipient": "0x260f6024119549a40595d0937471e607411E8ea5"
  },
  "goerli": {
    "merkleRootMultisigIsmFactory": "0x8e43aCfb338B137A3befd9b92BfD84E128adE0B8",
    "messageIdMultisigIsmFactory": "0xDdB54502A8e2a31C48148C62A8a9E83a693d6173",
    "aggregationIsmFactory": "0x8a176773d54292123d271FA0B9C7C8Def4c3a31b",
    "aggregationHookFactory": "0x6bc243963f80AEa80948e8538bB114d4122DD9c5",
    "proxyAdmin": "0x0EdB3604D230963ecE9d83963164CFe2fDef576B",
    "storageGasOracle": "0xeC34c715ee6d050b2172E8aF650Db779561266C1",
    "interchainGasPaymaster": "0x0cD26594ea6c6526927C0F5225AC09F6288e7140",
    "aggregationHook": "0x2dF77b3efe9B8f9aEDf7bFC86f40B048178d8116",
    "protocolFee": "0x9293B8dAcA7933765de499C992B0Fa86Bb104b0f",
    "merkleTreeHook": "0x28c294C61D3dE053462d2Cfa5d5f8c8D70605A59",
    "mailbox": "0x49cfd6Ef774AcAb14814D699e3F7eE36Fdfba932",
    "validatorAnnounce": "0x3c182AD9cA8A71bc107Ef440C2667E8360e1158E",
    "fallbackRoutingHook": "0xd9E546CBB9577dC6346EdB40b24E86aE52487ab8",
    "testRecipient": "0x4fC0Ac163eFFEb7890937cB89275B2C231880F22",
    "testTokenRecipient": "0xd8958706B33E20C88679a22203F0AFa6158c834d",
    "routingIsmFactory": "0xeB998dC788E2c1e772d198d32e50890544776e75"
  },
  "moonbasealpha": {
    "merkleRootMultisigIsmFactory": "0xA59Ba0A8D4ea5A5DC9c8B0101ba7E6eE6C3399A4",
    "messageIdMultisigIsmFactory": "0x8f919348F9C4619A196Acb5e377f49E5E2C0B569",
    "aggregationIsmFactory": "0x0048FaB53526D9a0478f66D660059E3E3611FE3E",
    "aggregationHookFactory": "0x00DFB81Bfc45fa03060b605273147F274ea807E5",
    "proxyAdmin": "0xb241991527F1C21adE14F55589E5940aC4852Fa0",
    "mailbox": "0x76189acFA212298d7022624a4633411eE0d2f26F",
    "merkleTreeHook": "0x155B1CD2f7Cbc58d403B9BE341FaB6CD77425175",
    "storageGasOracle": "0x62fA20dE68Dbe425f0bc474b12235a4F8449E608",
    "interchainGasPaymaster": "0x92F05669A354a032A84FcfABfD13beE1aBc5bFd0",
    "aggregationHook": "0xaA9d918C49Cea0D2a877252aFb7976B6e3A48623",
    "protocolFee": "0xe2A73F106902983452713F24Bd019F6eb8712986",
    "validatorAnnounce": "0x07543860AE9E72aBcF2Bae9827b23621A64Fa416",
    "fallbackRoutingHook": "0xf666A33C451E8371907aD22dd545E1678fCa1582",
    "testRecipient": "0x68729446296E413f0b7d6E85F2FD128465F0e5D0",
    "testTokenRecipient": "0xEdA6f85f4761A1f9e42FD40CA5a4E8Ce1C764015",
    "routingIsmFactory": "0xE8F752e5C4E1A6a2e3eAfa42d44D601A22d78f2b"
  },
  "mumbai": {
    "merkleRootMultisigIsmFactory": "0xda0780ed3eE577EfE0B856E00f983bF231603307",
    "messageIdMultisigIsmFactory": "0x23c2483ab814177bA79DCDCb5dFA1B105387AAB1",
    "aggregationIsmFactory": "0x54b0d9AB6a99E9C9425D20fa4D9eE9dbf067e886",
    "aggregationHookFactory": "0x54CA9De95B37365909364672D363D2ecFC4e1Af4",
    "merkleTreeHook": "0x9AF85731EDd41E2E50F81Ef8a0A69D2fB836EDf9",
    "proxyAdmin": "0xa99aD6B1c10E92DB8d3510f1865A6d2Ab43EAd58",
    "storageGasOracle": "0xBEd8Fd6d5c6cBd878479C25f4725C7c842a43821",
    "interchainGasPaymaster": "0x8aB67CAF605c6ee83cbFeFb0D8d67FDd3BF7B591",
    "aggregationHook": "0xD546273418733AcEC8c7A67EfB881c9Ea83851bf",
    "protocolFee": "0x244d1F7e30Be144A87602905baBF86630e8f39DC",
    "mailbox": "0x2d1889fe5B092CD988972261434F7E5f26041115",
    "validatorAnnounce": "0x99303EFF09332cDd93E8BC8b2F07b2416e4501e5",
    "fallbackRoutingHook": "0x31191BA83143b4745745389fEe64990c65F36829",
    "testRecipient": "0xF45A4D54223DA32bf7b5D43a9a460Ef3C94C713B",
    "testTokenRecipient": "0x57d098e6952B6C1c85Ce0B68C9Deada3dCf7D05A",
    "routingIsmFactory": "0x832Ea28749C93C05E5AaF8207E4e61Bd56aE3877"
  },
  "polygon": {
    "storageGasOracle": "0xA3a24EC5670F1F416AB9fD554FcE2f226AE9D7eB",
    "proxyAdmin": "0xC4F7590C5d30BE959225dC75640657954A86b980",
    "merkleRootMultisigIsmFactory": "0xa9E0E18E78b098c2DE36c42E4DDEA13ce214c592",
    "messageIdMultisigIsmFactory": "0xEa5Be2AD66BB1BA321B7aCf0A079fBE304B09Ca0",
    "aggregationIsmFactory": "0x81AdDD9Ca89105063DaDEBd5B4408551Ce850E22",
    "aggregationHookFactory": "0xFeeB86e70e4a640cDd29636CCE19BD6fe8628135",
    "mailbox": "0x5d934f4e2f797775e53561bB72aca21ba36B96BB",
    "merkleTreeHook": "0x73FbD25c3e817DC4B4Cd9d00eff6D83dcde2DfF6",
    "interchainGasPaymaster": "0x0071740Bf129b05C4684abfbBeD248D80971cce2",
    "aggregationHook": "0x34dAb05650Cf590088bA18aF9d597f3e081bCc47",
    "protocolFee": "0xF8F3629e308b4758F8396606405989F8D8C9c578",
    "validatorAnnounce": "0x454E1a1E1CA8B51506090f1b5399083658eA4Fc5",
    "testRecipient": "0x36FdA966CfffF8a9Cdc814f546db0e6378bFef35",
    "testTokenRecipient": "0x85ac1164878e017b67660a74ff1f41f3D05C02Bb",
    "routingIsmFactory": "0x0d0E816eE4557689d34fAd5885C53b9393C1D9fA",
    "interchainSecurityModule": "0x9a795fB62f86146ec06e2377e3C95Af65c7C20eB",
    "fallbackRoutingHook": "0xca4cCe24E7e06241846F5EA0cda9947F0507C40C",
    "pausableHook": "0x748040afB89B8FdBb992799808215419d36A0930"
  },
  "bsc": {
    "storageGasOracle": "0x91d23D603d60445411C06e6443d81395593B7940",
    "proxyAdmin": "0x65993Af9D0D3a64ec77590db7ba362D6eB78eF70",
    "merkleRootMultisigIsmFactory": "0xfADBc81Ca8A957F1Bf7c78bCc575b28DBDE042b6",
    "messageIdMultisigIsmFactory": "0x4B1d8352E35e3BDE36dF5ED2e73C24E35c4a96b7",
    "aggregationIsmFactory": "0x38B3878c4fb44d201DA924c4a04bae3EE728c065",
    "aggregationHookFactory": "0xe70E86a7D1e001D419D71F960Cb6CaD59b6A3dB6",
    "mailbox": "0x2971b9Aec44bE4eb673DF1B88cDB57b96eefe8a4",
    "merkleTreeHook": "0xFDb9Cd5f9daAA2E4474019405A328a88E7484f26",
    "interchainGasPaymaster": "0x78E25e7f84416e69b9339B0A6336EB6EFfF6b451",
    "aggregationHook": "0x402Fc106576462a892355d69ACF03D46A888ae88",
    "protocolFee": "0xA8Aa5f14a5463a78E45CC068F11c867949F3E367",
    "validatorAnnounce": "0x7024078130D9c2100fEA474DAD009C2d1703aCcd",
    "testRecipient": "0x36FdA966CfffF8a9Cdc814f546db0e6378bFef35",
    "testTokenRecipient": "0x85ac1164878e017b67660a74ff1f41f3D05C02Bb",
    "routingIsmFactory": "0xe6Af5720d34213C805C08e2470aea979e3F72F75",
    "interchainSecurityModule": "0xab3df354baBee6c2B88E2CeD3b2e030e31aA5e61",
    "fallbackRoutingHook": "0x237E81f87F57Badad9e09f13CC676D986cA852e7",
    "pausableHook": "0x7DBdAd1b4A922B65d37d7258a4227b6658344b7f"
  },
  "arbitrum": {
    "storageGasOracle": "0xD3805207b65d99C075ceA938Fa7c0587026a5DF5",
    "proxyAdmin": "0x80Cebd56A65e46c474a1A101e89E76C4c51D179c",
    "merkleRootMultisigIsmFactory": "0x3C330D4A2e2b8443AFaB8E326E64ab4251B7Eae0",
    "messageIdMultisigIsmFactory": "0x12Df53079d399a47e9E730df095b712B0FDFA791",
    "aggregationIsmFactory": "0xD4883084389fC1Eeb4dAfB2ADcFc36B711c310EB",
    "aggregationHookFactory": "0x9B5f440bBb64Fee337F37e03362b628711Ea09C7",
    "merkleTreeHook": "0x748040afB89B8FdBb992799808215419d36A0930",
    "interchainGasPaymaster": "0x3b6044acd6767f017e99318AA6Ef93b7B06A5a22",
    "aggregationHook": "0xe0cb37cFc47296f1c4eD77EFf92Aed478644d10c",
    "protocolFee": "0xD0199067DACb8526e7dc524a9a7DCBb57Cd25421",
    "mailbox": "0x979Ca5202784112f4738403dBec5D0F3B9daabB9",
    "validatorAnnounce": "0x1df063280C4166AF9a725e3828b4dAC6c7113B08",
    "testRecipient": "0x36FdA966CfffF8a9Cdc814f546db0e6378bFef35",
    "testTokenRecipient": "0x85ac1164878e017b67660a74ff1f41f3D05C02Bb",
    "routingIsmFactory": "0xa2931C37957f3079d3B21b877d56E1db930e02a5",
    "pausableHook": "0xEf30f29Dcd3FCB1DCcDA9C7Cbf2A5957E8Ee9Cc3",
    "fallbackRoutingHook": "0x9e8fFb1c26099e75Dd5D794030e2E9AA51471c25",
    "interchainSecurityModule": "0xD0DBBF922076352cC50B285A0023536561F00EEa"
  },
  "optimism": {
    "storageGasOracle": "0x27e88AeB8EA4B159d81df06355Ea3d20bEB1de38",
    "proxyAdmin": "0xE047cb95FB3b7117989e911c6afb34771183fC35",
    "merkleRootMultisigIsmFactory": "0xCA6Cb9Bc3cfF9E11003A06617cF934B684Bc78BC",
    "messageIdMultisigIsmFactory": "0xAa4Be20E9957fE21602c74d7C3cF5CB1112EA9Ef",
    "aggregationIsmFactory": "0x7491843F3A5Ba24E0f17a22645bDa04A1Ae2c584",
    "aggregationHookFactory": "0x15DEeAB8dECDe553bb0B1F9C00984cbcae1af3D7",
    "merkleTreeHook": "0x68eE9bec9B4dbB61f69D9D293Ae26a5AACb2e28f",
    "interchainGasPaymaster": "0xD8A76C4D91fCbB7Cc8eA795DFDF870E48368995C",
    "aggregationHook": "0x4ccC6d8eB79f2a1EC9bcb0f211fef7907631F91f",
    "protocolFee": "0xD71Ff941120e8f935b8b1E2C1eD72F5d140FF458",
    "mailbox": "0xd4C1905BB1D26BC93DAC913e13CaCC278CdCC80D",
    "validatorAnnounce": "0x30f5b08e01808643221528BB2f7953bf2830Ef38",
    "testRecipient": "0x36FdA966CfffF8a9Cdc814f546db0e6378bFef35",
    "testTokenRecipient": "0x85ac1164878e017b67660a74ff1f41f3D05C02Bb",
    "routingIsmFactory": "0xD2e905108c5e44dADA680274740f896Ea96Cf2Fb",
    "pausableHook": "0xf753CA2269c8A7693ce1808b5709Fbf36a65D47A",
    "fallbackRoutingHook": "0xD4b132C6d4AA93A4247F1A91e1ED929c0572a43d",
    "interchainSecurityModule": "0x04938856bE60c8e734ffDe5f720E2238302BE8D2"
  },
  "moonbeam": {
    "storageGasOracle": "0x448b7ADB0dA36d41AA2AfDc9d63b97541A7b3819",
    "proxyAdmin": "0x6A9cdA3dd1F593983BFd142Eb35e6ce4137bd5ce",
    "merkleRootMultisigIsmFactory": "0xE2f485bc031Feb5a4C41C1967bf028653d75f0C3",
    "messageIdMultisigIsmFactory": "0x84Df48F8f241f11d0fA302d09d73030429Bd9C73",
    "aggregationIsmFactory": "0x40c6Abcb6A2CdC8882d4bEcaC47927005c7Bb8c2",
    "aggregationHookFactory": "0x59cC3E7A49DdC4893eB8754c7908f96072A7DbE8",
    "mailbox": "0x094d03E751f49908080EFf000Dd6FD177fd44CC3",
    "merkleTreeHook": "0x87403b85f6f316e7ba91ba1fa6C3Fb7dD4095547",
    "interchainGasPaymaster": "0x14760E32C0746094cF14D97124865BC7F0F7368F",
    "aggregationHook": "0x23cca255aE83F57F39EAf9D14fB9FdaDF22D5863",
    "protocolFee": "0xCd3e29A9D293DcC7341295996a118913F7c582c0",
    "validatorAnnounce": "0x8c1001eBee6F25b31863A55EadfF149aF88B356F",
    "testRecipient": "0x36FdA966CfffF8a9Cdc814f546db0e6378bFef35",
    "testTokenRecipient": "0x85ac1164878e017b67660a74ff1f41f3D05C02Bb",
    "routingIsmFactory": "0x8061Af3A459093540d17823D651BC5E2A92669a7",
    "pausableHook": "0xe28f2AEEB42ee83CAd068D9A9a449c8b868C137f",
    "fallbackRoutingHook": "0x6C2D6eA0969F7Aa0A850CCA88c7BFACa563B2361",
    "interchainSecurityModule": "0x373836DFa82f2D27ec79Ca32A197Aa1665F0E1e9"
  },
  "gnosis": {
    "storageGasOracle": "0x5E01d8F34b629E3f92d69546bbc4142A7Adee7e9",
    "proxyAdmin": "0x81a92A1a272cb09d7b4970b07548463dC7aE0cB7",
    "merkleRootMultisigIsmFactory": "0x8E273260EAd8B72A085B19346A676d355740e875",
    "messageIdMultisigIsmFactory": "0x603f46cc520d2fc22957b81e206408590808F02F",
    "aggregationIsmFactory": "0x11EF91d17c5ad3330DbCa709a8841743d3Af6819",
    "aggregationHookFactory": "0xbC8AA096dabDf4A0200BB9f8D4Cbb644C3D86d7B",
    "mailbox": "0xaD09d78f4c6b9dA2Ae82b1D34107802d380Bb74f",
    "merkleTreeHook": "0x2684C6F89E901987E1FdB7649dC5Be0c57C61645",
    "interchainGasPaymaster": "0xDd260B99d302f0A3fF885728c086f729c06f227f",
    "aggregationHook": "0xdD1FA1C12496474c1dDC67a658Ba81437F818861",
    "protocolFee": "0x9c2214467Daf9e2e1F45b36d08ce0b9C65BFeA88",
    "validatorAnnounce": "0x87ED6926abc9E38b9C7C19f835B41943b622663c",
    "testRecipient": "0x36FdA966CfffF8a9Cdc814f546db0e6378bFef35",
    "testTokenRecipient": "0x85ac1164878e017b67660a74ff1f41f3D05C02Bb",
    "routingIsmFactory": "0xbB5Df000113e767dE11343A16f83De733e5bCC0F",
    "pausableHook": "0xf728C884De5275a608dEC222dACd0f2BF2E23AB6",
    "fallbackRoutingHook": "0x24f5E353dD03E103Ba2372F7D6FC0cf3A66f849c",
    "interchainSecurityModule": "0x8e1aa0687B6d939D5a44304D13B7c922ebB012f1"
  },
  "base": {
    "merkleRootMultisigIsmFactory": "0x8b83fefd896fAa52057798f6426E9f0B080FCCcE",
    "messageIdMultisigIsmFactory": "0x8F7454AC98228f3504Bb91eA3D8Adafe6406110A",
    "aggregationIsmFactory": "0xEb9FcFDC9EfDC17c1EC5E1dc085B98485da213D6",
    "aggregationHookFactory": "0x1052eF3419f26Bec74Ed7CEf4a4FA6812Bc09908",
    "proxyAdmin": "0x4Ed7d626f1E96cD1C0401607Bf70D95243E3dEd1",
    "mailbox": "0xeA87ae93Fa0019a82A727bfd3eBd1cFCa8f64f1D",
    "merkleTreeHook": "0x19dc38aeae620380430C200a6E990D5Af5480117",
    "storageGasOracle": "0xBF12ef4B9f307463D3FB59c3604F294dDCe287E2",
    "interchainGasPaymaster": "0xc3F23848Ed2e04C0c6d41bd7804fa8f89F940B94",
    "aggregationHook": "0x13f3d4B0Ee0a713430fded9E18f7fb6c91A6E41F",
    "protocolFee": "0x99ca8c74cE7Cfa9d72A51fbb05F9821f5f826b3a",
    "validatorAnnounce": "0x182E8d7c5F1B06201b102123FC7dF0EaeB445a7B",
    "routingIsmFactory": "0x7E27456a839BFF31CA642c060a2b68414Cb6e503",
    "pausableHook": "0x46fa3A5780e5B90Eaf34BDED554d5353B5ABE9E7",
    "fallbackRoutingHook": "0x4Eb82Ee35b0a1c1d776E3a3B547f9A9bA6FCC9f2",
    "interchainSecurityModule": "0x5D1e7D7c5B9e6dDC8439F67F10c578f2A1084f6F"
  },
  "scroll": {
    "merkleRootMultisigIsmFactory": "0x2C1FAbEcd7bFBdEBF27CcdB67baADB38b6Df90fC",
    "messageIdMultisigIsmFactory": "0x8b83fefd896fAa52057798f6426E9f0B080FCCcE",
    "aggregationIsmFactory": "0x8F7454AC98228f3504Bb91eA3D8Adafe6406110A",
    "aggregationHookFactory": "0xEb9FcFDC9EfDC17c1EC5E1dc085B98485da213D6",
    "merkleTreeHook": "0x6119E37Bd66406A1Db74920aC79C15fB8411Ba76",
    "proxyAdmin": "0x0761b0827849abbf7b0cC09CE14e1C93D87f5004",
    "storageGasOracle": "0x481171eb1aad17eDE6a56005B7F1aB00C581ef13",
    "interchainGasPaymaster": "0xBF12ef4B9f307463D3FB59c3604F294dDCe287E2",
    "aggregationHook": "0x9Bc0FAf446E128a618A88a2F28960Fb2Ca169faE",
    "protocolFee": "0xc3F23848Ed2e04C0c6d41bd7804fa8f89F940B94",
    "mailbox": "0x2f2aFaE1139Ce54feFC03593FeE8AB2aDF4a85A7",
    "validatorAnnounce": "0xd83A4F747fE80Ed98839e05079B1B7Fe037b1638",
    "routingIsmFactory": "0xe03dad16074BC5EEA9A9311257BF02Eb0B6AAA2b",
    "pausableHook": "0x4Eb82Ee35b0a1c1d776E3a3B547f9A9bA6FCC9f2",
    "fallbackRoutingHook": "0xDa7cECb05C4aeB02c1aFDE277d4306a2da7Bd762",
    "interchainSecurityModule": "0xaDc0cB48E8DB81855A930C0C1165ea3dCe4Ba5C7"
  },
  "polygonzkevm": {
    "merkleRootMultisigIsmFactory": "0x8F7454AC98228f3504Bb91eA3D8Adafe6406110A",
    "messageIdMultisigIsmFactory": "0xEb9FcFDC9EfDC17c1EC5E1dc085B98485da213D6",
    "aggregationIsmFactory": "0x1052eF3419f26Bec74Ed7CEf4a4FA6812Bc09908",
    "aggregationHookFactory": "0x0761b0827849abbf7b0cC09CE14e1C93D87f5004",
    "merkleTreeHook": "0x149db7afD694722747035d5AEC7007ccb6F8f112",
    "proxyAdmin": "0x2f2aFaE1139Ce54feFC03593FeE8AB2aDF4a85A7",
    "storageGasOracle": "0x19dc38aeae620380430C200a6E990D5Af5480117",
    "interchainGasPaymaster": "0x0D63128D887159d63De29497dfa45AFc7C699AE4",
    "aggregationHook": "0x8464aF853363B8d6844070F68b0AB34Cb6523d0F",
    "protocolFee": "0xd83A4F747fE80Ed98839e05079B1B7Fe037b1638",
    "mailbox": "0x3a464f746D23Ab22155710f44dB16dcA53e0775E",
    "validatorAnnounce": "0x2fa5F5C96419C222cDbCeC797D696e6cE428A7A9",
    "routingIsmFactory": "0xe4057c5B0c43Dc18E36b08C39B419F190D29Ac2d",
    "interchainSecurityModule": "0xf2BEE9D2c15Ba9D7e06799B5912dE1F05533c141",
    "fallbackRoutingHook": "0x01aE937A7B05d187bBCBE80F44F41879D3D335a4",
    "pausableHook": "0xc2FbB9411186AB3b1a6AFCCA702D1a80B48b197c"
  },
  "celo": {
    "storageGasOracle": "0xD9A9966E7dA9a7f0032bF449FB12696a638E673C",
    "proxyAdmin": "0x90f9a2E9eCe93516d65FdaB726a3c62F5960a1b9",
    "merkleRootMultisigIsmFactory": "0x4C96a1abc44dc846775CE702C9E9BE821D3b487c",
    "messageIdMultisigIsmFactory": "0xaB402f227e892Ef37C105bf06619c0fa106a1fB2",
    "aggregationIsmFactory": "0x1722dd970a1F56040712129f5Eeb76B003fd7500",
    "aggregationHookFactory": "0xc3745652EFB8555A8b064A0EA78d295133d326D2",
    "merkleTreeHook": "0x04dB778f05854f26E67e0a66b740BBbE9070D366",
    "interchainGasPaymaster": "0x571f1435613381208477ac5d6974310d88AC7cB7",
    "aggregationHook": "0xc65890329066FB20c339Bc5C22f1756e9D3a4fF5",
    "protocolFee": "0x89886d431f9c3eEE64DCD6dAbA3f7D689D98D899",
    "mailbox": "0x50da3B3907A08a24fe4999F4Dcf337E8dC7954bb",
    "validatorAnnounce": "0xCeF677b65FDaA6804d4403083bb12B8dB3991FE1",
    "testRecipient": "0x36FdA966CfffF8a9Cdc814f546db0e6378bFef35",
    "testTokenRecipient": "0x85ac1164878e017b67660a74ff1f41f3D05C02Bb",
    "routingIsmFactory": "0x2A2c22B0a8615ad24839fA6Af302E896Af32d1a3",
    "domainRoutingIsm": "0xf18E32428dad0802C5D6F723cB80A6Da889777c4",
    "pausableIsm": "0x6Bc4437ce69696C9461Cbc89582c259AC8847A58",
    "staticAggregationIsm": "0x99e8E56Dce3402D6E09A82718937fc1cA2A9491E",
    "interchainSecurityModule": "0x99e8E56Dce3402D6E09A82718937fc1cA2A9491E",
    "fallbackRoutingHook": "0xDC98a856fb9112894c2fE32267DA8bF35645FAF3",
    "pausableHook": "0x80672c5D9Fd26B235654C24adc1CFcDeb8d15115"
  },
  "ethereum": {
    "storageGasOracle": "0xc9a103990A8dB11b4f627bc5CD1D0c2685484Ec5",
    "proxyAdmin": "0x75EE15Ee1B4A75Fa3e2fDF5DF3253c25599cc659",
    "merkleRootMultisigIsmFactory": "0x47e8aF9e30C32Ab91060ED587894288786761B45",
    "messageIdMultisigIsmFactory": "0xfA21D9628ADce86531854C2B7ef00F07394B0B69",
    "aggregationIsmFactory": "0x46FA191Ad972D9674Ed752B69f9659A0d7b22846",
    "aggregationHookFactory": "0x6D2555A8ba483CcF4409C39013F5e9a3285D3C9E",
    "merkleTreeHook": "0x48e6c30B97748d1e2e03bf3e9FbE3890ca5f8CCA",
    "interchainGasPaymaster": "0x9e6B1022bE9BBF5aFd152483DAD9b88911bC8611",
    "aggregationHook": "0xb87AC8EA4533AE017604E44470F7c1E550AC6F10",
    "protocolFee": "0x8B05BF30F6247a90006c5837eA63C7905D79e6d8",
    "mailbox": "0xc005dc82818d67AF737725bD4bf75435d065D239",
    "validatorAnnounce": "0xCe74905e51497b4adD3639366708b821dcBcff96",
    "testRecipient": "0x36FdA966CfffF8a9Cdc814f546db0e6378bFef35",
    "testTokenRecipient": "0x85ac1164878e017b67660a74ff1f41f3D05C02Bb",
    "routingIsmFactory": "0x28fA9552F19039b450498B0d8e5DEAe0d0aAc559",
    "pausableHook": "0x3A66Dc852e56d3748838b3C27CF381105b83705b",
    "fallbackRoutingHook": "0x571f1435613381208477ac5d6974310d88AC7cB7",
    "interchainSecurityModule": "0x43Ce4Eb4aE3585dDe9Ac6967Db5b06f7f6764C8a"
  },
  "avalanche": {
    "storageGasOracle": "0x175821F30AdCAA4bbB72Ce98eF76C2E0De2C3f21",
    "proxyAdmin": "0xd7CF8c05fd81b8cA7CfF8E6C49B08a9D63265c9B",
    "merkleRootMultisigIsmFactory": "0x896cF1D1B66cD211633eDd589fF158E8Cfaf9B54",
    "messageIdMultisigIsmFactory": "0x8819D653DF5b1FC0DdB32189a2704E471AF8483c",
    "aggregationIsmFactory": "0xa5E13796eB7d2EDCc88012c8cfF90D69B51FcF9f",
    "aggregationHookFactory": "0x3bF6Ac986C7Af9A9Ac356C0e99C0041EFd8D96e7",
    "merkleTreeHook": "0x84eea61D679F42D92145fA052C89900CBAccE95A",
    "interchainGasPaymaster": "0x95519ba800BBd0d34eeAE026fEc620AD978176C0",
    "aggregationHook": "0x0165a22BA489F7DA37DAf6397781777D9FCB5708",
    "protocolFee": "0xEc4AdA26E51f2685279F37C8aE62BeAd8212D597",
    "mailbox": "0xFf06aFcaABaDDd1fb08371f9ccA15D73D51FeBD6",
    "validatorAnnounce": "0x9Cad0eC82328CEE2386Ec14a12E81d070a27712f",
    "testRecipient": "0x36FdA966CfffF8a9Cdc814f546db0e6378bFef35",
    "testTokenRecipient": "0x85ac1164878e017b67660a74ff1f41f3D05C02Bb",
    "routingIsmFactory": "0x28F7907911C7E321c596686AE6D1F20516450037",
    "pausableHook": "0x239eB860770F1C48ABAC9bE9825d20e3E7c018df",
    "fallbackRoutingHook": "0x61D15D571D5f7A9eF0D1938f072f430bBF024747",
    "interchainSecurityModule": "0xA36B02a83564f52d9244310Ea439ee6F6AfeFb60"
  },
  "mantapacific": {
    "merkleRootMultisigIsmFactory": "0x8F7454AC98228f3504Bb91eA3D8Adafe6406110A",
    "messageIdMultisigIsmFactory": "0xEb9FcFDC9EfDC17c1EC5E1dc085B98485da213D6",
    "aggregationIsmFactory": "0x1052eF3419f26Bec74Ed7CEf4a4FA6812Bc09908",
    "aggregationHookFactory": "0x0761b0827849abbf7b0cC09CE14e1C93D87f5004",
    "proxyAdmin": "0x2f2aFaE1139Ce54feFC03593FeE8AB2aDF4a85A7",
    "mailbox": "0x3a464f746D23Ab22155710f44dB16dcA53e0775E",
    "domainRoutingIsm": "0xDEed16fe4b1c9b2a93483EDFf34C77A9b57D31Ff",
    "storageGasOracle": "0x19dc38aeae620380430C200a6E990D5Af5480117",
    "interchainGasPaymaster": "0x0D63128D887159d63De29497dfa45AFc7C699AE4",
    "merkleTreeHook": "0x149db7afD694722747035d5AEC7007ccb6F8f112",
    "aggregationHook": "0x8464aF853363B8d6844070F68b0AB34Cb6523d0F",
    "protocolFee": "0xd83A4F747fE80Ed98839e05079B1B7Fe037b1638",
    "validatorAnnounce": "0x2fa5F5C96419C222cDbCeC797D696e6cE428A7A9",
    "routingIsmFactory": "0x8358D8291e3bEDb04804975eEa0fe9fe0fAfB147",
    "testRecipient": "0x4E1c88DD261BEe2941e6c1814597e30F53330428",
    "testTokenRecipient": "0x5060eCD5dFAD300A90592C04e504600A7cdcF70b",
    "pausableHook": "0x7556a0E61d577D921Cba8Fca0d7D6299d36E607E",
    "fallbackRoutingHook": "0xD1E267d2d7876e97E217BfE61c34AB50FEF52807",
    "interchainSecurityModule": "0xDEed16fe4b1c9b2a93483EDFf34C77A9b57D31Ff"
  },
  "inevm": {
    "merkleRootMultisigIsmFactory": "0x2C1FAbEcd7bFBdEBF27CcdB67baADB38b6Df90fC",
    "messageIdMultisigIsmFactory": "0x8b83fefd896fAa52057798f6426E9f0B080FCCcE",
    "aggregationIsmFactory": "0x8F7454AC98228f3504Bb91eA3D8Adafe6406110A",
    "aggregationHookFactory": "0xEb9FcFDC9EfDC17c1EC5E1dc085B98485da213D6",
    "routingIsmFactory": "0x1052eF3419f26Bec74Ed7CEf4a4FA6812Bc09908",
    "domainRoutingIsm": "0xBD70Ea9D599a0FC8158B026797177773C3445730",
    "proxyAdmin": "0x0761b0827849abbf7b0cC09CE14e1C93D87f5004",
    "storageGasOracle": "0x6119E37Bd66406A1Db74920aC79C15fB8411Ba76",
    "interchainGasPaymaster": "0x19dc38aeae620380430C200a6E990D5Af5480117",
    "merkleTreeHook": "0x0972954923a1e2b2aAb04Fa0c4a0797e5989Cd65",
    "aggregationHook": "0xe0dDb5dE7D52918237cC1Ae131F29dcAbcb0F62B",
    "protocolFee": "0x0D63128D887159d63De29497dfa45AFc7C699AE4",
    "mailbox": "0x2f2aFaE1139Ce54feFC03593FeE8AB2aDF4a85A7",
    "validatorAnnounce": "0x15ab173bDB6832f9b64276bA128659b0eD77730B",
    "interchainSecurityModule": "0x3052aD50De54aAAc5D364d80bBE681d29e924597",
    "pausableIsm": "0x6Fae4D9935E2fcb11fC79a64e917fb2BF14DaFaa",
    "staticAggregationIsm": "0x3052aD50De54aAAc5D364d80bBE681d29e924597",
    "pausableHook": "0xBDa330Ea8F3005C421C8088e638fBB64fA71b9e0"
  },
  "viction": {
    "merkleRootMultisigIsmFactory": "0x2C1FAbEcd7bFBdEBF27CcdB67baADB38b6Df90fC",
    "messageIdMultisigIsmFactory": "0x8b83fefd896fAa52057798f6426E9f0B080FCCcE",
    "aggregationIsmFactory": "0x8F7454AC98228f3504Bb91eA3D8Adafe6406110A",
    "aggregationHookFactory": "0xEb9FcFDC9EfDC17c1EC5E1dc085B98485da213D6",
    "routingIsmFactory": "0x1052eF3419f26Bec74Ed7CEf4a4FA6812Bc09908",
    "mailbox": "0x2f2aFaE1139Ce54feFC03593FeE8AB2aDF4a85A7",
    "proxyAdmin": "0x0761b0827849abbf7b0cC09CE14e1C93D87f5004",
    "validatorAnnounce": "0x2fa5F5C96419C222cDbCeC797D696e6cE428A7A9",
    "interchainSecurityModule": "0xBD70Ea9D599a0FC8158B026797177773C3445730",
    "merkleTreeHook": "0x149db7afD694722747035d5AEC7007ccb6F8f112",
    "storageGasOracle": "0x19dc38aeae620380430C200a6E990D5Af5480117",
    "interchainGasPaymaster": "0x0D63128D887159d63De29497dfa45AFc7C699AE4",
    "protocolFee": "0xd83A4F747fE80Ed98839e05079B1B7Fe037b1638",
    "testRecipient": "0x17E216fBb22dF4ef8A6640ae9Cb147C92710ac84",
    "testTokenRecipient": "0xe042D1fbDf59828dd16b9649Ede7abFc856F7a6c"
  }
}
```
</details><br>


> **Tip:** Keep the CLI updated to find new chains being added to the SDK.



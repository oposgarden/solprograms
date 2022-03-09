export const programs = [
  {
    id: 1,
    name: 'Token Program',
    description:
      'This program defines a common implementation for Fungible and Non Fungible tokens.    ',
    image: null,
    url: 'https://spl.solana.com/token',
    crate: 'https://crates.io/crates/spl-token',
    github: 'https://github.com/solana-labs/solana-program-library',
    mainnet_address: null,
    testnet_address: null,
    devnet_address: null,
  },
  {
    id: 2,
    name: 'Token Swap Program',
    description:
      'A Uniswap-like exchange for the Token program on the Solana blockchain, implementing multiple automated market maker (AMM) curves.',
    image: null,
    url: 'https://spl.solana.com/token-swap',
    crate: null,
    github:
      'https://github.com/solana-labs/solana-program-library/tree/master/token-swap',
    mainnet_address: 'SwaPpA9LAaLfeLi3a68M4DjnLqgtticKg6CnyNwgAC8',
    testnet_address: 'SwaPpA9LAaLfeLi3a68M4DjnLqgtticKg6CnyNwgAC8',
    devnet_address: 'SwaPpA9LAaLfeLi3a68M4DjnLqgtticKg6CnyNwgAC8',
  },
  {
    id: 3,
    name: 'Token-Lending Program',
    description:
      'A lending protocol for the Token program on the Solana blockchain inspired by Aave and Compound.',
    image: null,
    url: 'https://spl.solana.com/token-swap',
    crate: null,
    github:
      'https://github.com/solana-labs/solana-program-library/tree/master/token-swap',
    mainnet_address: 'LendZqTs8gn5CTSJU1jWKhKuVpjJGom45nnwPb2AMTi',
    testnet_address: 'LendZqTs8gn5CTSJU1jWKhKuVpjJGom45nnwPb2AMTi',
    devnet_address: 'LendZqTs8gn5CTSJU1jWKhKuVpjJGom45nnwPb2AMTi',
  },
  {
    id: 4,
    name: 'Associated Token Account Program',
    description:
      "This program defines the convention and provides the mechanism for mapping the user's wallet address to the associated token accounts they hold.",
    image: null,
    url: 'https://spl.solana.com/associated-token-account',
    crate: 'https://crates.io/crates/spl-associated-token-account',
    github: 'https://github.com/solana-labs/solana-program-library',
    mainnet_address: null,
    testnet_address: null,
    devnet_address: null,
  },
  {
    id: 5,
    name: 'Memo Program',
    description:
      'The Memo program is a simple program that validates a string of UTF-8 encoded characters and verifies that any accounts provided are signers of the transaction.',
    image: null,
    url: 'https://spl.solana.com/memo',
    crate: 'https://crates.io/crates/spl-memo',
    github: 'https://github.com/solana-labs/solana-program-library',
    mainnet_address: null,
    testnet_address: null,
    devnet_address: null,
  },
  {
    id: 6,
    name: 'Mango Market V3',
    description:
      'Mango provides a single venue to lend, borrow, swap, and leverage trade cryptoassets through a powerful risk engine.',
    image: null,
    url: 'https://mango-markets.notion.site/Technical-Intro-to-Mango-Markets-15a650e4799e41c8bfc043fbf079e6f9',
    crate: null,
    github: 'https://github.com/blockworks-foundation/mango-v3',
    mainnet_address: 'mv3ekLzLbnVPNxjSKvqBpU3ZeZXPQdEC3bp5MDEBG68',
    testnet_address: null,
    devnet_address: '4skJ85cdxQAFVKbcGgfun8iZPL7BadVYXG3kGEGkufqA',
  },
]
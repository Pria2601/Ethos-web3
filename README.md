# Ethos-web3

# Decentralized Content Monetization Platform

## Prerequisites
- Node.js
- MetaMask (for wallet integration)
- IPFS (for decentralized content storage)
- Ethereum Test Network (Rinkeby)

## How to Run the Project

### 1. Backend
- Install dependencies and run the backend server:
  ```bash
  npm install
  node server.js
### 2. Frontend
- Navigate to the client directory and install dependencies:
  ```bash
  Copy code
  cd client
  npm install
  npm start
3. Subgraph Deployment
- Initialize the subgraph:
    ```bash
    graph init --studio your-subgraph-name
### 4. Deploy the subgraph to TheGraph Studio:

    ```bash
    graph auth --studio <access-token>
    graph codegen
    graph build
    graph deploy --studio your-subgraph-name

### 4. How to Use the dApp
- Connect your MetaMask wallet and switch to the Rinkeby test network.
- Upload content through the UI and view the uploaded content using the IPFS link.
- Make payments to creators using Ethereum and track transactions via TheGraph subgraph.


---

### Summary
- **Frontend**: Handles wallet connection, content upload, and GraphQL queries to fetch content data.
- **Backend**: Manages content upload API and smart contract interactions.
- **Smart Contracts**: Handles direct payments from users to creators.
- **Subgraph**: Indexes and retrieves payment data and content metadata.
- **README.md**: Provides all instructions to set up, run, and deploy the dApp.



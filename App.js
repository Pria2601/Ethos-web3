import Web3 from 'web3';
import { create } from 'ipfs-http-client';
import { useQuery, gql } from '@apollo/client';

// Step 1: Connect Wallet (MetaMask integration)
// This allows the user to connect their Ethereum wallet to the dApp, enabling transactions and authentication.
const connectWallet = async () => {
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
    try {
      // Request account access if needed
      await window.ethereum.enable();
      // Get the user's accounts from MetaMask
      const accounts = await web3.eth.getAccounts();
      console.log("Connected account:", accounts[0]);
    } catch (error) {
      console.error("User denied account access", error);
    }
  } else {
    console.error("No Ethereum provider found. Install MetaMask.");
  }
};

// Step 2: Upload Content using IPFS
// This function allows users to upload content (e.g., images, videos) to IPFS for decentralized storage.
const ipfs = create('https://ipfs.infura.io:5001/api/v0');

const handleFileUpload = async (file) => {
  try {
    // Add the file to IPFS and get the resulting hash (address)
    const added = await ipfs.add(file);
    console.log('IPFS Hash:', added.path);  // Use this hash to access the file
  } catch (err) {
    console.error('Error uploading file:', err);
  }
};

// Step 3: Fetch and display content from TheGraph using GraphQL
// TheGraph subgraph queries are used to fetch content metadata from the blockchain.
const GET_CONTENT = gql`
  query {
    contents {
      id
      title
      creator
      url
      createdAt
    }
  }
`;

const ContentList = () => {
  // Use Apollo Client to run the GraphQL query and fetch data
  const { loading, error, data } = useQuery(GET_CONTENT);

  if (loading) return <p>Loading...</p>;  // Display loading message while fetching data
  if (error) return <p>Error: {error.message}</p>;  // Handle any errors from the query

  // Return the list of content uploaded by creators, with metadata like title and IPFS link
  return (
    <div>
      {data.contents.map((content) => (
        <div key={content.id}>
          <h3>{content.title}</h3>
          <p>By: {content.creator}</p>
          <a href={`https://ipfs.io/ipfs/${content.url}`} target="_blank">View Content</a>
        </div>
      ))}
    </div>
  );
};

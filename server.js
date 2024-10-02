// Step 1: Setup Express Server
// The backend provides API endpoints for uploading content metadata to the blockchain.
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

// Step 2: API to handle content uploads
// This endpoint receives content metadata (IPFS hash, title, creator address) and stores it on the blockchain.
app.post('/upload', async (req, res) => {
  const { title, ipfsHash, creatorAddress } = req.body;
  
  // Store the data to a database or on-chain (this example only sends a success message)
  res.status(200).json({ message: 'Content uploaded successfully', hash: ipfsHash });
});

// Step 3: Start the backend server
// This will run the server locally on port 3000
app.listen(3000, () => {
  console.log('Server running on port 3000');
});

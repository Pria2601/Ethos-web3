// Solidity contract for handling direct payments from users to creators.
// This contract allows users to pay creators directly in Ethereum, ensuring that there is no intermediary.
pragma solidity ^0.8.0;

contract CreatorPayments {
    address public creator;  // The creator's Ethereum address
    uint public totalReceived;  // Total amount of payments received

    // Event emitted when a payment is received
    event PaymentReceived(address from, uint amount);

    // Constructor initializes the creator's address
    constructor(address _creator) {
        creator = _creator;
    }

    // Function for users to pay the creator
    function payCreator() public payable {
        require(msg.value > 0, "Payment must be greater than 0");
        totalReceived += msg.value;
        payable(creator).transfer(msg.value);  // Transfer the payment to the creator
        emit PaymentReceived(msg.sender, msg.value);  // Log the payment event
    }
}

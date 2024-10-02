// Mapping that handles events emitted by the smart contract and stores the data in the subgraph.
import { PaymentReceived as PaymentEvent } from "../generated/CreatorPayments/CreatorPayments";
import { Payment } from "../generated/schema";

// Handle the PaymentReceived event, creating a new Payment entity for each transaction.
export function handlePaymentReceived(event: PaymentEvent): void {
  let payment = new Payment(event.transaction.hash.toHex());  // Create a new Payment entity with a unique ID
  payment.from = event.params.from;  // Set the payer's address
  payment.amount = event.params.amount;  // Set the amount paid
  payment.creator = event.params.creator;  // Set the creator's address
  payment.timestamp = event.block.timestamp;  // Record the timestamp
  payment.save();  // Save the payment entity in the subgraph
}

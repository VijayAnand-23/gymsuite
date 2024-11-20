// src/components/Payment.js
import React from 'react';

const Payment = () => {
  return (
    <div>
      <h2>Payment</h2>
      <form>
        {/* Include your payment fields and logic here */}
        <input type="text" placeholder="Member ID" />
        <input type="number" placeholder="Amount" />
        <button type="submit">Pay</button>
      </form>
    </div>
  );
};

export default Payment;

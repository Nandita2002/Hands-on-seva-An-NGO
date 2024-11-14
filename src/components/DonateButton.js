import React, { useState } from 'react';
import './donation.css';

const DonationPage = () => {
  const [donorName, setDonorName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [purpose, setPurpose] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call or redirect)
    alert(`Donation Details:\nName: ${donorName}\nEmail: ${email}\nAmount: INR ${amount}\nPurpose: ${purpose}\nPayment Method: ${paymentMethod}`);
  };

  return (
    <div className="donation-page">
      <h1>Donate for a Cause</h1>
      <p>Your contribution can make a difference in someone's life.</p>

      <form onSubmit={handleSubmit} className="donation-form">
        <div className="form-group">
          <label htmlFor="donor-name">Donor Name</label>
          <input
            type="text"
            id="donor-name"
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="amount">Donation Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter donation amount"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="purpose">Purpose for Donating</label>
          <textarea
            id="purpose"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            placeholder="Why are you donating?"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="payment-method">Payment Method</label>
          <select
            id="payment-method"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="upi">UPI</option>
          </select>
        </div>

        <button type="submit" className="donate-btn">
          Donate Now
        </button>
      </form>
    </div>
  );
};

export default DonationPage;

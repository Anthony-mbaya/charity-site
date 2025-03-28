import { PlatformLinks } from "../components/platformlinks";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { useEffect, useState } from "react";
export const Donate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home-container">
      {/* homepage componets - formal layout */}
      <PlatformLinks />
      <Navbar />
      <Payment />
      <Footer />
    </div>
  );
};

function Payment() {
  const [showInst, setShowInst] = useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState('');
  const [donations, setDonations] = useState([]);
  const toggleShowInst = () => {
    setShowInst(!showInst);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && amount) {
      const newDonation = { name, amount };
      setDonations([...donations, newDonation]); // Add the new donation to the state
      setName(""); // Clear the input fields
      setAmount("");
    } else {
      alert("Please enter both name and amount.");
    }
  };
  function Instructions() {
    return (
      <section
        className={`paybill-instructions ${showInst ? "block" : "hidden"}`}
      >
        <h2>How to Donate</h2>
        <ol>
          <li>Go to M-Pesa on your mobile phone.</li>
          <li>
            Select <strong>Lipa na M-Pesa</strong> and choose{" "}
            <strong>Paybill</strong>.
          </li>
          <li>
            Enter our Paybill number <strong>123456</strong>.
          </li>
          <li>For account number, enter your phone number or "Donation".</li>
          <li>Input the amount you wish to donate.</li>
          <li>Confirm and enter your M-Pesa PIN to complete the donation.</li>
        </ol>
      </section>
    );
  }
  function ConfirmMsg() {
    return (
      <section className="donation-confirmation">
        <h2>Thank You for Your Donation!</h2>
        <p>
          Your donation of KES {amount} via M-Pesa has been received. We
          appreciate your support in helping us achieve our mission.
        </p>
      </section>
    );
  }
  return (
    <div className="paybill_donation">
      <h2>Kindly use M-Pesa Paybill</h2>
      <p>
        It's easy to donate via M-Pesa. Use our Paybill number below to make a
        donation directly from your phone.
      </p>
      <span>
        <p>
          Paybill Number : <strong> 000000</strong>{" "}
        </p>
        <p>
          Account Number : <strong> 0712345678</strong>
        </p>
      </span>
      <button onClick={toggleShowInst}>
        {" "}
        {showInst ? "Hide" : "Show"} Instructions{" "}
      </button>
      <Instructions />

      <p>
        After making your payment via M-Pesa Paybill, please enter your name and
        the amount contributed.
      </p>

      {/* Donation Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label>Amount (KES):</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter the amount"
            required
          />
        </div>
        <button type="submit">Submit Donation</button>
      </form>

      {/* Display the list of donations */}
      <div className="donation-list">
        <h2>Donors List</h2>
        <ul>
          {donations.map((donation, index) => (
            <li key={index}>
              {donation.name} contributed KES {donation.amount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

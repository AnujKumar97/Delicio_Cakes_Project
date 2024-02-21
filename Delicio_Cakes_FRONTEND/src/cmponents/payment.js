import React from "react";
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Payment(props) {
  const navigate = useNavigate();
  const [bankName, setBankName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSuccess = () => {
    toast("Ordered Placed successfully");
  }

  const handleFailure = () => {
    toast("Failed");
  }

  const handlePayment = (e) => {
    e.preventDefault();
  
    // Check if props.location exists and has a state property
    if (props.location && props.location.state) {
      const cake = props.location.state.cake;
      const id = localStorage.getItem("id");
  
      axios.post(`http://localhost:8087/placeorders/${id}/${cake.cakeId}`, {
        // Add any data you want to send in the body here
      })
        .then(response => {
          console.log('Success:', response.data);
          navigate("/confirmation");
          handleSuccess();
        })
        .catch(error => {
          console.error('Error:', error);
          handleFailure();
        });
    } else {
      console.error("Location state is undefined or null");
      // Handle the case where props.location or props.location.state is undefined or null
    }
  }
  
  return (
    <div className="container" class="p-3 mb-2 bg-secondary text-white">
      <form onSubmit={handlePayment}>
        <h1 style={{ textAlign: "center" }}>Payment Details</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputBankName" className="form-label">Bank Name</label>
          <input type="text" className="form-control" id="exampleInputBankName" required value={bankName} onChange={(e) => setBankName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputCardNumber" className="form-label">Card Number</label>
          <input type="number" className="form-control" id="exampleInputCardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputCvv" className="form-label">Cvv</label>
          <input type="number" className="form-control" id="exampleInputCvv" value={cvv} onChange={(e) => setCvv(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Pay</button>
      </form>
    </div>
  );
}

export default Payment;

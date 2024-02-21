import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Orders() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    weight: "",
    quantity: "",
    price: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  const submitInfo = (e) => {
    e.preventDefault();

    console.log(formData);

    axios.post('http://localhost:8087/placeorders', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        console.log('Success:', response.data);
        // Navigate after form submission if needed
        navigate("/payment");
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  return (
    <div>
      <div className="p-3 mb-2 bg-dark text-white">
        <h1 style={{ textAlign: "center" }}>Place Orders</h1>
      </div>
      <div className="p-3 mb-2 bg-secondary text-white">
        <form onSubmit={submitInfo}>
          <Link to="/viewcakestable" className="btn btn-warning">View Cakes</Link>
          <br />

          <table>
            <tbody>
              <tr>
                <td>Enter Cake Name:</td>
                <td><input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" /></td>
              </tr>
              <tr>
                <td>Enter Category:</td>
                <td>
                  <select name="category" value={formData.category} onChange={handleChange}>
                    <option value="">Select Category</option>
                    <option value="Egg">Egg</option>
                    <option value="Eggless">Eggless</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Enter Weight:</td>
                <td>
                  <select name="weight" value={formData.weight} onChange={handleChange}>
                    <option value="">Select Weight</option>
                    <option value="1Kg">1Kg</option>
                    <option value="2Kg">2Kg</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Enter Price:</td>
                <td>
                  <select name="price" value={formData.price} onChange={handleChange}>
                    <option value="">Select Price</option>
                    <option value="1000">1000</option>
                    <option value="2000">2000</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>

          <button type="submit" className="btn btn-warning">Confirm Order</button>
          <br />
          <br />
          <Link to="/payment" className="btn btn-warning">Proceed To Pay</Link>
        </form>
      </div>
    </div>
  )
}

export default Orders;

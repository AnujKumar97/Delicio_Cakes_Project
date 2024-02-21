import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ViewCakesTable() {
  const [cakesAvailable, setCakesAvailable] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8087/cakedata")
      .then(response => {
        console.log(response.data);
        setCakesAvailable(response.data);
      })
      .catch(error => console.error('Error fetching cakes:', error));
  }, []);

  const handleOrderSelect = (available) => {
    console.log(available);
    navigate(`/payment`, { state: { cake: available } });
  }

  return (
    <div>
      <br />
      <h1 className="text-secondary text-lg-center">Cakes Available</h1>
      <br /><br /><br />
      <table className="table table-striped table text-danger border">
        <thead>
          <tr>
            <th className="text-center">Cake Name</th>
            <th className="text-center">Cake Category</th>
            <th className="text-center">Cake Weight</th>
            <th className="text-center">Cake Price</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cakesAvailable && cakesAvailable.map(available => (
            <tr key={available.cakeId}>
              <td className="text-warning text-center">{available.name}</td>
              <td className="text-info text-center">{available.category}</td>
              <td className="text-danger text-center">{available.weight}</td>
              <td className="text-info text-center">{available.price}</td>
              <td>
                <button className="btn btn-warning" onClick={() => handleOrderSelect(available)}>Place Order</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br />
    </div>
  );
}

export default ViewCakesTable;

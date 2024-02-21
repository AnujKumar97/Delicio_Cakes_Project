import React from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      category: "",
      weight: "",
      price: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSuccess = () => {
    toast("Added cake successfully");
  };

  handleFailure = () => {
    toast("Failed");
  };

  submitInfo = (e) => {
    e.preventDefault();

    const formData = {
      name: this.state.name,
      category: this.state.category,
      weight: this.state.weight,
      price: this.state.price,
    };

    axios.post('http://localhost:8087/addcakes', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        console.log('Success:', response.data);
        this.handleSuccess();
      })
      .catch(error => {
        console.error('Error:', error);
        this.handleFailure();
      });

    // Prevent default form submission
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <div className="p-3 mb-2 bg-danger text-white">
          <h1 style={{ textAlign: "center" }}>Products</h1>
        </div>
        <div className="p-3 mb-2 bg-secondary text-white">
          <form style={{ textAlign: "center" }} onSubmit={this.submitInfo}>
            <table>
              <tbody>
                <tr>
                  <td>Enter Cake Name:</td>
                  <td>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Name" />
                  </td>
                </tr>
                <tr>
                  <td>Enter Category:</td>
                  <td>
                    <select name="category" value={this.state.category} onChange={this.handleChange}>
                      <option value="">Select Category</option>
                      <option value="Egg">Egg</option>
                      <option value="Eggless">Eggless</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Enter Weight:</td>
                  <td>
                    <select name="weight" value={this.state.weight} onChange={this.handleChange}>
                      <option value="">Select Weight</option>
                      <option value="1Kg">1Kg</option>
                      <option value="2Kg">2Kg</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Enter Price:</td>
                  <td>
                    <input type="number" name="price" value={this.state.price} onChange={this.handleChange} placeholder="Price" />
                  </td>
                </tr>
              </tbody>
            </table>
            <button type="submit" className="btn btn-success">Add Cake To Available</button>
          </form>
          <br />
          <button className="btn btn-warning"><a href="/AdminHome">Back To Home</a></button>
          <br />
          <br />
          <button className="btn btn-danger"><a href="/Login">LogOut</a></button>
        </div>
      </div>
    );
  }
}

export default Product;

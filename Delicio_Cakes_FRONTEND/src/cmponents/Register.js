import React from 'react';
import axios from 'axios'; // Import Axios
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Register() {
  const navigate = useNavigate(); // Access the navigate function

  const [state, setState] = React.useState({
    regid: "",
    name: "",
    email: "",
    password: "",
    contact: "",
    usertype: "customer"
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const handleSuccess = () => {
    toast("Successfully Registered")
  };

  const handleFailure = () => {
    toast("Registration Failed")
  };

  const submitInfo = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8087/Register', state)
      .then(response => {
        console.log('Success:', response.data);
        navigate("/login"); // Use navigate function to navigate
        handleSuccess();
      })
      .catch(error => {
        console.error('Error:', error);
        handleFailure();
      });
  };

  return (
    <div>
      <div className="p-3 mb-2 bg-danger text-white">
        <h1 style={{ textAlign: "center" }}>Create Account</h1>
      </div>
      <div className="container" style={{ width: 500 }}>
        <form onSubmit={submitInfo} method='post'>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Enter name :</label>
            <input type="text" name="name" className="form-control" placeholder="Enter your name" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Enter email :</label>
            <input type="email" name="email" className="form-control" placeholder="Enter your email" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Create password :</label>
            <input type="password" name="password" className="form-control" placeholder="Create password" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="contact" className="form-label">Enter contact :</label>
            <input type="number" name="contact" className="form-control" placeholder="Enter contact" onChange={handleChange} minLength="10" maxLength="10" />
          </div>
          <button className="btn btn-primary">SignUp</button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Already have an account? <button className="btn btn-success" onClick={() => navigate("/login")} type="button">Log in</button>
        </form>
      </div>
    </div>
  );
}

export default Register;

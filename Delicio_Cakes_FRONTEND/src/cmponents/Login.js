import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkLogin = (event) => {
    event.preventDefault();

    const url = `http://localhost:8087/check?email=${email}&password=${password}`;
    fetch(url)
      .then(response => response.text())
      .then(data => {
        const x = data.split(" ");
        localStorage.setItem("id", x[1]);
        if (x[0] === "admin")
          navigate(`/adminhome/?${email}`);
        else if (x[0] === "customer")
          navigate(`/orders/?${email}`);
      })
      .catch(error => {
        console.error('Error:', error);
        setMsg("Login Failed");
      });
  };

  return (
    <div>
      <div className="p-3 mb-2 bg-danger text-white">
        <h1 style={{ textAlign: "center" }}>Login to your account</h1>
      </div>
      <div className="container">
        <form onSubmit={checkLogin}>
          <table>
            <tr>
              <td>Enter User Id:</td>
              <td>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="" /> <br />
              </td>
            </tr>
            <tr>
              <td>Enter Password:</td>
              <td>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="" /> <br />
              </td>
            </tr>
            <tr>
              <td>
                <button className="btn btn-primary" type="submit">Log in</button>
              </td>
                Create an account here <button className="btn btn-success" onClick={() => navigate("/register")} type="button">Sign Up</button>
            </tr>
          </table>
        </form>
        <br />
        <p>{msg}</p>
      </div>
    </div>



  );
}

export default Login;

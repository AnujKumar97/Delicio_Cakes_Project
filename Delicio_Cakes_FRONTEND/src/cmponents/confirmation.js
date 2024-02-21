import React from "react";

class confirmation extends React.Component 
{
  render() 
  {
    return (
      <body>
      <div class="p-3 mb-2 bg-secondary text-white">
        <h1 style={{textAlign: "center"}}>Your order placed successfully</h1>
        {/* <h1 style={{textAlign: "center"}}><p>THANK YOU</p></h1> */}
        <br/>
        <button className="btn btn-warning"><a href="/Login">LogOut</a></button>
        <img src="./image/ty.jpg" width="100%" height="100%" alt="..."/>

      </div>
      </body>
    );
  }
}
export default confirmation;
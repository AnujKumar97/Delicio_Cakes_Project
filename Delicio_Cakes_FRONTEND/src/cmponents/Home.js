import React from "react";

class Home extends React.Component 
{
  render() 
  {
    return (
      <body>
      <div className="p-3 mb-2 bg-dark text-white">
        <h1 style={{textAlign: "center"}}>Welcome to Delicio Cakes</h1>
        <p>Address : Pune City</p>
        {/* <p>Contact Us : 0212-2600172</p> */}
        <p> Time : 11AM - 9PM </p>
        <h1 style={{textAlign: "center"}}><p></p></h1>
        <img src="./image/Originals/cake3.jpg" width="100%" height="100%" alt="..."/>
       
      </div>
      </body>
    );
  }
}
export default Home;
import React from 'react'

class AdminHome extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div>
                
                <h1 className="p-3 mb-2 bg-danger text-white" style={{textAlign: "center"}}>Customisation Of Cakes</h1>
                <br />  
                <button className="btn btn-dark"><a href="/product">Add cakes</a></button> 
                <br/>
                <br/>
                <button className="btn btn-dark"><a href="/ordertable">View Orders</a></button>
                <br/>
                <br/>
                <br/>       
                <br/> 
            </div>
        )}
}
export default AdminHome;
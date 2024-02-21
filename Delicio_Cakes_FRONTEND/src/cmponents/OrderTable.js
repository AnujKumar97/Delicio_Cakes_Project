import React from 'react';

class OrderTable extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { cakes: []};
        fetch("http://localhost:8087/CustomerOrder")
        .then(response => response.json())
        .then(cakes => (
            console.log(cakes),
            this.setState({cakes})),

      )
        // alert (this.state.cakes)
    }
    render()
    {
    return(
        <div>
            <br/>
            <h1 className="text-secondary text-lg-center"> Order Bookings </h1>
            <br/><br/>
            <br/>
            <table className="table table-striped table text-danger border">
                    <thead>
                        <tr>
                            <th className="text-center">OrderId</th>
                            <th className="text-center">cakeId</th>
                            <th className="text-center">customerId</th>
                            {/* <th className="text-center">Cake Name</th>
                            <th className="text-center">Cake Category</th>
                            <th className="text-center">Cake Weight</th>
                            <th className="text-center">Cake Price</th> */}
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.cakes.map(
                            cakes =>
                                <tr key={cakes.ordid}>
                                <td className="text-danger text-center">{cakes.ordid}</td>
                                <td className="text-danger text-center">{cakes.cakeId}</td>
                                <td className="text-danger text-center">{cakes.customerId}</td>
                                {/* <td className="text-danger text-center">{cakes.weight}</td>
                                <td className="text-danger text-center">{cakes.price}</td> */}
                                </tr>
                            )
                    }
                    </tbody>
                </table>
                <button className="btn btn-warning"><a href="/AdminHome">Back To Home</a></button>

            <br/> <br/> <br/> <br/>

             <br/> <br/> <br/> <br/> <br/> <br/>            

        </div>
    );  
    }
}

export default OrderTable;
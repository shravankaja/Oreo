import React from 'react'

export { }

class TabelRecentOrders extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <>
                <div className="tabelMain-Container-Recent-orders">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Item</th>
                                <th scope="col">Address</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Hossein</td>
                                <td>IPONE-7</td>
                                <td>Porterfield 508 Virginia Street Chicago, IL 60653</td>
                                <td>3</td>
                                <td><span className="badge badge-success">DONE</span></td>
                                
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                                <td>Hossein</td>
                                <td>IPONE-7</td>
                                <td>Porterfield 508 Virginia Street Chicago, IL 60653</td>
                                <td>3</td>
                                <td><span className="badge badge-default">Delivered</span></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Hossein</td>
                                <td>IPONE-7</td>
                                <td>Porterfield 508 Virginia Street Chicago, IL 60653</td>
                                <td>3</td>
                                <td><span className="badge badge-warning">Pending</span></td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Hossein</td>
                                <td>IPONE-7</td>
                                <td>Porterfield 508 Virginia Street Chicago, IL 60653</td>
                                <td>3</td>
                                <td><span className="badge badge-success">DONE</span></td>
                                
                            </tr>
                            <tr>
                            <th scope="row">5</th>
                                <td>Hossein</td>
                                <td>IPONE-7</td>
                                <td>Porterfield 508 Virginia Street Chicago, IL 60653</td>
                                <td>3</td>
                                <td><span className="badge badge-default">Delivered</span></td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>Hossein</td>
                                <td>IPONE-7</td>
                                <td>Porterfield 508 Virginia Street Chicago, IL 60653</td>
                                <td>3</td>
                                <td><span className="badge badge-warning">Pending</span></td>
                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td>Hossein</td>
                                <td>IPONE-7</td>
                                <td>Porterfield 508 Virginia Street Chicago, IL 60653</td>
                                <td>3</td>
                                <td><span className="badge badge-warning">Pending</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default TabelRecentOrders;
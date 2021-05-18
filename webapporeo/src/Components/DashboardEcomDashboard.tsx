import React from 'react'
import '../CSS/DashboardEcomerrce.css'
import EarningsBarChart from '../Components/EarningsBarChart'
import TextAreaCharts from '../Components/TextAreaCharts'
import NestedCurveAreaChart from '../Components/NestedCurveAreaChart'
import BarChartContainer from '../Components/ecommerceDashboardBarchartContainer'
import TextAreaChartComponentEcommerce from '../Components/ecommerceTextAreacharts'
import NestedCurveAreaChartContainerEcom from '../Components/NestCurveChartContainerEcomDashboard'
import PieChartContainerEcomDashboard from '../Components/PieChartContainerEcomDashboard'
import TabelRecentOrders from '../Components/TabelRecentOrders'
export { }

class DashBoardEcommerce extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {

        }
    }

    render() {

        return (
            <>
                <div className="ecommerceDashboard-components-containers">
                    <BarChartContainer />
                    <div className="ecommerece-textarea-stats-containers">
                        <TextAreaChartComponentEcommerce />
                    </div>
                    <div className="ecommerece-curveCharts-dashboard">
                        <NestedCurveAreaChartContainerEcom />
                    </div>
                    <div className="ecommerece-piechart-dashboard">
                        <PieChartContainerEcomDashboard />
                    </div>

                    <div className="ecommerece-recent-orders-container">
                        <div className="recent-orders-tabel-heading"><span className="recent" style={{ color: "indigo" }}>Recent</span><span className="orders" >Orders</span></div>
                        <TabelRecentOrders />
                    </div>

                    <div className="newcustomer-rating-profile-info">

                       
                        <div className="newcutomer-rating-container">

                        <div className = "userrating-heading">
                        <span style={{color : "indigo"}}>New</span> <span>Customer</span> <span>Rating</span>

                        </div>

                            <div className="userrating-container">

                            <div className = "userrating-info">
                                <div className = "avatar-userrating-info"><img className = "img-userrating" src= "https://thememakker.com/templates/oreo/html/assets/images/sm/avatar2.jpg"></img> </div>
                                <div className = "avatar-desc-userating-info">

                                    <div className = "avatar-name-userating-info">HOSSEIN SHAMS</div>
                                    <div className = "avatar-comments-userating-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum facilis, qui molestiae adipisci!</div>
                                    <div className = "avatar-badges-ratings"><div className="badge badge-info">iPhone 8</div>
                                    
                                    <span className="m-l-10">
                                        <a href="javascript:void(0);"><i className="zmdi zmdi-star col-amber" style = {{color : "gold"}}></i></a>
                                        <a href="javascript:void(0);"><i className="zmdi zmdi-star col-amber" style = {{color : "gold"}}></i></a>
                                        <a href="javascript:void(0);"><i className="zmdi zmdi-star col-amber" style = {{color : "gold"}}></i></a>
                                        <a href="javascript:void(0);"><i className="zmdi zmdi-star col-amber" style = {{color : "gold"}}></i></a>
                                        <a href="javascript:void(0);"><i className="zmdi zmdi-star col-amber" style = {{color : "grey"}}></i></a>
                                    </span>
                                    </div>
                                </div>
                            </div>

                            <div className = "userrating-info">
                                <div className = "avatar-userrating-info"><img className = "img-userrating" src= "https://thememakker.com/templates/oreo/html/assets/images/sm/avatar3.jpg"></img> </div>
                                <div className = "avatar-desc-userating-info">

                                <div className = "avatar-name-userating-info">HOSSEIN SHAMS</div>
                                    <div className = "avatar-comments-userating-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum facilis, qui molestiae adipisci!</div>
                                    <div className = "avatar-badges-ratings"><div className="badge badge-info">iPhone 8</div>
                                    
                                    <span className="m-l-10">
                                        <a href="javascript:void(0);"><i className="zmdi zmdi-star col-amber" style = {{color : "gold"}}></i></a>
                                        <a href="javascript:void(0);"><i className="zmdi zmdi-star col-amber" style = {{color : "gold"}}></i></a>
                                        <a href="javascript:void(0);"><i className="zmdi zmdi-star col-amber" style = {{color : "gold"}}></i></a>
                                        <a href="javascript:void(0);"><i className="zmdi zmdi-star col-amber" style = {{color : "gold"}}></i></a>
                                        <a href="javascript:void(0);"><i className="zmdi zmdi-star col-amber" style = {{color : "grey"}}></i></a>
                                    </span>
                                    </div>
                                </div>
                            </div>

                            <div className = "userrating-info">
                                <div className = "avatar-userrating-info"><img className = "img-userrating" src= "https://thememakker.com/templates/oreo/html/assets/images/sm/avatar4.jpg"></img> </div>
                                <div className = "avatar-desc-userating-info">

                                <div className = "avatar-name-userating-info">HOSSEIN SHAMS</div>
                                    <div className = "avatar-comments-userating-info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum facilis, qui molestiae adipisci!</div>
                                    <div className = "avatar-badges-ratings"><div className="badge badge-info">iPhone 8</div>
                                    
                                    <span className="m-l-10">
                                        <a href="javascript:void(0);"><i className="zmdi zmdi-star col-amber" style = {{color : "gold"}}></i></a>
                                        <a href="javascript:void(0);"><i className="zmdi zmdi-star col-amber" style = {{color : "gold"}}></i></a>
                                        <a href="javascript:void(0);"><i className="zmdi zmdi-star col-amber" style = {{color : "gold"}}></i></a>
                                        <a href="javascript:void(0);"><i className="zmdi zmdi-star col-amber" style = {{color : "gold"}}></i></a>
                                        <a href="javascript:void(0);"><i className="zmdi zmdi-star col-amber" style = {{color : "grey"}}></i></a>
                                    </span>
                                    </div>
                                </div>
                            </div>


                            </div>

                        </div>
                        <div className="profile-ecom-container">
                            <div className = "name-profile-container"><span className ="nameproffile">Matthew Deo</span></div>
                            <div className = "img-profile-container"> <img  className = "imgprofile" src= "https://thememakker.com/templates/oreo/html/assets/images/lg/avatar3.jpg"/></div>
                            <div className = "profile-icons-container">
                            <i className="zmdi zmdi-facebook" style = {{color : "orange" , margin : "10px", fontSize : "25px"}}></i>
                            <i className="zmdi zmdi-twitter"style = {{color : "orange" , margin : "10px", fontSize : "25px"}} ></i>
                            <i className="zmdi zmdi-instagram" style = {{color : "orange" , margin : "10px", fontSize : "25px"}}></i>


                            </div>
                            <div className = "profile-address-container"><span className = "addressprofile">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</span></div>
                            <div className = "profile-stats-container">
                                <div className = "profile-buy-stats">

                                <div className = "numberstatsprofile">98</div>

                            <div className = "numberstatsdesc">Item Buy</div>
                                </div>
                                <div className = "profile-mobile-stats">
                                <div className = "numberstatsprofile">78</div>
                                <div className = "numberstatsdesc">Mobile</div>
                                </div>
                                <div className = "profile-spent-stats"> 
                                <div className = "numberstatsprofile">2,046$</div>
                                <div className = "numberstatsdesc">Spent</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default DashBoardEcommerce;
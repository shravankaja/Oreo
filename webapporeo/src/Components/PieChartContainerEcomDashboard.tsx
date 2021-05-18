import React from 'react'
import PieChart from '../Components/PieChart'
import SmallBarCharts from '../Components/smallBarcharts'

export{}

class PieChartContainerEcomDashboard extends React.Component {
    constructor(props:any) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <>
            <div className = "piechart-main-container">
            <div className = "piechart-heading">
                <div className = "pir-head"><span style = {{color : "indigo" , margin : "10px"}}>Total</span><span>Revenue</span></div>
            </div>
            <div className = "piechart-sales-heading">
            <span>Total Sales</span>
            <span>2,45,124</span>
            </div>
            <div className = "piechart-actual-container">
            <PieChart />
            </div>
            <div className = "statisfaction-rate-container">
                <div className = "sastisfaction-rate-heading">Statisfaction Rate</div>
                <div className = "sastisfaction-rate-desc">47% Average <i className="zmdi zmdi-trending-up"></i></div>
            <SmallBarCharts />
            </div>
            </div>
            </>
        )
    }
}

export  default PieChartContainerEcomDashboard;
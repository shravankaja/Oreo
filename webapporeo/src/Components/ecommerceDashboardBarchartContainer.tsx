import React from 'react'
import EarningsBarChart from '../Components/EarningsBarChart'
export { }

class BarChartContainer extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <>
                <div className="maincoantianer-barchart-ecommerce">
                    <div className="barchart-ecommerce-heading"><span className="product-barchart-heading">Product</span><span
                        className="report-barchart-heading">Report</span></div>
                    <div className="barchart-summary-stats">
                        <div className="report-tabs-barchart-ecommerce">
                            <div className="report-tabs-icon-barchart-ecommerce"><div className="report-tabs-icon-container">
                                <i className="zmdi zmdi-chart-donut"></i></div></div>
                            <div className="report-tabs-desc-barchart-ecommerce">
                                <div className="report-tabs-desc-heading">
                                    Sales Report
                                </div>
                                <div className="report-tabs-desc-figures">
                                    $4,567
                                </div>
                            </div>
                        </div>
                        <div className="report-tabs-barchart-ecommerce">
                            <div className="report-tabs-icon-barchart-ecommerce"><div className="report-tabs-icon-container">
                                <i className="zmdi zmdi-chart"></i></div></div>
                            <div className="report-tabs-desc-barchart-ecommerce">
                                <div className="report-tabs-desc-heading">
                                    Revenue
                                </div>
                                <div className="report-tabs-desc-figures">
                                    $6,481
                                </div>
                            </div>
                        </div>
                        <div className="report-tabs-barchart-ecommerce">
                            <div className="report-tabs-icon-barchart-ecommerce"><div className="report-tabs-icon-container">
                                <i className="zmdi zmdi-card"></i></div></div>
                            <div className="report-tabs-desc-barchart-ecommerce">
                                <div className="report-tabs-desc-heading">
                                    Total Profit
                                </div>
                                <div className="report-tabs-desc-figures">
                                    $3,915
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="barchart-ecommerce"><EarningsBarChart /></div>
                </div>
            </>
        )
    }
}

export default BarChartContainer;
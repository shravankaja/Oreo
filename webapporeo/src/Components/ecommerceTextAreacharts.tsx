import React from 'react'
import TextAreaCharts from '../Components/TextAreaCharts'
export { }

class TextAreaChartComponentEcommerce extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <>
                <div className="small-textarea-ecommerce-container">
                <div className = "revenue-source-ecommerce-contianer"><span className ="blue-smalltextarea">Orders</span><span>Received</span></div>
                <div className = "revnue-stats"><span className = "revenue-stat-number-ecommerce">47,215</span></div>
                <div className = "revenue-desc">
                <span className = "revnue-smalldesc">23% Average <i className="zmdi zmdi-trending-up"></i></span>
                </div>
                  <div className = "small-textarea-chart-container">
                    <TextAreaCharts />
            </div>
                </div>
                <div className="small-textarea-ecommerce-container">
                <div className = "revenue-source-ecommerce-contianer"><span className ="blue-smalltextarea">Total</span><span>Sales</span></div>
                <div className = "revnue-stats"><span className = "revenue-stat-number-ecommerce">512</span></div>
                <div className = "revenue-desc">
                <span className = "revnue-smalldesc">18% Average <i className="zmdi zmdi-trending-down"></i></span>
                </div>
                  <div className = "small-textarea-chart-container">
                    <TextAreaCharts />
            </div>
                </div>

                <div className="small-textarea-ecommerce-container">
                <div className = "revenue-source-ecommerce-contianer"><span className ="blue-smalltextarea">Revenue</span></div>
                <div className = "revnue-stats"><span className = "revenue-stat-number-ecommerce">1,612</span></div>
                <div className = "revenue-desc">
                <span className = "revnue-smalldesc">13% Average <i className="zmdi zmdi-trending-up"></i></span>
                </div>
                  <div className = "small-textarea-chart-container">
                    <TextAreaCharts />
            </div>
                </div>
            </>
        )
    }
}

export default TextAreaChartComponentEcommerce;
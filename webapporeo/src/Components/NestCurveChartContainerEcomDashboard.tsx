import { indigo } from '@material-ui/core/colors'
import React from 'react'
import  NestedCurveAreaChart from '../Components/NestedCurveAreaChart'

export{}

class NestedCurveAreaChartContainerEcom extends React.Component {
    constructor(props:any) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <>
            <div className = "nested-curvechart-main-container-ecom">
                <div className = "nested-curve-chart-heading-subheading">
                    <div className = "nested-curve-chart-heading">
                <span style = {{color : "indigo", margin : "9px"}}>Annual</span> <span  style = {{margin : "9px"}}>Report</span>
                </div>
                    <div className = "note-nested-curve-container">
                        <span style = {{color : "indigo"}}>Note : </span> <span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span>
                    </div>
                    </div>
            
                <div className = "nested-curvechart-ecom">
                    <NestedCurveAreaChart />
                </div>

            </div>
            </>
        )
    }
}

export default NestedCurveAreaChartContainerEcom;
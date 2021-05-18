import React from 'react'
import { VictoryArea, VictoryChart, VictoryVoronoiContainer, VictoryTooltip, VictoryAxis } from 'victory'
import { fetchCurveAreaChartsData, fetchSmallTextAreaChartsData } from '../Services/DataFetch'
export { }

interface StateType {
    curveDataOne: [{ x: number, y: number, label: number }],
    curveDataTwo: [{ x: number, y: number, label: number }],
    curveDataThree: [{ x: number, y: number, label: number }],
}

class NestedCurveAreaChart extends React.Component<{}, StateType> {
    constructor(props: any) {
        super(props)
        this.state = {
            curveDataOne: [{ x: 0, y: 0, label: 0 }],
            curveDataTwo: [{ x: 0, y: 0, label: 0 }],
            curveDataThree: [{ x: 0, y: 0, label: 0 }]
        }
    }


    render() {
        return (
            <>
                <div className="nestcurvearea-ecommerceDashboard">
                    <VictoryChart containerComponent={
                        <VictoryVoronoiContainer

                            labelComponent={
                                <VictoryTooltip dy={1} constrainToVisibleArea />
                            }

                        />} width={1000} >
                        <VictoryAxis tickValues={[2, 4, 6, 8, 10, 12, 14]}
                            tickFormat={["2011", "2012", "2013", "2014", "2015", "2016", "2017"]}
                        />
                        <VictoryAxis dependentAxis
                            tickValues={[0.5, 1, 1.5, 2, 2.5]}
                            tickFormat={["0", "50", "100", "150", "200"]}
                        />
                        <VictoryArea
                            interpolation="natural"
                            labelComponent={<VictoryTooltip />}
                            data={this.state.curveDataOne}
                            style={{
                                data: { fill: "blue", width: 20, opacity: 0.5 }
                            }}
                        />
                        <VictoryArea
                            interpolation="natural"
                            labelComponent={<VictoryTooltip />}
                            data={this.state.curveDataTwo}
                            style={{
                                data: { fill: "yellow", width: 20, opacity: 0.7 }
                            }}
                        />
                        <VictoryArea
                            interpolation="natural"
                            labelComponent={<VictoryTooltip />}
                            data={this.state.curveDataThree}
                            style={{
                                data: { fill: "pink", width: 20, opacity: 0.8 }
                            }}
                        />
                    </VictoryChart>
                </div>
            </>
        )
    }

    componentDidMount() {
        fetchCurveAreaChartsData().then((resp: any) => {
            this.setState({ curveDataOne: resp.curveOne, curveDataTwo: resp.curveTwo, curveDataThree: resp.curveThree })
        })
    }
}

export default NestedCurveAreaChart;
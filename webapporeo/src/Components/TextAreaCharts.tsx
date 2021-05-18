import React from 'react'
import { VictoryBar, VictoryChart, VictoryArea, VictoryTooltip, VictoryVoronoiContainer, VictoryAxis } from 'victory'
import { fetchSmallTextAreaChartsData } from '../Services/DataFetch'
export { }

interface StateType {
    dataSmallAreaChart: [{ x: number, y: number, y0: number, label: number }]
}
class TextAreaCharts extends React.Component<{}, StateType> {
    constructor(props: any) {
        super(props)
        this.state = {
            dataSmallAreaChart: [{ x: 0, y: 0, y0: 0, label: 0 }]
        }
    }

    render() {
        return (
            <>
                <div className="smalltextareacharts-ecommercedashboards">
                    <VictoryChart containerComponent={


                        <VictoryVoronoiContainer

                            labelComponent={
                                <VictoryTooltip dy={100} constrainToVisibleArea style={{ width: 100 }} />
                            }



                        />} domainPadding={{ x: 0 }}
                        width={1000}
                        padding={{ top: 10, bottom: 150, right: 0, left: 0 }}      >

                        <VictoryArea


                            labelComponent={<VictoryTooltip style={{ fontSize: '30px' }} flyoutWidth={50} />}
                            data={this.state.dataSmallAreaChart}


                            style={{
                                data: { fill: "blue", width: 100, opacity: 0.3 }
                            }}
                        />
                    </VictoryChart>

                </div>
            </>

        )
    }

    componentDidMount() {
        fetchSmallTextAreaChartsData().then((resp: any) => {
            this.setState({ dataSmallAreaChart: resp })
        })
    }
}

export default TextAreaCharts;
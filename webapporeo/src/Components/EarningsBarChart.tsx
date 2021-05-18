import React from 'react'
import { VictoryTheme, VictoryAxis, VictoryBar, VictoryChart, VictoryStack } from 'victory'
import '../CSS/EarningsBarChart.css'
import { fetchBarchart } from '../Services/DataFetch'
declare namespace JSX {
    interface IntrinsicElements {
        VictoryBar: any;
    }
}
export { }

interface StateType {
    dataOne: [{ p: number, earnings: number }],
    width: string,
    dataTwo: [{ p: number, earnings: number }],
    dataThree: [{ p: number, earnings: number }]

}


class EarningsBarChart extends React.Component<{}, StateType> {
    constructor(props: any) {
        super(props)
        this.state = {
            width: "100px",
            dataOne: [{ p: 0, earnings: 0 }],
            dataTwo: [{ p: 0, earnings: 0 }],
            dataThree: [{ p: 0, earnings: 0 }]
        }

    }

    render() {

        const setWidth = {
            width: "800px"
        }
        return (
            <>
                <div className="chartContainer-ecommerece">
                    <VictoryChart domainPadding={50} theme={VictoryTheme.material}
                        height={800}
                        width={2900}>
                        <VictoryAxis
                            tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}

                            tickFormat={["0.0", "1.0", "2.0", "3.0", "4.0", "5.0", "6.0", "7.0", "8.0", "9.0", "10.0"]}
                            style={{ tickLabels: { fontSize: 30 } }}
                        />

                        <VictoryAxis
                            dependentAxis
                            tickValues={[10, 20, 30, 40, 50, 60]}
                            tickFormat={["10", "20", "30", "40", "50", "60"]}
                            style={{ tickLabels: { fontSize: 30 } }}
                        />
                        <VictoryStack>
                            <VictoryBar
                                style={{
                                    data: { fill: "lightblue" }
                                }}

                                barWidth={86}
                                data={this.state.dataOne}

                                x="p"

                                y="earnings"

                            />
                            <VictoryBar
                                style={{
                                    data: { fill: "orange" },
                                }}

                                barWidth={86}

                                data={this.state.dataTwo}

                                x="p"

                                y="earnings"

                            />

                            <VictoryBar
                                style={{
                                    data: { fill: "#424787" }
                                }}

                                data={this.state.dataThree}

                                barWidth={86}

                                x="p"

                                y="earnings"

                            />


                        </VictoryStack>
                    </VictoryChart>
                </div>
            </>
        )
    }

    componentDidMount() {
        fetchBarchart().then((resp: any) => {
            this.setState({ dataOne: resp[0].dataBarOne, dataTwo: resp[1].dataBarTwo, dataThree: resp[2].dataBarThree })

        })
    }
}

export default EarningsBarChart;
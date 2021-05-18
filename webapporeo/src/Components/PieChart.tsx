import React from 'react'
import axios from 'axios'
import { VictoryPie, VictoryLabel, VictoryArea, VictoryAxis } from 'victory'
import {fetchPieChartValues} from '../Services/DataFetch'
export { }

interface IState {
    y1: number,
    y2 : number
  }

class PieChart extends React.Component<{},IState> {
    
    constructor(props: any) {
        super(props)
        this.state = {
            y1 : 0,
            y2 : 0
        }

        
    }

    render() {
        return (
            <>
            <div className = "piechart-container-forecom">
                <svg viewBox="-180 50 700 700">
                    <VictoryPie
                
                        standalone={false}
                        width={400} height={400}
                        data={[
                            { x: "", y: this.state.y1  }, { x: "",  y: 40 } 
                        ]}
                        innerRadius={118} labelRadius={100}
                        style={{ labels: { fontSize: 20, fill: "white" } }}
                        
                    />
                    <VictoryAxis />
                    <VictoryLabel
                        textAnchor="middle"
                        style={{ fontSize: 50 }}
                        x={200} y={200}
                        text="66%"
                    />
                    </svg>
                    </div>
            </>
        )
    }

    componentDidMount() {
     
        fetchPieChartValues().then( (resp : any) => 
            {
                this.setState({ y1 : resp.y1, y2 : resp.y2})
            })

    }
}

export default PieChart;
import React from 'react'
import { VictoryBar } from 'victory'
export { }

class SmallBarCharts extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {

        }
    }


    render() {
        return (
            <>
                <div className = "smallcharts-container">
                    <VictoryBar
                        data={[{ x: 1, y: 2 },
                        { x: 2, y: 3 },
                        { x: 3, y: 2 },
                        { x: 4, y: 2 },
                        { x: 5, y: 0.5 },
                        { x: 6, y: 0.8 },
                        { x: 7, y: 1.4 },


                        ]}

                    />
                </div>
            </>
        )
    }
}

export default SmallBarCharts;
import React from 'react'
export{}

class  DescTabProductDetail extends React.Component<{data : any, data1 : any}> {
    constructor(props:any) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <>
            <div className = "DescTabProductDetail-conainer">
              <span>{this.props.data}</span>  
               <span>{this.props.data1}</span>
            </div>
            </>
        )
    }
}

export default DescTabProductDetail;
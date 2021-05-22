import React from 'react'

export{}

class AboutTabProductDetail extends React.Component<{data : any}> {
    constructor(props:any) {
        super(props)
    }

    render() {
        return(
            <>
            <div className = "AboutTabProductDetail">
                <div className = "aboutTabProductheading">Where does it come from?</div>
                <div className = "aboutactual">{this.props.data.About}</div>
                </div> 
            </>
        )
    }
}

export default AboutTabProductDetail;
import React, { isValidElement } from 'react'

export{}

type propsForHeading = {
    mainHeading : string,
    subHeading : string
};

class PageHeadingContainer extends React.Component<propsForHeading> {
    constructor(props:any){
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <>
            <div className = "page-heading-container-Common">
                <div className = "mainContainer-page-heading">
                <div className = "headingsContaineer-page-heading">
                <div className = "MainHeading-page-heading">{this.props.mainHeading}</div>
                <div className = "headingDesc-page-heading">{this.props.subHeading}</div>
                </div>
                <div className = "tabselector-page-heading">
                    <div className = "tabeselector-elements=page-heading"><i className="zmdi zmdi-home">Home</i></div>
                    <div className = "tabeselector-elements=page-heading">/</div>
                    <div className = "tabeselector-elements=page-heading">eCommerce</div>
                    <div className = "tabeselector-elements=page-heading">/</div>
                    <div className = "tabeselector-elements=page-heading">Dashboard</div>
                </div>
                </div>
            </div>
            </>
        )

    }
}

export default PageHeadingContainer;
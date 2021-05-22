import React from 'react'

export {}

interface StateType {
    arr : any
}

class TabReviewProductDetail extends React.Component<{data:any, noOfReviews :  number}, StateType> {
    constructor(props:any) {
        super(props)

        this.state ={
                arr : []
        }
    }

    componentDidMount() {
       let arrDup =[]
        for(let i=0; i < this.props.noOfReviews ; i++) {
           arrDup.push(i)
       }
       this.setState({arr : [...arrDup]}, () => {
           console.log(this.state.arr)
       })
      
    }

    render() {
        return(
            <>
            <div className = "Review-tab-product-detail"> 
                <div className = "review-tab-first-ele">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied</div>
                
                {this.state.arr.map((no : number) => 
                
                <div className = "review-1-ele">
                    <div className = "pic-review"><img className = "review-img" src= {this.props.data.reviews[no].img} /> </div>
                    <div className = "review-actual">
                        <span>{this.props.data.reviews[no].name}</span>
                        <span>{this.props.data.reviews[no].review}</span>
                        <span id = "goldStars"> <span className="m-l-10" >
                                        <a href="javascript:void(0);"><i className="zmdi zmdi-star col-amber" style={{ color: "gold" }}></i></a>
                                        <a href="javascript:void(0);"><i className="zmdi zmdi-star col-amber" style={{ color: "gold" }}></i></a>
                                        <a href="javascript:void(0);"><i className="zmdi zmdi-star col-amber" style={{ color: "gold" }}></i></a>
                                        <a href="javascript:void(0);"><i className="zmdi zmdi-star col-amber" style={{ color: "gold" }}></i></a>
                                        <a href="javascript:void(0);"><i className="zmdi zmdi-star col-amber" style={{ color: "grey" }}></i></a>
                                        <span>{this.props.data.reviews[no].rating}</span>
                                    </span></span>
                    </div> 
                </div>
                )}
                
            </div>
            </>
        )
    }
}

export default TabReviewProductDetail;
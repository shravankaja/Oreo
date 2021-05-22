import React, { MouseEvent } from 'react'
import { StringLiteralType } from 'typescript'
import '../CSS/ProductDetail.css'
import { fetchParticularProductData, fetchSmallTextAreaChartsData } from '../Services/DataFetch'
import DescTabProductDetail from '../Components/DescTabProductDetail'
import TabReviewProductDetail from '../Components/TabReviewProductDetail'
import AboutTabProductDetail from '../Components/AboutProuctDetailTab'
export { }

interface stateType {
    product: any,
    tabStatus: string
}

class ProductDetail extends React.Component<{ idOfProduct: number }, stateType> {
    constructor(props: any) {
        super(props)
        this.state = {
            product: null,
            tabStatus: "Desc"
        }
    }
    handleTabClick = (event: MouseEvent) => {
        if (event.currentTarget.id == "review") {
            this.setState({ tabStatus: "Review" })
        }
        else if (event.currentTarget.id == "about") {
            this.setState({ tabStatus: "About" })
        }
        else if (event.currentTarget.id == "desc") {
            this.setState({ tabStatus: "Desc" })
        }
    }

    render() {
        return (
            <>
                {this.state.product?.map((data: any) =>
                    <div className="product-detail-map-container">
                        <div className="product-detail-main-container">

                            <div className="product-detail-img-desc-container">

                                <div className="product-detail-img-main-contaienr"><img className="img-product-detail-main" src={data.MainImg} /></div>
                                <div className="product-detail-imgdesc-main-container">
                                    <div className="product-detail-imgdesc-title">{data.name}</div>
                                    <div className="product-detail-imgdesc-pricetag">Current Price: <span style={{ color: "yellow", marginLeft: "10px" }}>{data.Price}</span></div>
                                    <div className="product-detail-imgdesc-reviews">  <span className="m-l-10">
                                        <a href="javascript:void(0);"><i className="zmdi zmdi-star col-amber" style={{ color: "gold" }}></i></a>
                                        <a href="javascript:void(0);"><i className="zmdi zmdi-star col-amber" style={{ color: "gold" }}></i></a>
                                        <a href="javascript:void(0);"><i className="zmdi zmdi-star col-amber" style={{ color: "gold" }}></i></a>
                                        <a href="javascript:void(0);"><i className="zmdi zmdi-star col-amber" style={{ color: "gold" }}></i></a>
                                        <a href="javascript:void(0);"><i className="zmdi zmdi-star col-amber" style={{ color: "grey" }}></i></a>
                                        <span>{data.avgRating}</span>
                                    </span></div>
                                    <div className="product-detail-imgdesc-smalldesc">{data.LongDescParaOne}</div>
                                    <div className="product-detail-imgdesc-percentagebuyers">{data.PercentageOfBuyers} of buyers enjoyed this product! (23 votes)</div>
                                    <div className="product-detail-imgdesc-sizes">
                                        <span>sizes :</span>
                                        <span> {data.sizes[0]}</span>
                                        <span>{data.sizes[1]}</span>
                                        <span>{data.sizes[2]}</span>
                                        <span>{data.sizes[3]}</span>

                                    </div>

                                    <div className="product-detail-imgdesc-colors">
                                        <span>Colors :</span>
                                        <span className="product-detail-colorbox" style={{ backgroundColor: "yellow" }}></span>
                                        <span className="product-detail-colorbox" style={{ backgroundColor: "Green" }}></span>
                                        <span className="product-detail-colorbox" style={{ backgroundColor: "Blue" }}></span>
                                    </div>
                                </div>
                            </div>


                            <div className="product-detail-otherimgs-addtocart-container">
                                <div className="product-detail-otherimgs-container">
                                    <div className="imgs-others-product-detail"><img className="otherimg-productdetail-size" src={data.OtherImgUrls[0]} /></div>
                                    <div className="imgs-others-product-detail"><img className="otherimg-productdetail-size" src={data.OtherImgUrls[0]} /></div>
                                    <div className="imgs-others-product-detail"><img className="otherimg-productdetail-size" src={data.OtherImgUrls[0]} /></div>
                                    <div className="imgs-others-product-detail"><img className="otherimg-productdetail-size" src={data.OtherImgUrls[0]} /></div>
                                    <div className="imgs-others-product-detail"><img className="otherimg-productdetail-size" src={data.OtherImgUrls[0]} /></div>
                                </div>

                                <div className="Addtocart-product-detail" ><span>Add to cart</span></div>
                                <span className="zmdi zmdi-favorite" id="favorite" style={{ color: "rgb(62, 72, 216)", fontSize: "30px" }}></span>
                            </div>

                        </div>

                        <div className="product-detail-tab">
                            <div className="product-detail-tab-button" id="desc" onClick={this.handleTabClick}>
                                <span id="desc1">Description</span>
                            </div>
                            <div className="product-detail-tab-button" id="review" onClick={this.handleTabClick}>
                                <span id="review1">Review </span>
                            </div>

                            <div className="product-detail-tab-button" id="about" onClick={this.handleTabClick}>
                                <span id="about1">About</span>
                            </div>
                        </div>

                        <div className="product-detail-tab-desc-of-all">
                            {this.state.tabStatus == "Desc" ? <DescTabProductDetail data1={data.LongDescParaOne} data={data.LongDescParaTwo} /> : this.state.tabStatus == "Review" ? <TabReviewProductDetail noOfReviews={3} data={data} /> :
                                this.state.tabStatus == "About" ? <AboutTabProductDetail data={data} /> : <> </>
                            }

                        </div>

                    </div>

                )}

            </>
        )
    }

    componentDidMount() {

        fetchParticularProductData(this.props.idOfProduct).then((resp: any) => {
            console.log(resp)
            this.setState({ product: Array(resp) })
        })
    }
}

export default ProductDetail;
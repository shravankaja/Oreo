import React from 'react'
import '../CSS/Product.css'
import { fetchProductData } from '../Services/DataFetch'

export { }

interface ObjType {
    title: string, actualPrice: number, discountedPrice: number, img: string

}



interface StateType {
    product: [ObjType, ObjType, ObjType, ObjType, ObjType, ObjType, ObjType, ObjType, ObjType]
}

class Product extends React.Component<{}, StateType> {
    constructor(props: any) {
        super(props)
        this.state = {
            product: [{ title: "", actualPrice: 0, discountedPrice: 0, img: "" }, { title: "", actualPrice: 0, discountedPrice: 0, img: "" }, {
                title: "", actualPrice: 0, discountedPrice: 0, img: ""
            }, { title: "", actualPrice: 0, discountedPrice: 0, img: "" }, { title: "", actualPrice: 0, discountedPrice: 0, img: "" }, {
                title: "", actualPrice: 0, discountedPrice: 0, img: ""
            }, { title: "", actualPrice: 0, discountedPrice: 0, img: "" }, { title: "", actualPrice: 0, discountedPrice: 0, img: "" }, {
                title: "", actualPrice: 0, discountedPrice: 0, img: ""
            }]
        }
    }

    render() {
        return (
            <>
                <div className="prouct-maincontainer-display">
                    <div className="product-display-column">

                        <div className="product-display-box">
                            <div className="product-display-img-container">
                                <img className="product-display-img" src={this.state.product[0].img} />
                                <div className="product-display-img-button-container">
                                    <button className="buttons-product-display"><i className="zmdi zmdi-plus"></i></button>
                                    <button className="buttons-product-display"><i className="zmdi zmdi-shopping-cart"></i></button>
                                </div>

                            </div>
                            <div className="product-display-img-desc">
                                <div className="product-display-title"><span>{this.state.product[0].title}</span> </div>
                                <div className="prudct-display-price-tag"><span style={{ marginRight: "17%" }}>{this.state.product[0].actualPrice}</span><span style={{ color: "red" }}>{this.state.product[0].discountedPrice}</span> </div>
                            </div>
                        </div>


                        <div className="product-display-box">
                            <div className="product-display-img-container">
                                <img className="product-display-img" src={this.state.product[1].img} />
                                <div className="product-display-img-button-container">
                                    <button className="buttons-product-display"><i className="zmdi zmdi-plus"></i></button>
                                    <button className="buttons-product-display"><i className="zmdi zmdi-shopping-cart"></i></button>
                                </div>
                            </div>
                            <div className="product-display-img-desc">
                                <div className="product-display-title"><span>{this.state.product[1].title}</span> </div>
                                <div className="prudct-display-price-tag"><span style={{ marginRight: "17%" }}>{this.state.product[1].actualPrice}</span><span style={{ color: "red" }}>{this.state.product[1].discountedPrice}</span> </div>
                            </div>
                        </div>
                        <div className="product-display-box">
                            <div className="product-display-img-container">
                                <img className="product-display-img" src={this.state.product[2].img} />
                                <div className="product-display-img-button-container">
                                    <button className="buttons-product-display"><i className="zmdi zmdi-plus"></i></button>
                                    <button className="buttons-product-display"><i className="zmdi zmdi-shopping-cart"></i></button>
                                </div>
                            </div>
                            <div className="product-display-img-desc">
                                <div className="product-display-title"><span>{this.state.product[2].title}</span> </div>
                                <div className="prudct-display-price-tag"><span style={{ marginRight: "17%" }}>{this.state.product[2].actualPrice}</span><span style={{ color: "red" }}>{this.state.product[2].discountedPrice}</span> </div>
                            </div>
                        </div>

                    </div>

                    <div className="product-display-column">
                        <div className="product-display-box">
                            <div className="product-display-img-container">
                                <img className="product-display-img" src={this.state.product[3].img} />
                                <div className="product-display-img-button-container">
                                    <button className="buttons-product-display"><i className="zmdi zmdi-plus"></i></button>
                                    <button className="buttons-product-display"><i className="zmdi zmdi-shopping-cart"></i></button>
                                </div>
                            </div>
                            <div className="product-display-img-desc">
                                <div className="product-display-title"><span>{this.state.product[3].title}</span> </div>
                                <div className="prudct-display-price-tag"><span style={{ marginRight: "17%" }}>{this.state.product[3].actualPrice}</span><span style={{ color: "red" }}>{this.state.product[3].discountedPrice}</span> </div>
                            </div>
                        </div>
                        <div className="product-display-box">
                            <div className="product-display-img-container">
                                <img className="product-display-img" src={this.state.product[4].img} />
                                <div className="product-display-img-button-container">
                                    <button className="buttons-product-display"><i className="zmdi zmdi-plus"></i></button>
                                    <button className="buttons-product-display"><i className="zmdi zmdi-shopping-cart"></i></button>
                                </div>
                            </div>
                            <div className="product-display-img-desc">
                                <div className="product-display-title"><span>{this.state.product[4].title}</span> </div>
                                <div className="prudct-display-price-tag"><span style={{ marginRight: "17%" }}>{this.state.product[4].actualPrice}</span><span style={{ color: "red" }}>{this.state.product[4].discountedPrice}</span> </div>
                            </div>
                        </div>
                        <div className="product-display-box">
                            <div className="product-display-img-container">
                                <img className="product-display-img" src={this.state.product[5].img} />
                                <div className="product-display-img-button-container">
                                    <button className="buttons-product-display"><i className="zmdi zmdi-plus"></i></button>
                                    <button className="buttons-product-display"><i className="zmdi zmdi-shopping-cart"></i></button>
                                </div>
                            </div>
                            <div className="product-display-img-desc">
                                <div className="product-display-title"><span>{this.state.product[5].title}</span> </div>
                                <div className="prudct-display-price-tag"><span style={{ marginRight: "17%" }}>{this.state.product[5].actualPrice}</span><span style={{ color: "red" }}>{this.state.product[5].discountedPrice}</span> </div>
                            </div>
                        </div>

                    </div>

                    <div className="product-display-column">

                        <div className="product-display-box">
                            <div className="product-display-img-container">
                                <img className="product-display-img" src={this.state.product[6].img} />
                                <div className="product-display-img-button-container">
                                    <button className="buttons-product-display"><i className="zmdi zmdi-plus"></i></button>
                                    <button className="buttons-product-display"><i className="zmdi zmdi-shopping-cart"></i></button>
                                </div>
                            </div>
                            <div className="product-display-img-desc">
                                <div className="product-display-title"><span>{this.state.product[6].title}</span> </div>
                                <div className="prudct-display-price-tag"><span style={{ marginRight: "17%" }}>{this.state.product[6].actualPrice}</span><span style={{ color: "red" }}>{this.state.product[6].discountedPrice}</span> </div>
                            </div>
                        </div>
                        <div className="product-display-box">
                            <div className="product-display-img-container">
                                <img className="product-display-img" src={this.state.product[7].img} />
                                <div className="product-display-img-button-container">
                                    <button className="buttons-product-display"><i className="zmdi zmdi-plus"></i></button>
                                    <button className="buttons-product-display"><i className="zmdi zmdi-shopping-cart"></i></button>
                                </div>
                            </div>
                            <div className="product-display-img-desc">
                                <div className="product-display-title"><span>{this.state.product[7].title}</span> </div>
                                <div className="prudct-display-price-tag"><span style={{ marginRight: "17%" }}>{this.state.product[7].actualPrice}</span><span style={{ color: "red" }}>{this.state.product[7].discountedPrice}</span> </div>
                            </div>
                        </div>
                        <div className="product-display-box">
                            <div className="product-display-img-container">
                                <img className="product-display-img" src={this.state.product[8].img} />
                                <div className="product-display-img-button-container">
                                    <button className="buttons-product-display"><i className="zmdi zmdi-plus"></i></button>
                                    <button className="buttons-product-display"><i className="zmdi zmdi-shopping-cart"></i></button>
                                </div>
                            </div>
                            <div className="product-display-img-desc">
                                <div className="product-display-title"><span>{this.state.product[8].title}</span> </div>
                                <div className="prudct-display-price-tag"><span style={{ marginRight: "17%" }}>{this.state.product[8].actualPrice}</span><span style={{ color: "red" }}>{this.state.product[8].discountedPrice}</span> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    componentDidMount() {
        fetchProductData().then((resp: any) => {
            let objArray: any = []
            resp.forEach((element: any) => {
                let obj: ObjType = {
                    title: element.name, actualPrice: element.Price, discountedPrice: element.DiscountedPrice, img: element.MainImg
                }
                objArray.push(obj)

            });
            console.log(objArray)
            this.setState({ product: objArray })
        })
    }
}

export default Product;
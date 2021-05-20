import { TransferWithinAStationSharp } from '@material-ui/icons'
import React from 'react'
import '../CSS/Product.css'
import { fetchProductData } from '../Services/DataFetch'

export { }

interface ObjType {
    title: string, actualPrice: number, discountedPrice: number, img: string

}


interface StateType {
    product: any
}

class Product extends React.Component<{}, StateType> {
    constructor(props: {}) {
        super(props)
        this.state = {
            product: null
        }
    }

    render() {
        return (
            <>
                <div className="prouct-maincontainer-display">
                    <div className="product-display-column">
                        {this.state.product?.map((data: any) =>
                            <div className="product-display-box">
                                <div className="product-display-img-container">
                                    <img className="product-display-img" src={data.MainImg} />
                                    <div className="product-display-img-button-container">
                                        <button className="buttons-product-display"><i className="zmdi zmdi-plus"></i></button>
                                        <button className="buttons-product-display"><i className="zmdi zmdi-shopping-cart"></i></button>
                                    </div>

                                </div>
                                <div className="product-display-img-desc">
                                    <div className="product-display-title"><span>{data.name}</span> </div>
                                    <div className="prudct-display-price-tag"><span style={{ marginRight: "17%" }}>{data.DiscountedPrice}</span><span style={{ color: "red" }}>{data.DiscountedPrice}</span> </div>
                                </div>
                            </div>
                        )
                        }
                    </div>
                </div>
            </>
        )
    }

    componentDidMount() {

        fetchProductData().then((resp: any) => {
            console.log(resp)
            this.setState({ product: resp })

            /*let objArray:any = []
            resp.forEach((element: any) => {
                let obj: ObjType = {
                    title: element.name, actualPrice: element.Price, discountedPrice: element.DiscountedPrice, img: element.MainImg
                }
                objArray.push(obj)

            });
            console.log(objArray)
            this.setState({ product: objArray })
            */
        })
    }
}

export default Product;
import { TransferWithinAStationSharp } from '@material-ui/icons'
import React, {MouseEvent} from 'react'
import '../CSS/Product.css'
import { fetchProductData } from '../Services/DataFetch'

export { }

interface StateType {
    product: any,
   
}


class Product extends React.Component<{listenToClickOnProduct : any}, StateType> {
    constructor(props: {listenToClickOnProduct : any}) {
        super(props)
        this.state = {
            product: null,
            
        }
    }

    handleProductDetail = (event : MouseEvent) =>{
            console.log(event?.target)
            this.props.listenToClickOnProduct(event.target)
    }

    render() {
        return (
            <>
                <div className="prouct-maincontainer-display">
                    <div className="product-display-column">
                        {this.state.product?.map((data: any) =>
                            <div className="product-display-box" id= {data.id} onClick = {this.handleProductDetail.bind(this)}>
                                <div className="product-display-img-container">
                                    <img className="product-display-img" id= {data.id} src={data.MainImg} />
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
                            )}
                    </div>
                </div>
            </>
        )
    }

    componentDidMount() {

        fetchProductData().then((resp: any) => {
            console.log(typeof(resp))
            console.log(resp)
            this.setState({ product: resp })
        })
    }
}

export default Product;
import React from 'react'
import '../CSS/ProductList.css'
import RowComponent from '../Components/ProductDetailsRowList'
import { fetchProductData } from '../Services/DataFetch'
export { }

interface ObjType {
    img: string,
    ProductName: string,
    DescSmall: string,
    ActualPrice: number,
    StatusStock: string
}

interface StateType {
    products: any
}

class ProductList extends React.Component<{}, StateType> {
    constructor(props: any) {
        super(props)

        this.state = {
            products: null
        }

    }

    tabelHead(jsxElement: any) {
        return jsxElement;
    }

    render() {


        return (
            <>
                <div className="productlist-main-container">
                    <div className="productlist-main-tabel-container">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Image</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Detail</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Stock</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody id="tbody">
                             { this.state.products?.map((data:any) =>
                                <RowComponent data = {data}/>
                             )

                             }
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }

    componentDidMount() {
        fetchProductData().then((resp: any) => {
            console.log(resp)
            this.setState({ products: resp })
        })
    }
}

export default ProductList;
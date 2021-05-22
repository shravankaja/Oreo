import '../CSS/DashBoardMainPageContainer.css'
import DashBoardEcommerce from '../Components/DashboardEcomDashboard'
import PageHeadingContainer from '../Components/PageHeadingContainer'
import Product from '../Components/Product'
import ProductList from '../Components/ProductList'
import ProductDetail from '../Components/ProductDetail'
import React, { useEffect } from 'react'
export { }

interface propsType {
    productDisplayStatus: any
}


function DashboardMainPageContainer(props: propsType) {
    const [pageStatus, setPageStatus] = React.useState({
        displayProductList: false, displayProducts: false, displayDashboard: true,
        pageHeading: "eCommerce Dashboard", subHead: "welcome to oreo", productDetail: false, propsToDetail: 0
    })


    useEffect(() => {
        console.log(props.productDisplayStatus)
        if (props.productDisplayStatus == "pl") {
            setPageStatus(prevState => ({
                ...prevState, displayProductList: true, displayDashboard: false, displayProducts: false, productDetail: false,
                pageHeading: "Product List", subHead: ""
            }));
        }
        else if (props.productDisplayStatus == "p") {
            setPageStatus(prevState => ({
                ...prevState, displayProductList: false, displayDashboard: false, displayProducts: true, productDetail: false,
                pageHeading: "Products", subHead: ""
            }))
        }
        else if (props.productDisplayStatus == "D") {
            setPageStatus(prevState => ({
                ...prevState, displayDashboard: true, pageHeading: "eCommerce Dashboard", subHead: "welcome to oreo",
                productDetail: false, displayProducts: false, displayProductList: false
            }))
        }
    },[props.productDisplayStatus])

    const handlEventFromProduct = (p : any, id: boolean) => {
    
        setPageStatus(prevState => ({ ...prevState, productDetail: true, displayDashboard: false, displayProductList: false, displayProducts: false, propsToDetail : p.id }))
    }


    return (
        <>
            <div className="dashboard-Main-Contianer">
                <PageHeadingContainer mainHeading={pageStatus.pageHeading} subHeading={pageStatus.subHead} />
                {pageStatus.displayDashboard ? <DashBoardEcommerce /> : pageStatus.displayProductList ? <ProductList /> : pageStatus.displayProducts ? <Product listenToClickOnProduct={handlEventFromProduct} /> : <ProductDetail idOfProduct={pageStatus.propsToDetail} />}

            </div>
        </>
    )
}

export default DashboardMainPageContainer;
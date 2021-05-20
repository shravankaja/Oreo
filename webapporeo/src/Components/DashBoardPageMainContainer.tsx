import '../CSS/DashBoardMainPageContainer.css'
import DashBoardEcommerce from '../Components/DashboardEcomDashboard'
import PageHeadingContainer from '../Components/PageHeadingContainer'
import Product from '../Components/Product'
import ProductList from '../Components/ProductList' 
import React, {useEffect} from 'react'
export {}

interface propsType {
    productDisplayStatus : any
}


function DashboardMainPageContainer(props:propsType) {
    const [pageStatus , setPageStatus] = React.useState({displayProductList : false , displayProducts : false, displayDashboard : true, 
     pageHeading : "eCommerce Dashboard", subHead : "welcome to oreo"})
   
    
    useEffect(() => {
        if(props.productDisplayStatus == "pl") {
            setPageStatus({...pageStatus, displayProductList : true, displayDashboard : false,
                pageHeading : "Product List", subHead : ""})
        }
        else if (props.productDisplayStatus == "p") {
            setPageStatus({...pageStatus, displayProductList : false, displayDashboard : false, displayProducts : true,
                pageHeading : "Products", subHead : ""})
        }
        else if(props.productDisplayStatus == "D") {
            setPageStatus({...pageStatus, displayDashboard : true, pageHeading : "eCommerce Dashboard", subHead : "welcome to oreo"})
        }
    })
    

    return (
        <>
            <div className="dashboard-Main-Contianer">
                <PageHeadingContainer mainHeading={pageStatus.pageHeading} subHeading={pageStatus.subHead} />
            {pageStatus.displayDashboard ? <DashBoardEcommerce/> : pageStatus.displayProductList ? <ProductList /> : <Product/> }
           
            </div>
        </>
    )
}

export default DashboardMainPageContainer;
import '../CSS/DashBoardMainPageContainer.css'
import DashBoardEcommerce from '../Components/DashboardEcomDashboard'
import PageHeadingContainer from '../Components/PageHeadingContainer'
import Product from '../Components/Product'
export{}

function DashboardMainPageContainer() {
    return (
        <>
        <div className = "dashboard-Main-Contianer">
            <PageHeadingContainer mainHeading = "eCommerce Dashboard" subHeading = "welcome to oreo" />    
            <Product /> 
            </div>
        </>
        /*
        
         <DashBoardEcommerce />
           
        */
    )
}

export default DashboardMainPageContainer;
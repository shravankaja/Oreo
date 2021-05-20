import '../CSS/Dashboard.css'
import DashboardHeader from '../Components/DashboardHeader'
import DashboardMainPageContainer from '../Components/DashBoardPageMainContainer'
import NavDashbordMain from '../Components/NavDashBoardMainContainer'
import { useState } from 'react'
import { red } from '@material-ui/core/colors'
export { }


function Dashboard() {
    const [dashBoardStatus, setDashboardStatus] = useState({ dashBoardView: false, widthHeader: "100vw",productListAndProductDisplay : "" })

    const setNavbarDisplayStatus = (fromHeaderButton: boolean) => {

        if (fromHeaderButton == true) { setDashboardStatus({ ...dashBoardStatus, dashBoardView: true, widthHeader: "87vw" }) }
        else if (fromHeaderButton == false) { setDashboardStatus({ ...dashBoardStatus, dashBoardView: false, widthHeader: "100vw" }) }

    }

    const takeclickevent = (p:string) => {

        if(p=="truepl") {
            setDashboardStatus({...dashBoardStatus , productListAndProductDisplay : "pl"})
        }
        else if (p == "truep") {
            setDashboardStatus({...dashBoardStatus, productListAndProductDisplay :"p"})
        }
        else if (p == "trueD") {
            setDashboardStatus({...dashBoardStatus , productListAndProductDisplay : "D"})
        }


    }

    return (
        <>
            <div className="dashboard-flexbox">
                <div className="dashboard-Main-Nav">
                    {dashBoardStatus.dashBoardView ? <NavDashbordMain listenToProductListFromDashboard = {takeclickevent} /> : <></>}
                </div>
                <div className="dashboard-Header-MainContainer" style={{ width: dashBoardStatus.widthHeader }} >
                    <DashboardHeader swipeInNavbar={setNavbarDisplayStatus} />
                    <DashboardMainPageContainer productDisplayStatus = {dashBoardStatus.productListAndProductDisplay}  />
                </div>
            </div>
        </>
    )
}

export default Dashboard;
import '../CSS/Dashboard.css'
import DashboardHeader from '../Components/DashboardHeader'
import DashboardMainPageContainer from '../Components/DashBoardPageMainContainer'
import NavDashbordMain from '../Components/NavDashBoardMainContainer'
import { useState } from 'react'
import { red } from '@material-ui/core/colors'
export { }


function Dashboard() {
    const [dashBoardStatus, setDashboardStatus] = useState({ dashBoardView: false, widthHeader: "100vw" })

    const setNavbarDisplayStatus = (fromHeaderButton: boolean) => {

        if (fromHeaderButton == true) { setDashboardStatus({ ...dashBoardStatus, dashBoardView: true, widthHeader: "87vw" }) }
        else if (fromHeaderButton == false) { setDashboardStatus({ ...dashBoardStatus, dashBoardView: false, widthHeader: "100vw" }) }

    }

    return (
        <>
            <div className="dashboard-flexbox">
                <div className="dashboard-Main-Nav">
                    {dashBoardStatus.dashBoardView ? <NavDashbordMain /> : <></>}
                </div>
                <div className="dashboard-Header-MainContainer" style={{ width: dashBoardStatus.widthHeader }} >
                    <DashboardHeader swipeInNavbar={setNavbarDisplayStatus} />
                    <DashboardMainPageContainer />
                </div>
            </div>
        </>
    )
}

export default Dashboard;
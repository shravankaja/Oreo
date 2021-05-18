import { lightBlue } from '@material-ui/core/colors'
import React from 'react'
import '../CSS/DashboardHeader.css'
export { }

interface Props {
    swipeInNavbar: any
}


function DashboardHeader({ swipeInNavbar }: Props) {
    const [openOrCloseNavBar, set0penOrCloseNavBar] = React.useState({ open: false, close: true })
    const setNavbarDisplay = () => {
        if (openOrCloseNavBar.open == false) {
            console.log("open click")
            swipeInNavbar(true)
            set0penOrCloseNavBar({ ...openOrCloseNavBar, open: true })
        }
        else if (openOrCloseNavBar.open == true) {
            console.log("close click")
            swipeInNavbar(false)
            set0penOrCloseNavBar({ ...openOrCloseNavBar, open: false })
        }
    }

    return (
        <>
            <div className="dashboard-Header-Main-Container">

                <div className="dashboard-Header-logo-Container">
                    <div className="dashboard-Header-logo-Element"><img style={{ height: "100%" }} src="https://thememakker.com/templates/oreo/html/assets/images/logo.svg"></img></div>
                    <div className="dashboard-Header-title-Element">OREO</div>

                </div>

                <div className="dashboard-Header-Icons-SearchBox-Container">
                    <div><i style={{ fontSize: "20px", color: "white" }} className="zmdi zmdi-calendar"></i></div>

                    <div><i style={{ fontSize: "20px", color: "white" }} className="zmdi zmdi-swap" onClick={setNavbarDisplay}></i></div>

                    <div><i style={{ fontSize: "20px", color: "white" }} className="zmdi zmdi-email"></i></div>

                    <div><i style={{ fontSize: "20px", color: "white" }} className="zmdi zmdi-notifications"></i></div>

                    <div><i style={{ fontSize: "20px", color: "white" }} className="zmdi zmdi-flag"></i></div>

                    <div className="dashboard-Header-Searchbox-Container"> <input type="text" placeholder="Search..." className="dashboard-Header-Searchboc-Element"></input> </div>


                </div>

                <div className="dashboard-Header-Logout-Setting-Container">

                    <div><i style={{ fontSize: "20px", color: "white" }} className="zmdi zmdi-power"></i></div>
                    <div> <i style={{ fontSize: "20px", color: "white" }} className="zmdi zmdi-settings zmdi-hc-spin"></i> </div>
                </div>

            </div>


        </>
    )
}

export default DashboardHeader;
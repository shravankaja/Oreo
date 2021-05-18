import React, { useState } from 'react'
import '../CSS/NavDashBoardMainContainer.css'
import NavDashboardOne from '../Components/NavDashboardOne'
import NavBarTwo from '../Components/NavDashboardTwo'
export {}



function NavDashboardMain() {
    const [sideNavBarStatus, setNavBarStatus] = React.useState({oreo : true})    

    const setNavBar = () =>{
        setNavBarStatus({...sideNavBarStatus, oreo : false})
    }

    const setNavBarOne = () => {
        setNavBarStatus({...sideNavBarStatus, oreo : true})
    }

    return (
       <>
       <div className = "navbar-Main-Container-Element">
       
       <div className = "navbar-Oreo-User-Selection-Tab" id="navbartwo-main-container-id">
        <button className = "navbar-Home-User-Button" onClick = {setNavBarOne} ><div className = "button-Heading-NavbarMain"><i className="zmdi zmdi-home m-r-5"></i>
        
        <div>Oreo</div>
        </div></button>

        <button className = "navbar-Home-User-Button" onClick = {setNavBar}><div className = "button-Heading-NavbarMain"><i className="zmdi zmdi-home m-r-5"></i>
        
        <div>User</div>
        </div></button>

       </div>
       
       <div className = "navbar-NavbarOne-Or-NavbarTwo">{sideNavBarStatus.oreo ? <NavDashboardOne /> : <NavBarTwo />}</div>
       
       
       
       </div>
        
        </>
    )
}

export default NavDashboardMain;
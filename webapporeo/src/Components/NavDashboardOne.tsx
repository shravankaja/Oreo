import React from 'react'
import '../CSS/NavDashboardOne.css'
import NestedList from '../Components/NestesList-NavbarOne'
export {}

interface propsType {
    listenToProductList: any
}

function NavDashboardOne(props:propsType) {

    const takeclickevent = (p:string) => {
        if(p == "truepl") {
            props.listenToProductList("truepl")
        }
        else if(p == "truep") {
            props.listenToProductList("truep")
        }
        else if(p == "trueD") {
            props.listenToProductList("trueD")
        }

    }

    return(
        <>
        <div className = "navbarOne-Main-Container">

        <div className = "UserInfo-NavBar-Common-Container"> 
        
        <div className = "UserInfo-NavBar-UserImg-Container"><a href="profile.html" ><img src="https://thememakker.com/templates/oreo/html/assets/images/profile_av.jpg" 
        alt="User" className= "navbar-profile-img"/></a></div> 
        
        <div className = "UserInfo-NavBar-Common-Name-Designation"> 
        <p className = "profile-name">Michael</p>
        <span className = "profile-Designation">UI/UX Designer</span>
        </div>
        
        <div className = "user-scoial-icons">
        <i className="zmdi zmdi-facebook"></i>
        <i className="zmdi zmdi-twitter"></i>
        <i className="zmdi zmdi-instagram"></i>
        </div>
        
        </div>

        <div className = "navbar-one-list-top-drawers-Container"><NestedList clickEvent= {takeclickevent} /></div>

        </div>
        </>
    )
}

export default NavDashboardOne;
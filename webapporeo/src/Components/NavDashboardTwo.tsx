import React from 'react'
import '../CSS/NavBarTwo.css'
export { }

function NavBarTwo() {
    return (
        <>
            <div className="navbartwo-Main-Container">

                <div className="UserInfo-NavBar-Common-Container">

                    <div className="UserInfo-NavBar-UserImg-Container"><a href="profile.html" ><img src="https://thememakker.com/templates/oreo/html/assets/images/profile_av.jpg"
                        alt="User" className="navbar-profile-img" /></a></div>

                    <div className="UserInfo-NavBar-Common-Name-Designation">
                        <p className="profile-name">Michael</p>
                        <span className="profile-Designation">UI/UX Designer</span>
                    </div>

                    <div className="user-scoial-icons">
                        <i className="zmdi zmdi-facebook"></i>
                        <i className="zmdi zmdi-twitter"></i>
                        <i className="zmdi zmdi-instagram"></i>
                    </div>

                </div>


                <div className="user-address-navbartwo">
                    795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                </div>

            <div  className = "user-Stats-navbartwo">
             <div className = "statsColumn-navbarTwo">  <div className = "stat1">854</div> <div className = "stat1">13K</div> <div className = "stat1">234</div> </div> 
            

            <div className = "statsDesc-Navbartwo"> <div className = "statsdesc">Following</div> <div className = "statsdesc">Followers</div> <div className = "statsdesc">Posts</div> </div>

            </div>

            <div className = "user-Email-Container-Navbartwo">
                <div className = "user-Emailheading-Navbartwo">Email Address :</div>
                <div className = "user-Email-Navbartwo">Shravan.kaja@gmail.com</div>
            </div>


            <div className = "user-Phone-Container-Navbartwo">
                <div className = "user-Phoneheading-Navbartwo">Phone :</div>
                <div className = "user-Phone-Navbartwo">+ 202-555-0191</div>
            </div>

            </div>
        </>
    )
}

export default NavBarTwo;
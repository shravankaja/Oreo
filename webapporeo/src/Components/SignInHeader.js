import React, { useEffect } from 'react'
import '../CSS/SignInHeader.css'
import { useHistory } from "react-router-dom";


function SignInHeader({headerButton}) {
    const history = useHistory();
    
    return (
        <>
            <div className="mainHeaderContainerSignInPage">

                <div className="homeTitleSignInPage"> <h3>Oreo</h3></div>

                <div className="logosAndSignUpLinksSignInPage"> <div className="linksSignInPage">Home</div>

                    <div className="linksSignInPage">Search Result</div>

                    <div className="linksSignInPage"><i class="fa">&#xf099;</i></div>

                    <div className="linksSignInPage"><i class="fa">&#xf09a;</i></div>

                    <div className="linksSignInPage"><i class="fa">&#xf16d;</i></div>

                    <div className = "signUpButtonContainerSignIn"><button onClick = {() => {headerButton? history.push("/") : 
                    history.push("/SignUp")  }}  className = "signUpButtonSignIn">{headerButton?"SignIn" : "SignUp"}</button>  </div>
                    
                </div>
            
            </div>

                
        </>
    )
}

export default SignInHeader;

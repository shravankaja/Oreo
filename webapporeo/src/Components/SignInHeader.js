import React from 'react'
import '../CSS/SignInHeader.css'


function SignInHeader() {
    return (
        <>
            <div className="mainHeaderContainerSignInPage">

                <div className="homeTitleSignInPage"> <h3>Oreo</h3></div>

                <div className="logosAndSignUpLinksSignInPage"> <div className="linksSignInPage">Home</div>

                    <div className="linksSignInPage">Search Result</div>

                    <div className="linksSignInPage"><i class="fa">&#xf099;</i></div>

                    <div className="linksSignInPage"><i class="fa">&#xf09a;</i></div>

                    <div className="linksSignInPage"><i class="fa">&#xf16d;</i></div>

                    <div className = "signUpButtonContainerSignIn"><button className = "signUpButtonSignIn">Sign Up</button>  </div>
                    
                </div>
            
            </div>

                
        </>
    )
}

export default SignInHeader;

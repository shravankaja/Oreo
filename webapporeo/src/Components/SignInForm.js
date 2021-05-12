import React from 'react'
import '../CSS/SignInForm.css'
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';



function SignInForm() {
    return (
        <>
        <div className = "signInPageFromContainer">
            <div className = "logoContainerSignInPageForm"> <img src = "https://thememakker.com/templates/oreo/html/assets/images/logo.svg"  className = "logoSignInPageForm"/></div>
            <div className = "formHeadngContainerSignInPageForm">
                <h4>Log in</h4>
            </div>
            <form className = "mainFormContainerSignInPage">
                <div className = "inputEmailAndPasswordSignInPageContainer" id = "emailSignInPage" >
                <input type = "text" placeholder = "Enter User Name"  className = "inputEmailSignInPage"></input>
                <div  className = "logoEmailAndPassowrdContianer"><AccountCircleSharpIcon style= {{color : "lightgrey"}} /></div>
                </div>
                <div className = "inputEmailAndPasswordSignInPageContainer" id = "passSignInPage">
                <input type = "password" placeholder = "Enter Password" className = "inputPasswordSignInPage"  ></input>
                <div  className = "logoEmailAndPassowrdContianerPassword"><LockRoundedIcon style= {{color : "lightgrey"}} /></div>
                </div>

            </form>

            <div className = "signInButtonSignInPageContainer">
                <button className = "signInButtonSignInPage">Sign In</button>
            </div>

            <div className = "forgotPasswordContainer"><h4>Forgot Password ?</h4> </div>
        </div>    
        </>
    )
}

export default SignInForm;
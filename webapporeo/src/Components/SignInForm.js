import React from 'react'
import '../CSS/SignInForm.css'
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import { handlPattern } from '../Utility/UsersAuthServices'



function SignInForm(props) {

    const [fieldStatus, setFieldStatus] = React.useState({ usernameField: false, emailField: false, passwordField: false })
    const [fieldValues, setFieldValues] = React.useState({ emailValue : "" , passValue : ""})
    const testPattern = (e) => {
        if (e.target.name == "email") {
            if (handlPattern("email", e.target.value) || e.target.value == "") {
                setFieldStatus({ ...fieldStatus, emailField: false })
                setFieldValues({...fieldValues , emailValue : e.target.value})
            }
            else if (!handlPattern("email", e.target.value)) {
                setFieldStatus({ ...fieldStatus, emailField: true })
            }
        }
        else if (e.target.name == "pass") {
            if (handlPattern("pass", e.target.value) || e.target.value == "") {
                setFieldStatus({ ...fieldStatus, passwordField: false })
                setFieldValues({...fieldValues , passValue : e.target.value})
            }
            else if (!handlPattern("pass", e.target.value)) {
                setFieldStatus({ ...fieldStatus, passwordField: true })
            }
        }
    }

    const submitData = () => {
        console.log(fieldValues)
    }

    return (
        <>
            <div className="signInPageFromContainer">
                <div className="logoContainerSignInPageForm"> <img src="https://thememakker.com/templates/oreo/html/assets/images/logo.svg" className="logoSignInPageForm" /></div>
                <div className="formHeadngContainerSignInPageForm">
                    <h4>Log in</h4>
                </div>
                <form className="mainFormContainerSignInPage">
                    <div className="inputEmailAndPasswordSignInPageContainer" id="emailSignInPage" >
                        <input onChange={testPattern} name="email" type="text" placeholder="Enter User Name" className="inputEmailSignInPage"></input>
                        <div className="logoEmailAndPassowrdContianer"><AccountCircleSharpIcon style={{ color: "lightgrey" }} /></div>
                    </div>
                    <div style={{ color: "red" }} >{fieldStatus.emailField ? "Follow Format" : ""}</div>
                    <div className="inputEmailAndPasswordSignInPageContainer" id="passSignInPage">
                        <input onChange={testPattern} name="pass" type="password" placeholder="Enter Password" className="inputPasswordSignInPage"  ></input>
                        <div className="logoEmailAndPassowrdContianerPassword"><LockRoundedIcon style={{ color: "lightgrey" }} /></div>
                    </div>
                    <div style={{ color: "red" }}>{fieldStatus.passwordField ? "Follow Format" : ""}</div>

                </form>

                <div className="signInButtonSignInPageContainer">
                    <button onClick = {submitData} className="signInButtonSignInPage">Sign In</button>
                </div>

                <div className="forgotPasswordContainer"><h4>Forgot Password ?</h4> </div>
            </div>
        </>
    )
}

export default SignInForm;
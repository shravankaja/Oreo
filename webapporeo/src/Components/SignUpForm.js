import React, { useState } from 'react'
import '../CSS/SignUpForm.css'
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import EmailIcon from '@material-ui/icons/Email';
import { handlPattern } from '../Utility/UsersAuthServices'
import {signUp} from '../Services/UserService.ts'

function SignUpForm(props) {
    const [fieldStatus, setFieldStatus] = useState({ usernameField: false, emailField: false, passwordField: false })
    const [fieldValues, setFieldValues] = useState({usernameValue : "", emailValue : "" , passValue : "", conditionsAgreed : false})
    const testPattern = (e) => {
        if (e.target.name == "username") {
            if (handlPattern("username", e.target.value) || e.target.value == "") {
                setFieldStatus({ ...fieldStatus, usernameField: false })
                setFieldValues({...fieldValues , usernameValue : e.target.value})
            }
            else if (!handlPattern("username", e.target.value)) {
                setFieldStatus({ ...fieldStatus, usernameField: true })
            }
        }
        else if (e.target.name == "email") {
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

    const checkCheckBox = () => {
        let checkBox = document.getElementById('boxCheck')
        if(checkBox.checked == true) {
            setFieldValues({...fieldValues, conditionsAgreed : true})
        }
    }

    const submitData = () => {
        if(fieldStatus.usernameField == false && fieldStatus.emailField == false && fieldStatus.passwordField == false) {
          console.log(signUp(fieldValues))
        }
    }

    

    return (
        <>
            <div className="main-Form-Container-SignUp-Page">

                <div className="logo-Contaoner-SignUp-Form">
                    <img src="https://thememakker.com/templates/oreo/html/assets/images/logo.svg" className="logo-SignUp-Page" />

                </div>

                <div className="signUp-Form-Heading-SubHeading">

                    <div className="signUp-Main-Heading">Sign Up</div>

                    <div className="signUp-Sub-Heading">Register a new membership</div>

                </div>

                <form className="signUp-MainForm-Container">
                    <div className="singUp-Form-Input-Container">
                        <input onChange={testPattern} name="username" type="text" className="input-Field-Container-SignUp" placeholder="Enter UserName"></input>
                        <div className="signUp-Logo-UserName"><AccountCircleSharpIcon style={{ color: "lightgrey" }} /></div>
                    </div>
                    <div className="errorNoti-SignUp">{fieldStatus.usernameField ? "Follow Format" : ""}</div>
                    <div className="singUp-Form-Input-Container">
                        <input onChange={testPattern} type="text" name="email" className="input-Field-Container-SignUp" placeholder="Enter Email"></input>
                        <div className="signUp-Logo-Email"><EmailIcon style={{ color: "lightgrey" }} /></div>

                    </div>
                    <div className="errorNoti-SignUp">{fieldStatus.emailField ? "Follow Format" : ""}</div>
                    <div className="singUp-Form-Input-Container">
                        <input onChange={testPattern} name="pass" type="password" className="input-Field-Container-SignUp" placeholder="Enter Password"></input>
                        <div className="signUp-Logo-Password">
                            <LockRoundedIcon style={{ color: "lightgrey" }} />
                        </div>
                    </div>
                    <div className="errorNoti-SignUp">{fieldStatus.passwordField ? "Follow Format" : ""}</div>
                    <div className="singUp-Form-Input-Container-Conditions">
                        <div className="signUp-Form-Checkbox"><input id = "boxCheck"type="checkbox" onClick = {checkCheckBox}></input></div>
                        <div className="signUp-Form-Conditions-Accept">I read and agree to the <span id="red">terms of usage</span> </div>
                    </div>
                </form>

                <div className="signUp-Button"><button onClick = {submitData} className="signUp-Button-SignUp-Page">Sign Up</button></div>

            </div>

        </>
    )
}

export default SignUpForm;
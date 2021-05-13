import React from 'react'
import SignInHeader from '../Components/SignInHeader'
import '../CSS/SignUpPage.css'
import SignUpForm from '../Components/SignUpForm.js'

function SignUp() {
    return (

        <>
        <div className = "signUpPageBody ">
        <SignInHeader headerButton = {true} />
        <SignUpForm />
        </div>

        </>
    )
}

export default SignUp;


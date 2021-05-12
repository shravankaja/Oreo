import React from 'react'
import '../CSS/SignInPage.css'
import SignInForm from '../Components/SignInForm.js'
import SignInHeader from '../Components/SignInHeader'

function SignIn () {
    return (
        <>
        <div className = "signInPageBody">
            <SignInHeader />  
            <SignInForm />  
           
        </div>
        </>
        
    
    )
}

export default SignIn;

import AppleLogo from './images/Apple_logo_black.svg'
import GoogleLogo from './images/google-color.svg'
import MicroSoftLogo from './images/ms-symbol.svg'
import Wave from './images/wave.jpeg'

function Welcome () {

    return (
        <div id="popup">
            <div id="corporate">
                <img src="#" alt="logo" />
                <span>Dashboard</span></div>
            <div id="message">
                <div id="greeting">
                    <h1>Welcome Back</h1>
                    <img id="wave" src={Wave} alt="Wave" />
                </div>
                <p>Today is a new day. It's your day. You shape it.</p>
                <p>Sign in to start managing your projects.</p>
            </div>
            <div id="terms-and-conditions">
                 <input defaultChecked type="checkbox" id="confirm-terms-and-conditions" /> 
                 <p>I have read and agree to our <a href="#">Terms & Conditions</a></p>
            </div>
            <div id="button-container">
                 <div className="login-button" onClick={()=> alert('You are logging in with Google!')}>
                    <img className="logo" src={GoogleLogo} alt="Google Logo" />
                    <span>Continue with Google</span>
                 </div>

                 <div className="login-button" onClick={()=> alert('You are logging in with Microsoft!')}>
                    <img className="logo" src={MicroSoftLogo} alt="Microsoft Logo" />
                    <span>Continue with Microsoft</span>
                 </div>

                 <div className="login-button" onClick={()=> alert('You are logging in with Apple!')}>
                    <img className="logo" src={AppleLogo} alt="Apple Logo" />
                    <span>Continue with Apple</span>
                 </div>
            </div>
            <div id="sign-up">
                <p>Already have an account? <a href="#">Sign up</a></p>
            </div>
        </div>
    )   
}

export default Welcome;
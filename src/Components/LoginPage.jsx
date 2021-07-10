import LinkedinIcon from "../Images/linkedin_icon.png"
import LoginCover from "../Images/linkedin_login_cover.png"
import Google from "../Images/google.png"
import '../Style/LoginPage.css'
import { signInWithGoogle } from '../Firebase/FirebaseConfig';
import { auth } from '../Firebase/FirebaseConfig';
import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'


const LoginPage = () => {
    
    const dispatch = useDispatch()
    const IsLogedIn = useSelector(state => state.logInStatus)

    /*
        Every time there is a change in Login status ( user is LogedIN or LogedOUT) we make this condition
        *If there is a user we set the state of LoginStatus to true in the redux 
        !If there is no user we set to false the state of LoginStatus in the redux
    */
    useEffect(() => {
        auth.onAuthStateChanged( user => {
            if (user) { dispatch({type: 'USER_IS_AUTH', LoginStatus: true}) }
            else { dispatch({type: 'USER_IS_AUTH', LoginStatus: false}) }
        })
    }, [dispatch])

    // If the user is loged in we redirect him to the homepage else he stays in the Login Page
    if (IsLogedIn) { return <Redirect to="/Homepage" /> }


    return (
        <div className="login_page">
            <nav>
                <img src={LinkedinIcon} alt="Linkedin" />
                <ul>
                    <li>Join now</li>
                    <li className="border_singin">Sign in</li>
                </ul>
            </nav>
            <main>
                <div>
                    <h2>Welcome to your professional community</h2>
                    <button onClick={signInWithGoogle}><img src={Google} alt="Sign in with google" /> Sign in with Google </button>
                </div>
                <img src={LoginCover} alt="Working place" />
            </main>
        </div>
    )
}

export default LoginPage

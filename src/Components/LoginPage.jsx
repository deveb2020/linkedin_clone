import LinkedinIcon from "../Images/linkedin_icon.png"
import LoginCover from "../Images/linkedin_login_cover.png"
import Google from "../Images/google.png"
import { provider } from '../Firebase/FirebaseConfig';
import { signInWithGoogle } from '../Firebase/FirebaseConfig';
import { auth } from '../Firebase/FirebaseConfig';
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import '../Style/LoginPage.css'


const LoginPage = () => {
    
    const dispatch = useDispatch()
    const IsLogedIn = useSelector(state => state.logInStatus)

    
    //Those data are stored into REDUX store only when the user is login in 
    const handleSignIN = async () => {
        signInWithGoogle()
        //this function helps us to change the Login Status when the user logs in or out so we can give or denide acces to users
        await auth.onAuthStateChanged( user => {
            if (user) { dispatch({type: 'USER_IS_AUTH', LoginStatus: true}) }
            else { dispatch({type: 'USER_IS_AUTH', LoginStatus: false}) }
        })
        // gets and saves to redux the user inforamtions on the sign in: like name and surname, email adresse etc
        await auth.signInWithPopup(provider).then(payload => { 
            dispatch({type: 'USER_NAME', userName: payload.additionalUserInfo.profile.name})
            dispatch({type: 'USER_EMAIL', userEmail: payload.additionalUserInfo.profile.email})
        }) 
    }



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
                    <button onClick={handleSignIN}><img src={Google} alt="Sign in with google" /> Sign in with Google </button>
                </div>
                <img src={LoginCover} alt="Working place" />
            </main>
        </div>
    )
}

export default LoginPage

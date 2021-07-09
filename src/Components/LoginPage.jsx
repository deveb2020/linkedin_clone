import LinkedinIcon from "../Images/linkedin_icon.png"
import LoginCover from "../Images/linkedin_login_cover.png"
import Google from "../Images/google.png"
import '../Style/LoginPage.css'
import { Link } from "react-router-dom";



const LoginPage = () => {
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
                    <Link to="/Homepage"><img src={Google} alt="Sign in with google" /> Sign in with Google </Link>
                </div>
                <img src={LoginCover} alt="Working place" />
            </main>
        </div>
    )
}

export default LoginPage

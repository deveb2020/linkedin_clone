import "../Style/Header.css"
import { FaHome } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import LinkedinICon from "../Images/linkedin_icon_logo.png"
import { FaUser } from "react-icons/fa";
import { auth } from '../Firebase/FirebaseConfig';
import { useDispatch } from 'react-redux'



const Header = () => {
    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch({type: 'USER_IS_AUTH', LoginStatus: false})
        auth.signOut()
    }
    return (
        <header>
            <div className="left_elements">
                <img className='linkedin_icon' src={LinkedinICon} alt="Linkedin Icon" />
                <div className="search_field"><FaSearch/><input type="search" placeholder="Search"/></div>
            </div>
            <div className="right_components">
                <div className="icons_wrapper"><FaHome/><p>Home</p></div>
                <div className="icons_wrapper"><FaUserFriends/><p>My network</p></div>
                <div className="icons_wrapper"><FaBriefcase/><p>Jobs</p></div>
                <div className="icons_wrapper"><FaCommentAlt/><p>Messaging</p></div>
                <div className="icons_wrapper"><FaBell/><p>Notifications</p></div>
                <div className="icons_wrapper profil_log_out">
                    <div className="logout_icon"><FaUser/></div>
                    <p>Me <FaAngleDown/></p>
                    <button onClick={handleLogOut}>Log out</button>
                </div>
            </div>
        </header>
    )
}

export default Header

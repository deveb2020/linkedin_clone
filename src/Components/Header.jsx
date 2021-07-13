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
import { useDispatch, useSelector } from 'react-redux'



const Header = () => {
    const dispatch = useDispatch()
    const UserPhoto = useSelector(state => state.userProfilPhoto)


    const handleLogOut = () => {
        // change the state of LoginStatus to false in redux so we can redirect the user to login page
        dispatch({type: 'USER_IS_AUTH', LoginStatus: false})
        dispatch({type: 'USER_PHOTO', userPhoto: ""})
        // whe sign out the user so the state of auth in firebase changes to null
        // this function has an inpact in the condition made on Login component 
        auth.signOut()
    }

    const userPhotoUpload = UserPhoto !== "" ? <img src={UserPhoto} alt="user_img" className="user_img" /> : <FaUser/>


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
                    <div className="logout_icon">
                        {userPhotoUpload}
                    </div>
                    <p>Me <FaAngleDown/></p>
                    <button onClick={handleLogOut}>Log out</button>
                </div>
            </div>
        </header>
    )
}

export default Header

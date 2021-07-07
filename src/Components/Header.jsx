import "../Style/Header.css"
import { FaHome } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import LinkedinICon from "../Images/linkedin_icon.png"



const Header = () => {
    return (
        <header>
            <div className="left_elements">
                <img className='linkedin_icon' src={LinkedinICon} alt="Linkedin Icon" />
                <div className="search_field"><FaSearch/><input type="search" placeholder="Search"/></div>
            </div>
            <div className="right_components">
                <div className="icons_wrapper"><FaHome/><p>Home</p></div>
                <div className="icons_wrapper"><FaUserFriends/><p>My network</p></div>
                <div className="icons_wrapper"><FaBriefcase/><p>Home</p></div>
                <div className="icons_wrapper"><FaCommentAlt/><p>Home</p></div>
                <div className="icons_wrapper"><FaBell/><p>Home</p></div>
            </div>
        </header>
    )
}

export default Header

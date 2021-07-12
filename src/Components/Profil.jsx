import "../Style/Profil.css"
import BackgroungProfilCover from "../Images/bkg_cover_profil.jpg"
import UserPhoto from "../Images/camera-icon.png"
import { FaUserPlus } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { useSelector } from "react-redux";


const Profil = () => {
    const userName = useSelector(state => state.name)

    return (
        <div className="left_components">
            <div className="profil_component">
                <div className="profil_bkg_image">
                    <img className="bcg_cover" src={BackgroungProfilCover} alt="bcg cover" />
                    <div className="user_photo"><img src={UserPhoto} alt="user_img" /></div>
                </div>
                <div className="profil_informations">
                    <h1>Welcome, {userName} !</h1>
                    <p>Add a photo</p>
                </div>
                <div className="profil_conections">
                    <div>
                        <p>Connections</p>
                        <p><b>Grow your network</b></p>
                    </div>
                    <FaUserPlus/>
                </div>
                <div className="profil_items">
                    <FaRegBookmark/>
                    <p><b>My Items</b></p>
                </div>
            </div>

            <div className="group_component">
                <div>   
                    <p>Groups</p>
                    <p>Events</p>
                    <p>Follows Hashtags</p>
                </div>
                <p className="discover_more">Discover more</p>
            </div>
        </div>

    )
}

export default Profil

import "../Style/Profil.css"
import BackgroungProfilCover from "../Images/bkg_cover_profil.jpg"
import AddPhotoIcon from "../Images/camera-icon.png"
import { FaUserPlus } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { FIREBASE } from "../Firebase/FirebaseConfig"

const Profil = () => {
    const userName = useSelector(state => state.name)
    const UserPhoto = useSelector(state => state.userProfilPhoto)
    const dispatch = useDispatch()


    const fileUploadHandle = async (e) => {
        const file = e.target.files[0]
        const storageRef = FIREBASE.storage().ref()
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)
        dispatch({type: 'USER_PHOTO', userPhoto: await fileRef.getDownloadURL()})
    }

    const userPhotoUpload = UserPhoto !== "" ? <img src={UserPhoto} alt="user_img" className="user_img" /> : <img src={AddPhotoIcon} alt="upload_image_icon" />


    return (
        <div className="left_components">
            <div className="profil_component">
                <div className="profil_bkg_image">
                    <img className="bcg_cover" src={BackgroungProfilCover} alt="bcg cover" />
                    <div className="user_photo">{userPhotoUpload}</div>
                </div>
                <div className="profil_informations">
                    <h1>Welcome, {userName} !</h1>
                    <label htmlFor="file">Add a photo</label>
                    <input type="file" id="file" onChange={fileUploadHandle} />
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

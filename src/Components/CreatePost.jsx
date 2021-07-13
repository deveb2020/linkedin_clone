import '../Style/CreatePost.css'
import { FaRegPaperPlane } from "react-icons/fa";
import { FcAddImage } from "react-icons/fc";
import { FcVideoCall } from "react-icons/fc";
import { FcPicture } from "react-icons/fc";
import { FcViewDetails } from "react-icons/fc";
import { useState } from 'react';
import Publications from './Publications';
import { FIREBASE } from "../Firebase/FirebaseConfig"
import firebase from "firebase/app"
import { useSelector, useDispatch } from "react-redux";
import { FaUser } from "react-icons/fa";
import { useEffect } from "react"


const CreatePost = () => {
    const [PostInput, setPostInput] = useState("")
    const UserPhoto = useSelector(state => state.userProfilPhoto)
    const dispatch = useDispatch()
    const userName = useSelector(state => state.name)
    const userEmail = useSelector(state => state.email)

    // grab the data from firebase on componenet render
    useEffect(() => {
        FIREBASE.firestore().collection('posts').orderBy('timestamp', 'desc').onSnapshot((querySnapshot) => { 
            dispatch({type: 'POSTS', posts:querySnapshot.docs.map(doc => ({id: doc.id, posts: doc.data()}))})
        })
    }, [dispatch])

    // send the post data to firebase
    const handleSubmitPost = async () => {
        await FIREBASE.firestore().collection('posts').add({
            postContent: PostInput,
            postUser: userName,
            postEmail: userEmail,
            timestamp: firebase.firestore.FieldValue.serverTimestamp() //timestamp is used to sort the data by order
        })
    }

    const userPhotoUpload = UserPhoto !== "" ? <img src={UserPhoto} alt="user_img" className="user_img" /> : <FaUser/>


    return (
        <div className="feed_component">
            <div className="create_post_componenet">
                <div className="search_wrapper">
                    <div className="user_image">{userPhotoUpload}</div>
                    <div className="input_wrapper">
                        <input type="text" placeholder="Start a post" onChange={(e) => setPostInput(e.target.value)}/>
                        <FaRegPaperPlane onClick={handleSubmitPost}/>
                    </div>
                </div>
                <div className="icons_wrapper_post">
                    <div><FcAddImage/><span>Photo</span></div>
                    <div><FcVideoCall/><span>Video</span></div>
                    <div><FcPicture/><span>Event</span></div>
                    <div><FcViewDetails/><span>Write article</span></div>
                </div>
            </div>
            <Publications/>
        </div>

    )
}

export default CreatePost

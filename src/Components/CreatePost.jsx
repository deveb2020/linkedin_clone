import '../Style/CreatePost.css'
import { FaUser } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";
import { FcAddImage } from "react-icons/fc";
import { FcVideoCall } from "react-icons/fc";
import { FcPicture } from "react-icons/fc";
import { FcViewDetails } from "react-icons/fc";
import { useState } from 'react';
import Publications from './Publications';
import { FIREBASE } from "../Firebase/FirebaseConfig"
import firebase from "firebase/app"


const CreatePost = () => {
    const [PostInput, setPostInput] = useState("")

    const handleSubmitPost = async () => {
        await FIREBASE.firestore().collection('posts').add({
            postContent: PostInput,
            timestamp: firebase.firestore.FieldValue.serverTimestamp() //timestamp is used to sort the data by order
        })
    }


    return (
        <div className="feed_component">
            <div className="create_post_componenet">
                <div className="search_wrapper">
                    <div className="user_image"><FaUser/></div>
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

import '../Style/CreatePost.css'
import { FaUser } from "react-icons/fa";
import { FcAddImage } from "react-icons/fc";
import { FcVideoCall } from "react-icons/fc";
import { FcPicture } from "react-icons/fc";
import { FcViewDetails } from "react-icons/fc";
import { useState } from 'react';
import Publications from './Publications';



const CreatePost = () => {
    const [PostInput, setPostInput] = useState("")



    return (
        <div className="feed_component">
            <div className="create_post_componenet">
                <div className="search_wrapper">
                    <div className="user_image"><FaUser/></div>
                    <input type="text" placeholder="Start a post" onChange={(e) => setPostInput(e.target.value)}/>
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

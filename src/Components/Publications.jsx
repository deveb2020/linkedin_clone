import EgzonPhoto from "../Images/egzon.jpg"
import ClapIcon from "../Images/clap.png"
import HeartIcon from "../Images/heart.png"
import { FaEllipsisH } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FIREBASE } from "../Firebase/FirebaseConfig"
import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'


const Publications = () => {
    const [DataBaseData, setDataBaseData] = useState([])
    const userName = useSelector(state => state.name)
    const userEmail = useSelector(state => state.email)

    useEffect(() => {
        FIREBASE.firestore().collection('posts').orderBy('timestamp', 'desc').onSnapshot((querySnapshot) => { 
            setDataBaseData(querySnapshot.docs.map(doc => ({posts: doc.data()})))
        })
    }, [])

    return (
        <>
            { DataBaseData.map(post => 
                <div className="publications_wrapper">
                    <FaEllipsisH/>
                    <div className="post_tittle_bloc">
                        <img src={EgzonPhoto} alt="" />
                        <div>
                            <h1>{userName}</h1>
                            <p>{userEmail}</p>
                            <p>{post.posts.timestamp.toDate().toDateString()}</p>
                        </div>
                    </div>
                    <h2 className="post_content">{post.posts.postContent}</h2>
                    <div className="likes_and_comments">
                        <img src={ClapIcon} alt="claping hands" />
                        <img src={HeartIcon} alt="support this post" />
                        <span className="number_of_likes">60</span>
                        <span className="number_of_comments">23 comments</span>
                    </div>
                    <dev className="post_buttons">
                        <div><FaThumbsUp/><span>Like</span></div>
                        <div><FaCommentDots/><span>Comments</span></div>
                        <div><FaShare/><span>Share</span></div>
                        <div><FaTelegramPlane/><span>Send</span></div>
                    </dev>
                </div> 
            )}
        </>
    )
}

export default Publications

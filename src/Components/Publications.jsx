import ClapIcon from "../Images/clap.png"
import HeartIcon from "../Images/heart.png"
import { FaEllipsisH } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
import { forwardRef } from "react";
import FlipMove from "react-flip-move";


const Publications = forwardRef((ref) => {
    const DataBaseData = useSelector(state => state.posts)


    return (
        <div>
            <FlipMove>
                {  DataBaseData.map(post => (
                    <div className="publications_wrapper" ref={ref} key={post.id}>
                        <FaEllipsisH/>
                        <div className="post_tittle_bloc">
                            <div className="post_icon_wrapper">
                                <FaUser/>
                            </div>
                            <div>
                                <h1>{post.posts.postUser}</h1>
                                <p>{post.posts.postEmail}</p>
                                <p>13/07/2021</p>
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
                ))}
            </FlipMove>
        </div>
    )
})

export default Publications


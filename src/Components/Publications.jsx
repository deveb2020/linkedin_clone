import EgzonPhoto from "../Images/egzon.jpg"
import ClapIcon from "../Images/clap.png"
import HeartIcon from "../Images/heart.png"
import { FaEllipsisH } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";


const Publications = () => {
    return (
        <div className="publications_wrapper">
            <FaEllipsisH/>
            <div className="post_tittle_bloc">
                <img src={EgzonPhoto} alt="" />
                <div>
                    <h1>Egzon Berisha</h1>
                    <p>egzonberisha232@gmail.com</p>
                    <p>22/04/2021</p>
                </div>
            </div>
            <h2 className="post_content">Hello this is my first post </h2>
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
    )
}

export default Publications

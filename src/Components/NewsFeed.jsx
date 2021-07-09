import "../Style/NewsFeed.css"
import { FaLinkedin } from "react-icons/fa";

const NewsFeed = () => {
    return (
        <div className="right_component">
            <div className="news_component">
                <h1>Linkedin News</h1>
                <ul>
                    <li>An update from LinkedIn Learning <p>20/03/2021 - News</p></li>
                    <li>2021 Opportunity Index for Asia Pacific <p>28/03/2021 - News</p></li>
                    <li>Our 2021 Grad’s Guide to Getting Hired <p>20/04/2021 - News</p></li>
                    <li>Creating trusted connections <p>20/04/2021 - News</p></li>
                    <li>An update on report of scraped data <p>22/03/2021 - News</p></li>
                    <li>Our leadership updates <p>21/03/2021 - News</p></li>
                </ul>
            </div>
            <footer>
                <span>Info</span>
                <span>Accessibility</span>
                <span>Support</span>
                <span>Publications</span>
                <span>CGV</span>
                <span>Read more</span>
                <span><FaLinkedin/>LinkedIn Corporation © 2021</span>
            </footer>
        </div>

    )
}

export default NewsFeed

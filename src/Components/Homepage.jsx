import CreatePost from './CreatePost';
import Header from './Header';
import NewsFeed from './NewsFeed';
import Profil from './Profil';
import { useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";


const Homepage = () => {
    const IsLogedIn = useSelector(state => state.logInStatus)

    if (!IsLogedIn) { return <Redirect to="/" /> }

    return (
        <>
            <Header/>
            <a href="https://www.linkedin.com/in/egzonberishabordeaux/"><h3 className="job_offer">Are you looking for a front-end | ReactJS developper, <span>I'am open to work 💼</span></h3></a>
            <main>
                <Profil/>
                <CreatePost/>
                <NewsFeed/>
            </main>
        </>
    )
}

export default Homepage

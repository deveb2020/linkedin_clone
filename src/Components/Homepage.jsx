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
            <main>
                <Profil/>
                <CreatePost/>
                <NewsFeed/>
            </main>
        </>
    )
}

export default Homepage

import '../Style/App.css';
import CreatePost from './CreatePost';
import Header from './Header';
import LoginPage from './LoginPage';
import NewsFeed from './NewsFeed';
import Profil from './Profil';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";


function App() {
    return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path="/">
                    <LoginPage/>
                </Route>
                <Route exact path="/Homepage">
                    <Header/>
                    <main>
                    <Profil/>
                    <CreatePost/>
                    <NewsFeed/>
                    </main>
                </Route>
            </Switch>
        </Router>
    </div>
    );
}

export default App;

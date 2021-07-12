import '../Style/App.css';
import LoginPage from './LoginPage';
import { HashRouter as Router,Switch,Route } from "react-router-dom";
import Homepage from './Homepage';


function App() {
    return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path="/">
                    <LoginPage/>
                </Route>
                <Route exact path="/Homepage">
                    <Homepage/>
                </Route>
            </Switch>
        </Router>
    </div>
    );
}

export default App;

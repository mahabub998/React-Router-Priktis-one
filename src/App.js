import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import FriendDetail from "./Components/FriendDetail/FriendDetail";
import Home from './Components/Home/Home';
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="/friend/:friendDetail">
        <FriendDetail></FriendDetail>
        </Route>
        <Route path="*">
        <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

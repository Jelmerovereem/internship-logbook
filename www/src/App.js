import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import BlogPage from "./pages/BlogPage"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/blog/:id" component={RouteProps => <BlogPage {...RouteProps} key={document.location.href} /> } />
            <Route path="/">
                <Home />
            </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;

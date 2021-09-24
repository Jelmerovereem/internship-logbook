import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import BlogPage from "./pages/BlogPage"
import EditBlog from './pages/EditBlog';
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/admin/:id/edit" component={EditBlog}  />
            <Route path="/admin" component={Admin} />
            <Route path="/blog/:id" component={RouteProps => <BlogPage {...RouteProps} key={document.location.href} /> } />
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="*" component={NotFound} />
        </Switch>
        </Router>
    </div>
  );
}

export default App;

import React from "react";
import "./style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


// this index.js runs the Nav bar on the app
function Nav() {
  return (
    
      <nav id="nav" role="navigation">
        <a href="#nav" title="Show navigation">Show navigation</a>
        <a href="#" title="Hide navigation">Hide navigation</a>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li><Link to="/overfishing"><span>Overfishing</span></Link></li>
          <li>
            <Link to="/quiz"><span>Quizes</span></Link>
          </li>
          <li><Link to="/login">Log In / Register</Link></li>
        </ul>

      </nav>
   
  );

}


export default Nav;
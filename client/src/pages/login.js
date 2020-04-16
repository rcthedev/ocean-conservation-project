import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
//import Carousel, { Dots } from '@brainhubeu/react-carousel';
//import '@brainhubeu/react-carousel/lib/style.css';
import "./../App.scss";
import {
   BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
//import OvrFsh from "./overfishing"
//import Axios from "axios";





export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    
    <div className="Login">
      <h3 className="login__title">Please Sign In</h3>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <br/>
        <FormGroup controlId="password" bsSize="large">
          
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}

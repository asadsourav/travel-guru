import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { UserContext } from '../../App';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { Link, useHistory, useLocation } from 'react-router-dom';
import googleIcon from '../../Icon/google.png'
import fbIcon from '../../Icon/fb.png'




const LoginPage = () => {

    const [loggedInUser,setLoggedInUser] = useContext(UserContext);

    const [user,setUser] = useState({
        email : '',
        password : '',


    })

    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };


    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
 

  
    var googleProvider = new firebase.auth.GoogleAuthProvider();
    var fbProvider = new firebase.auth.FacebookAuthProvider();

    const handleFbSignIn = () => {
        firebase.auth().signInWithPopup(fbProvider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var {email} = result.user;
            const signnedInUser = {email:email}
            setLoggedInUser(signnedInUser);
            history.replace(from)
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log(errorMessage)
            // ...
          });
      }

      const handleBlur = (e) =>{
        let isFieldValid = true
      if (e.target.name === 'email'){
         isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        // console.log(IsEmailValid)
      }
      if (e.target.name === 'password') {
        const isPasswordValid = e.target.value.length > 6 ;
        const passwordHasNumber = /\d{1}/.test(e.target.value)
        isFieldValid = isPasswordValid && passwordHasNumber
      }
      if (isFieldValid) {
        const userInfo = {...user}
        userInfo[e.target.name] = e.target.value;
        setUser(userInfo)
      }
  }

      const handleSubmit = () => {
        
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((res) => {
                console.log(res)

                const {email} = res.user;
                const signnedInUser = {email:email}
                setLoggedInUser(signnedInUser);
                history.replace(from)
            } )
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
      }

    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var {email} = result.user;
            const signnedInUser = {email:email}
            setLoggedInUser(signnedInUser);
            history.replace(from)

            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
      }


    return (
        <div>
        <Form onSubmit={handleSubmit} className="w-25 mx-auto my-5 border border-secondary p-3 rounded">
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur = {handleBlur}  name = 'email'  type="email" placeholder="Enter email or Username" required/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
    </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur = {handleBlur} name = 'password'  type="password" placeholder="Password" required/>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <input onClick = {handleSubmit} style = {{backgroundColor: 'orange'}}className='d-block w-100 mx-auto rounded'  type="submit" value="Login" />
            <p>Don't have any account? <Link style={{color: 'orange'}} to = '/signUp'>Create an account</Link> </p>
        </Form>
        <hr/>
        <button onClick = {handleGoogleSignIn} className="btn btn-light  btn-block mx-auto w-25 border border-secondary rounded-pill"><img style={{width: '10%'}} src={googleIcon} alt=""/> Continue with Google</button>
        <button onClick = {handleFbSignIn}className="btn btn-light  btn-block mx-auto w-25 border border-secondary rounded-pill"><img style={{width: '10%'}} src={fbIcon} alt=""/> Continue with Facebook</button>

    </div>
    );
};

export default LoginPage;
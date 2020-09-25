import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import * as firebase from "firebase/app";
import "firebase/auth";
import { Link } from 'react-router-dom';
import googleIcon from '../../Icon/google.png'
import fbIcon from '../../Icon/fb.png'
import { useState } from 'react';
import firebaseConfig from '../LoginPage/firebase.config';

const SignUpPage = () => {

    var googleProvider = new firebase.auth.GoogleAuthProvider();
    var fbProvider = new firebase.auth.FacebookAuthProvider();

    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const [user,setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
      }) 

      const handleFbSignIn = () => {
        firebase.auth().signInWithPopup(fbProvider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
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

      const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
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
        const newUserInfo = {...user}
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo)
      }
  }


        // if(isFieldValid === false){
        //     alert("Enter correct form of email.password should be at least 6 characters and contain 1 number")
        // }
    // }

    const handleSubmit = (e) => {
        // if(e.target.password.value !== e.target.confirm.value){
        //     alert("Please confirm your password carefully")
        // }
       
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        
        .then((res) =>{
            const newUserInfo = {...user};
            newUserInfo.error ='';
            newUserInfo.success = true;
            setUser(newUserInfo);
            // updateUserName(user.name)
        })

        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
            
            // ...
          });
          
    }
    return (
        <div>
       
        <Form className="w-25 p-3  m-4 mx-auto border border-secondary rounded" onSubmit={handleSubmit}>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridFirstName" >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control placeholder="" required/>
                </Form.Group>
                </Form.Row>
                <Form.Row>
                    
                <Form.Group as={Col} controlId="formGridLastName" >
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control placeholder="" required/>
                </Form.Group>
             </Form.Row>
            
             <Form.Row>
            
                <Form.Group as={Col} controlId="formGridEmail" >
                    <Form.Label>Username or Email</Form.Label>
                    <Form.Control name = 'email' onBlur = {handleBlur} type="email" placeholder="Enter email or username" required/>
                </Form.Group>
                </Form.Row>

                <Form.Row>
            
                <Form.Group as={Col} controlId="formGridPassword" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control name = 'password'  onBlur = {handleBlur} type="password" placeholder="Password" required/>
                </Form.Group>
                 </Form.Row>

                 <Form.Row>
            
            <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control id = 'confirm' type="password" placeholder="Confirm Password" required/>
            </Form.Group>
             </Form.Row>
            <input onClick={handleSubmit} style = {{backgroundColor: 'orange'}} className='d-block w-100 mx-auto rounded'  type="submit" value="create an account" />
            

            <p>Already have an account? <Link style={{color: 'orange'}} to = '/login'>Login</Link> </p>
        </Form>
        <hr/>

        <button onClick={handleGoogleSignIn} className="btn btn-light  btn-block mx-auto w-25 border border-secondary rounded-pill"><img style={{width: '10%'}} src={googleIcon} alt=""/> Continue with Google</button>
        <button onClick = {handleFbSignIn}className="btn btn-light  btn-block mx-auto w-25 border border-secondary rounded-pill mb-3"><img style={{width: '10%'}} src={fbIcon} alt=""/> Continue with Facebook</button>
        
        
</div>
    );
};

export default SignUpPage;
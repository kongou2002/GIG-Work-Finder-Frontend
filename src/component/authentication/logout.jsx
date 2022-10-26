import React from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Forward } from '@mui/icons-material';
import { redirect } from 'react-router-dom';

const clearLocalStorage = () => {
   localStorage.clear();
   firebase.auth().signOut()
      .then(function () {
         console.log('Signout Succesfull')
      }, function (error) {
         console.log('Signout Failed')
      });
}
function Logout() {
   return clearLocalStorage();
}

export default Logout
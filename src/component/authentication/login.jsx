import React from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Padding } from '@mui/icons-material';

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ]
}
function Login() {
  const handleButton = (event) => {
    const eventRole = event.target.value;
    localStorage.setItem("role", eventRole);
  }
  return (
    <div
      style={{ margin: "100px 40%" }}
    >
      <div
        style={{ marginLeft: "30px" }}
      >
        <form>
          <input name="role" id="applicant" type="radio" value="Applicant" onClick={handleButton} checked style={{ color: "red" }} />
          <label for="applicant" style={{ paddingRight: '5px' }}>Applicant</label>
          <input name="role" id="recruiter" type="radio" onClick={handleButton} value="Recruiter" />
          <label for="recruiter">Recruiter</label>
        </form>
      </div>
      <div style={{ display: 'inline-block' }}>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    </div>


  )
}

export default Login
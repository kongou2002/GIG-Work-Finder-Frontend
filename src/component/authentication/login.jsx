import React from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Padding } from '@mui/icons-material';
import './styleLogin.scss';

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
    <div className='login-around-page'>
      <h1>ĐĂNG NHẬP GIG-WORKER DỄ DÀNG VỚI TÀI KHOẢN GOOGLE</h1>
      <div className='choice-box-login'>
        <p>Chọn quyền của bạn khi đăng nhập:</p>
        <form>
          <input name="role" id="applicant" type="radio" value="Applicant" onClick={handleButton} />
          <label for="applicant" className='labelInput' style={{ paddingRight: '20px' }}>Applicant</label>
          <input name="role" id="recruiter" type="radio" onClick={handleButton} value="Recruiter" />
          <label for="recruiter" className='labelInput'>Recruiter</label>
        </form>
      </div>
      <div className='firebase-login'>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    </div>


  )
}

export default Login
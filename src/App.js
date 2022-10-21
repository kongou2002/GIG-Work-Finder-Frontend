import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/footer';
import AuthHeader from './component/header/AuthHeader';
import Detail from './component/jobOffer/detail';
import HomeBaseOnRole from './pages/home/HomeBaseOnRole';
import Profile from './pages/user/Profile';
import Login from './component/authentication/login';
import firebase from 'firebase';
import { useEffect, useState } from 'react';
import authorizationApi from './api/authorizationAPI';
import Business from './component/business/Business';
// import Recruiter from './component/user/recruiter';
import CreateJO from './component/jobOffer/component/CreateJO';
import { Global } from '@emotion/react';
import { User } from '@auth0/auth0-spa-js';
import UserCreatePage from './pages/user/UserCreatePage';

const config = {
  apiKey: 'AIzaSyByxVrPFIOIRcXURS8m4PodEwtOtQmmY9s',
  authDomain: 'fwapp-firebase.firebaseapp.com'
}

firebase.initializeApp(config);

global.isAuthentication = false;

function App() {
  //Login using firebase
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        console.log("This isn't user");
        return;
      }
      const token = await user.getIdToken();
      // updateData(user.email,"Admin",user.displayName,user.photoURL,user.gender,user.getIdToken());
      // console.log(token);
      // updateData(user);
      // updateData(emailUser,roleUser,nameUser,picUrlUser,genderUser,tokenUser);
      localStorage.setItem('firebase:rememberedAccount', JSON.stringify(firebase.auth().currentUser));
      localStorage.setItem('isAuthenticated', true);
      console.log("role");
      if (localStorage.getItem('role') == null) {
        localStorage.setItem('role', "Applicant");

      }
      const fwAppUserData = await authorizationApi.getToken(token, localStorage.getItem('role'));
      localStorage.setItem("FWApp-gig:rememberedAccount", JSON.stringify(fwAppUserData));
      console.log("JWT FWApp: ");
      console.log(fwAppUserData);
      localStorage.setItem("FWApp-gig:rememberedAccount", JSON.stringify(fwAppUserData));
      localStorage.setItem('isAuthenticated', true);
    })
    return () => unregisterAuthObserver;
  }, [])
  return (
    <div className="App">
      <AuthHeader />
      <Routes>
        <Route path='/' element={<HomeBaseOnRole />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/business/:id' element={<Business />} />
        {/* <Route path='/recruiter/:id' element={<Recruiter />} /> */}
        <Route path='/createjob' element={<CreateJO />} />
        <Route path='/userProfile' element={<UserCreatePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

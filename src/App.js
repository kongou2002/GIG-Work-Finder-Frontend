import firebase from 'firebase';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import authorizationApi from './api/authorizationAPI';
import './App.css';
import Business from './component/business/Business';
import Footer from './component/footer';
import AuthHeader from './component/header/AuthHeader';
import Detail from './component/jobOffer/detail';
import HomeBaseOnRole from './pages/home/HomeBaseOnRole';

import ApplicantManagement from './pages/recruiterManage/applicantManage';
import BusinessManagement from './pages/recruiterManage/businessManage';
import JobOfferManagement from './pages/recruiterManage/jobOfferManage';
import Profile from './pages/user/ViewTheirProfile';
// import Recruiter from './component/user/recruiter';
import UserUpdatePage from '../src/pages/user/UserUpdatePage';
import Createbusines from './component/business/BusinessForm';
import CreateJO from './component/jobOffer/component/CreateJO';
import ViewOtherProfile from './pages/user/ViewOtherProfile';

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
      if (localStorage.getItem('role') == null) {
        localStorage.setItem('role', "Applicant");

      }
      const fwAppUserData = await authorizationApi.getToken(token, localStorage.getItem('role'));
      localStorage.setItem("FWApp-gig:rememberedAccount", JSON.stringify(fwAppUserData));
      localStorage.setItem("FWApp-gig:rememberedAccount", JSON.stringify(fwAppUserData));
      localStorage.setItem('isAuthenticated', true);

    })
    return () => unregisterAuthObserver;
  }, [])
  return (
    <div className="App">
      <AuthHeader />
      <Routes>
        <Route path='/createbusiness' element={<Createbusines />} />
        <Route path='/' element={<HomeBaseOnRole />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile/:role/:id' element={<ViewOtherProfile />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/business/:id' element={<Business />} />
        <Route path='/businessManage' element={<BusinessManagement />} />
        <Route path='/applicantManage' element={<ApplicantManagement />} />
        <Route path='/jobofferManage' element={<JobOfferManagement />} />
        {/* <Route path='/recruiter/:id' element={<Recruiter />} /> */}
        <Route path='/createjob' element={<CreateJO />} />
        <Route path='/userProfile' element={<UserUpdatePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

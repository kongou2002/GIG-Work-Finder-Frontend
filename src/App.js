import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/footer';
import AuthHeader from './component/header/AuthHeader';
import Detail from './component/jobOffer/detail';
import Job from './pages/home/Home';
import Profile from './pages/user/Profile';
import Login from './pages/login';
import firebase from 'firebase';
import { useEffect, useState } from 'react';
import authorizationApi from './api/authorizationAPI';
import Business from './component/business/Business';
import Recruiter from './component/user/recruiter';
import CreateJO from './component/jobOffer/component/CreateJO';
import { Global } from '@emotion/react';

const config = {
  apiKey: 'AIzaSyByxVrPFIOIRcXURS8m4PodEwtOtQmmY9s',
  authDomain: 'fwapp-firebase.firebaseapp.com'
}

firebase.initializeApp(config);

global.isAuthentication = false;

function App() {
  //Login using firebase
  const [data, setData] = useState({
    email: '',
    role: '',
    picUrl:''
  })
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        console.log("This isn't user");
        return;
      }
      const token = await user.getIdToken();
      // console.log(user.displayName);
      // console.log('this is: ', JSON.stringify(user));
      // console.log("Token: ")
      console.log(user.email)
      setData(user.email,"Admin",user.photoURL)
      const FWApp = await authorizationApi.TakeToken(data);
      localStorage.setItem("FWApp-gig:rememberedAccount",JSON.stringify(FWApp))
      localStorage.setItem('firebase:rememberedAccount', JSON.stringify(firebase.auth().currentUser));
    })
    return () => unregisterAuthObserver;
  })
  return (
    <div className="App">
      <AuthHeader />
      <Routes>
        <Route path='/' element={<Job />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/business/:id' element={<Business />} />
        <Route path='/recruiter/:id' element={<Recruiter />} />
        <Route path='/createjob' element={<CreateJO />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

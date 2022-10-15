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
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) =>{
      if (!user){
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
    return() => unregisterAuthObserver;
  })
  return (
    <div className="App">
      <AuthHeader/>
      <Routes>
        <Route exact path='/' element={<Job />} />
        <Route exact path='/profile' element = {<Profile />} />
        <Route exact path='/detail/:id' element={<Detail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

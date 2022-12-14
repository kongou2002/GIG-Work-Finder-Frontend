import firebase from 'firebase';
import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import authorizationApi from './api/authorizationAPI';
import './App.css';
import Business from './component/business/Business';
import Createbusines from './component/business/BusinessForm';
import Footer from './component/footer';
import AuthHeader from './component/header/AuthHeader';
import Detail from './component/jobOffer/detail';
import HomeBaseOnRole from './pages/home/HomeBaseOnRole';
import ApplicantManagement from './pages/recruiterManage/applicantManage';
import BusinessManagement from './pages/recruiterManage/businessManage';
import JobOfferManagement from './pages/recruiterManage/jobOfferManage';
import Profile from './pages/user/ViewTheirProfile';
import JobApplicant from './pages/recruiterManage/findJobApplicant';
import JobApplyManagement from './pages/applicantMange/jobApplyManage';
// import Recruiter from './component/user/recruiter';
import UserUpdatePage from '../src/pages/user/UserUpdatePage';
import CreateJO from './component/jobOffer/component/CreateJO';
import ViewOtherProfile from './pages/user/ViewOtherProfile';
import OfferJobForApplicant from './pages/recruiterManage/offerJobForApplicant';
//Footer Page ========================
import AboutGigworker from './pages/footerPage/aboutGigworker';
import QandA from './pages/footerPage/QandA';
import Contact from './pages/footerPage/contact';
import Security from './pages/footerPage/security';
import Activity from './pages/footerPage/activity';
import Report from './pages/footerPage/report';
import Term from './pages/footerPage/terms';
//Header Page =========================
import AllJob from './pages/headerPage/allJob';
import AllBusiness from './pages/headerPage/allBusiness';
import Login from './component/authentication/login';

const config = {
  apiKey: 'AIzaSyByxVrPFIOIRcXURS8m4PodEwtOtQmmY9s',
  authDomain: 'fwapp-firebase.firebaseapp.com'
}

firebase.initializeApp(config);

global.isAuthentication = false;

function App() {
  const nav = useNavigate();
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

      if (fwAppUserData.createNew == true) localStorage.setItem('isCreateNew', true);
      console.log('fwAppUserData.createNew', fwAppUserData.createNew)
      localStorage.setItem("FWApp-gig:rememberedAccount", JSON.stringify(fwAppUserData));
      localStorage.setItem("token", fwAppUserData.token);
    })
    return () => unregisterAuthObserver;
  }, [])
  return (
    <div className="App">
      <AuthHeader />
      <Routes>
        <Route path='/createbusiness' element={<Createbusines />} />
        <Route path='/updatebusiness/:id' element={<Createbusines />} />
        <Route path='/' element={<HomeBaseOnRole />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile/:role/:id' element={<ViewOtherProfile />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/business/:id' element={<Business />} />
        <Route path='/businessManage' element={<BusinessManagement />} />
        <Route path='/applicantManage' element={<ApplicantManagement />} />
        <Route path='/jobofferManage' element={<JobOfferManagement />} />
        <Route path='/findJobApplicant/:oid' element={<JobApplicant />} />
        <Route path='/jobApplyManage' element={<JobApplyManagement />} />
        <Route path='/offerJobForApplicant' element={<OfferJobForApplicant />} />
        <Route path='/Login' element={<Login />} />
        {/* <Route path='/recruiter/:id' element={<Recruiter />} /> */}
        <Route path='/createjob' element={<CreateJO />} />
        <Route path='/updatejob/:id' element={<CreateJO />} />
        <Route path='/userProfile' element={<UserUpdatePage />} />

        {/* Footer pages =============================*/}
        <Route path='/about' element={<AboutGigworker />} />
        <Route path='/Q&A' element={<QandA />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/security' element={<Security />} />
        <Route path='/activity' element={<Activity />} />
        <Route path='/report' element={<Report />} />
        <Route path='/terms' element={<Term />} />
        {/* Header pages =============================*/}
        <Route path='/alljob' element={<AllJob />} />
        <Route path='/allBusiness' element={<AllBusiness />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;

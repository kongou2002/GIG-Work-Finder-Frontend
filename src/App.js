import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/footer';
import AuthHeader from './component/header/AuthHeader';
import Detail from './component/jobOffer/detail';
import Job from './pages/home/Home';
import Profile from './pages/user/Profile';
import Business from './component/business/Business';
import Recruiter from './component/user/recruiter';
import CreateJO from './component/jobOffer/component/CreateJO';

function App() {

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

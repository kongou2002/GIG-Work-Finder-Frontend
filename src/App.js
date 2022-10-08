import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/footer';
import AuthHeader from './component/header/AuthHeader';
import Detail from './component/jobOffer/detail';
import Job from './pages/home/Home';
import Profile from './pages/user/Profile';

function App() {

  return (
    <div className="App">
      <AuthHeader />
      <Routes>
        <Route exact path='/' element={<Job />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/detail/:id' element={<Detail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

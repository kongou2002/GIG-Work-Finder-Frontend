import { useEffect } from 'react';
import { Route,Routes } from 'react-router-dom';
import companyApi from './api/companyApi';
import './App.css';
import Footer from './component/footer';
import Header from './component/header';
import Login from './pages/Login'
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/footer';
import Header from './component/header';
import Login from './pages/Login';
import Register from './pages/Register.jsx';
import jobOfferApi from './api/JobOffer';
import Home from './pages/home/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

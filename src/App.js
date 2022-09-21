import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/footer';
import Header from './component/header';
import Login from './pages/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/login' element={<Login />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

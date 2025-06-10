import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/login_page/LoginPage';
import Home from './pages/home_page/Home';
import Header from './components/container/header/Header';


function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

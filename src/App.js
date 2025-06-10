import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/login_page/LoginPage';
import Home from './pages/home_page/Home';

function App() {
  return (
    <div className='App'>
      <header>
          <Link to={'/home'}>HOME</Link>
          <Link to={'/'}>LOGIN</Link>
      </header>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

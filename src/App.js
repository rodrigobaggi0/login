import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/login_page/LoginPage';
import Home from './pages/home_page/Home';
import Header from './components/container/header/Header';
import FormCardPage from './pages/form_card/FormCardPage';
import { ThemeProvider } from './theme/themeContext';
import ButtonSwitch from './components/ui/btn_switch/ButtonSwitch';


function App() {
  return (
    <div className='App'>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/formCard' element={<FormCardPage />} />
        </Routes>
      </ThemeProvider>


    </div>
  );
}

export default App;

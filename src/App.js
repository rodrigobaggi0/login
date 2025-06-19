import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/login_page/LoginPage';
import Home from './pages/home_page/Home';
import Header from './components/container/header/Header';
import FormCardPage from './pages/form_card/FormCardPage';
import { ThemeProvider } from './theme/themeContext';
import { GlobalStyle } from './styles/GlobalStyled';
import styled from 'styled-components';

const AppStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${({theme}) => theme.img.primary});
  background-size: cover;
  `;


function App() {
  return (
        <ThemeProvider>
        <GlobalStyle />
        <AppStyle>
        <Header />
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/formCard' element={<FormCardPage />} />
        </Routes>
        </AppStyle>
      </ThemeProvider>   
  );
}

export default App;

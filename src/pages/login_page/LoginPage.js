import { useState } from 'react';
import styled from 'styled-components';
import LoginBtns from '../../components/container/login_btns/LoginBtns';
import LoginInputs from '../../components/container/login_inputs/LoginInputs';
import TextNavigation from '../../components/ui/text_navigation/TextNavigation';
import { useNavigate } from 'react-router-dom';

const LoginPageWrapper = styled.div`
  height: 70vh;
  width: 20vw;
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  border-radius: 1vw;
  box-shadow: 8px 8px 24px 0px rgba(0, 0, 0, 1);
`;

const Blur = styled.div`
  position: absolute;
  height: 70vh;
  width: 20vw;
  border-radius: 1vw;
  background-color: #00000060;
  backdrop-filter: blur(5px);
  z-index: -1;
`;

const Title = styled.div`
  width: 80%;
  text-align: start;

  h1 {
    font-size: 2.5vw;
  }

  p {
    font-size: 0.8vw;
  }
`;

const NavigationCreateAcount = styled.div`
  display: flex;
  font-size: 1.2vw;
`;

function LoginPage() {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const cad = {
    email: 'teste@gmail.com',
    password: '12345678',
  };

  const tryLogin = () => {
    const { email, password } = loginForm;

    if (email === cad.email && password === cad.password) {
      alert('Login realizado com sucesso!');
      navigate('/home');
    } else {
      alert('Email ou Senha incorretos!');
    }
  };

  return (
    <LoginPageWrapper>
      <Blur />
      <Title>
        <h1>LOGIN</h1>
        <p>Agende seu test drive hoje!</p>
      </Title>
      <div>
        <LoginInputs onChange={onChange} />
        <LoginBtns tryLogin={tryLogin} />
      </div>
      <NavigationCreateAcount>
        <h6>Não tem uma conta?&nbsp;</h6>
        <TextNavigation text={'Clique aqui!'} />
      </NavigationCreateAcount>
    </LoginPageWrapper>
  );
}

export default LoginPage;
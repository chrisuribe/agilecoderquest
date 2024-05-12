import { useState } from 'react';
import Login from '../../components/login/loginForm';
import SignUp from '../../components/login/signUp';
import AuthDetails from '../../components/login/AuthDetails';

const LoginPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? (
        <Login onSwitchView={() => setShowLogin(false)} />
      ) : (
        <SignUp onSwitchView={() => setShowLogin(true)} />
      )}
      <AuthDetails />
    </div>
  );
};

export default LoginPage;

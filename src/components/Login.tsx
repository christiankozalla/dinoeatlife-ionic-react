import { IonButton, IonCol, IonGrid, IonInput, IonItem, IonLabel, IonRow } from '@ionic/react';
import React, { FormEventHandler, useState } from 'react';

type LoginOrRegister = 'login' | 'register';
type Credentials = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const [loginOrRegister, setLoginOrRegister] = useState<LoginOrRegister>('login');
  const [credentials, setCredentials] = useState<Credentials>({ email: '', password: '' });

  const handleLogin = () => {
    // Validate credentials -- user-friendly feedback
    // API call from api.ts loginUser()
    // loginUser handle JWTs and updates state
    // loginUser sends feedback here to redirect to auth Home.tsx
    const emailIsValid = validateEmail(credentials.email);
    const passwordIsStrong = validatePassword(credentials.password);

    if (emailIsValid && passwordIsStrong) {
    } else {
      // setError()
      console.error('Something went wrong!');
    }
  };

  const handleRegister = () => {};

  /* ionic provides a pattern attribute on IonInput to check regex on user input */
  const validateEmail = (email: Credentials['email']) => {
    const emailRegEx = new RegExp('[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}');
    const isValid = emailRegEx.test(email);
    return isValid;
  };

  const validatePassword = (password: Credentials['password']) => {
    const specialChar = password.search(/^.*(?=.*[!#$%&? "]).*$/g);
    return password.length > 7 && specialChar > -1;
  };

  return (
    <div className='login'>
      <h2>Login or Register here!</h2>
      <IonItem>
        <IonLabel>Email</IonLabel>
        <IonInput
          type='email'
          value={credentials.email}
          onIonChange={(e) => setCredentials((prev) => ({ ...prev, email: e.detail.value! }))}
          placeholder='Enter your email'
        ></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel>Password</IonLabel>
        <IonInput
          type='password'
          value={credentials.password}
          onIonChange={(e) => setCredentials((prev) => ({ ...prev, password: e.detail.value! }))}
          placeholder='Enter password'
          autocomplete='current-password'
        ></IonInput>
      </IonItem>
      {loginOrRegister === 'login' ? (
        <IonButton expand='block' fill='solid' color='primary' onClick={handleLogin}>
          Login
        </IonButton>
      ) : (
        <IonButton expand='block' fill='solid' color='primary' onClick={handleRegister}>
          Register
        </IonButton>
      )}
    </div>
  );
};

export default Login;

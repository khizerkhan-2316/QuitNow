import '../../root.css';
import './Login.css';
import LoginCard from '../../Components/StatefulComponents/LoginCard/LoginCard.js';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = (props) => {
  const onSubmit = (email, password) => {
    if (!validateInput(email, password)) {
      return;
    }
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        props.setLoggedIn(true);
        localStorage.setItem('isLoggedIn', true);
      })
      .catch((error) => {
        props.setErrorMessage(error.message);
        props.setError(true);
      });
  };

  const validateInput = (email, password) => {
    if (!email.includes('@')) {
      props.setErrorMessage('Enter a correct Email');
      props.setError(true);
      return false;
    }

    if (password.trim().length === 0) {
      props.setErrorMessage('Enter a correct password');
      props.setError(true);
      return false;
    }

    return true;
  };

  return (
    <div className="login-form-container">
      <LoginCard
        heading="SIGN IN TO YOUR ACCOUNT"
        firstOption="Forgot your password?"
        secondOption="Sign Up"
        firstDestination="/reset"
        secondDestination="/signup"
        setEmail={props.setEmail}
        setPassword={props.setPassword}
        error={props.error}
        setError={props.setError}
        onSubmit={() => onSubmit(props.email, props.password)}
        errorMessage={props.errorMessage}
        text={'SIGN IN'}
      />
    </div>
  );
};

export default Login;

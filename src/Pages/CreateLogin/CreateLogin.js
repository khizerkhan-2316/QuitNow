import './CreateLogin.css';
import LoginCard from '../../Components/StatefulComponents/LoginCard/LoginCard.js';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import ConfirmationModal from '../../Components/StatefulComponents/ConfirmationModal/ConfirmationModal.js';

const CreateLogin = (props) => {
  const onSubmit = (email, password) => {
    if (!validateInput(email, password)) {
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        props.setConfirmation(true);
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
      props.setErrorMessage('Enter a password');
      props.setError(true);
      return false;
    }

    return true;
  };

  return (
    <div className="create-login-form-container">
      <LoginCard
        heading="CREATE YOUR ACCOUNT"
        firstOption="Sign In"
        firstDestination="/login"
        secondDestination=""
        setEmail={props.setEmail}
        setPassword={props.setPassword}
        error={props.error}
        setError={props.setError}
        onSubmit={() => onSubmit(props.email, props.password)}
        errorMessage={props.errorMessage}
        text={'SIGN UP'}
      />
      {props.confirmation ? (
        <ConfirmationModal
          confirmation={props.confirmation}
          setConfirmation={props.setConfirmation}
          text="You have succesfully created an acount!"
          heading="Successful!"
          destination="/"
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default CreateLogin;

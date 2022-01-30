import './ResetPassword.css';
import Button from '../../Components/StatelessComponents/Button/Button.js';
import ErrorModal from '../../Components/StatefulComponents/ErrorModal/ErrorModal.js';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import ConfirmationModal from '../../Components/StatefulComponents/ConfirmationModal/ConfirmationModal.js';

import { Link } from 'react-router-dom';
const ResetPassword = (props) => {
  const resetPasswordHandler = (event) => {
    props.setEmail(event.target.value);
  };
  const onSubmit = (email) => {
    if (!validateInput(email)) {
      return;
    }

    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        props.setConfirmation(true);
      })
      .catch((error) => {
        props.setErrorMessage(error.message);
        props.setError(true);
      });
  };

  const validateInput = (email) => {
    if (!email.includes('@')) {
      props.setErrorMessage('Enter a correct Email');
      props.setError(true);
      return false;
    }

    return true;
  };

  return (
    <div className="reset-password-form-container">
      <form className="reset-container">
        <h2>RESET YOUR PASSWORD</h2>
        <div className="input-and-CTA-container">
          <input
            className="input-field username"
            type="text"
            placeholder="Email"
            onChange={resetPasswordHandler}
          />

          <Button type="button" onClick={() => onSubmit(props.email)}>
            RESET PASSWORD
          </Button>
        </div>

        <Link className="login-links" to="/login">
          Sign In
        </Link>
      </form>
      {props.error ? (
        <ErrorModal
          error={props.error}
          setError={props.setError}
          text={props.errorMessage}
        />
      ) : (
        ''
      )}

      {props.confirmation ? (
        <ConfirmationModal
          confirmation={props.confirmation}
          setConfirmation={props.setConfirmation}
          heading="Check your mailbox"
          text="You have recieved a mail in your mailbox, with a link to reset the password"
          destination="/login"
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default ResetPassword;

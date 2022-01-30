import './LoginCard.css';
import Button from '../../StatelessComponents/Button/Button.js';
import ErrorModal from '../ErrorModal/ErrorModal.js';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const LoginCard = (props) => {
  const emailHandler = (event) => {
    props.setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    props.setPassword(event.target.value);
  };

  return (
    <>
      <form className="LoginCard-container">
        <h2>{props.heading}</h2>
        <input
          type="text"
          className="input-field username"
          placeholder="Username"
          onChange={emailHandler}
        />
        <input
          type="password"
          className="input-field password"
          placeholder="Password"
          onChange={passwordHandler}
        />
        <div className="logged-in-container">
          <input type="checkbox" />
          <label className="signin-checkbox-label">Keep me signed in</label>
        </div>
        <Button
          type="button"
          onClick={() => {
            props.onSubmit();
          }}
          style={{ width: '80%' }}
        >
          {props.text}
        </Button>

        <div className="reset-password-and-create-login">
          <Link className="login-links" to={props.firstDestination}>
            {props.firstOption}
          </Link>
          <Link className="login-links" to={props.secondDestination}>
            {' '}
            {props.secondOption}{' '}
          </Link>
        </div>
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
    </>
  );
};

export default LoginCard;

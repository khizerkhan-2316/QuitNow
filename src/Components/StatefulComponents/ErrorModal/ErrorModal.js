import ReactDOM from 'react-dom';
import './ErrorModal.css';
import Button from '../../StatelessComponents/Button/Button.js';

const Error = (props) => {
  const buttonHandler = () => {
    if (props.error) {
      props.setError(false);
    }
  };

  return (
    <div onClick={buttonHandler} className="main-container">
      <div className="errorContainer">
        <div className="heading">
          <h2>Invalid input</h2>
        </div>
        <p>{props.text}</p>
        <div className="button-container">
          <Button
            onClick={buttonHandler}
            className="button"
            style={{ width: '20%' }}
          >
            Okay
          </Button>
        </div>
      </div>
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Error
          error={props.error}
          text={props.text}
          setError={props.setError}
        />,
        document.getElementById('error-root')
      )}
    </>
  );
};

export default ErrorModal;

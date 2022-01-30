import ReactDOM from 'react-dom';
import './ConfirmationModal.css';
import Button from '../../StatelessComponents/Button/Button.js';
import { Link } from 'react-router-dom';
const Confirm = (props) => {
  const buttonHandler = () => {
    if (props.confirmation) {
      props.setConfirmation(false);
      props.setLoggedIn(true);
    }
  };

  return (
    <div onClick={buttonHandler} className="main-container">
      <div className="Confirmation-container">
        <div className="heading">
          <h2>{props.heading}</h2>
        </div>
        <p>{props.text}</p>
        <div className="button-container">
          <Link to={props.destination}>
            <Button
              onClick={buttonHandler}
              className="button"
              style={{ width: '100%' }}
            >
              Okay
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const ConfirmationModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Confirm
          confirmation={props.confirmation}
          text={props.text}
          setConfirmation={props.setConfirmation}
          heading={props.heading}
          destination={props.destination}
        />,
        document.getElementById('confirmation-root')
      )}
    </>
  );
};

export default ConfirmationModal;

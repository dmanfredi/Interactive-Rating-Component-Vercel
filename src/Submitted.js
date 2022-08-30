import { useLocation } from 'react-router-dom';
import illustration from './images/illustration-thank-you.svg';

const Submitted = () => {
  const { state } = useLocation();
  const rating = state.val;

  return (
    <>
      <div className="container submission-container">
        <div className="illustration-wrapper">
          <img
            src={illustration}
            alt="Smartphone with objects whirling about"
            className="illustration-svg"
          />
        </div>
        <div className="rating"> You selected {rating} out of 5 </div>
        <h1 className="thank-you"> Thank you! </h1>
        <div className="description">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </div>
      </div>
    </>
  );
};

export default Submitted;

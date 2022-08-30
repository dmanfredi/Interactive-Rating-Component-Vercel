// import './App.css';

import Review from './Review';
import star from './images/icon-star.svg';
import './Card.css';

function Card() {
  return (
    <div className="App">
      <div className="container">
        <div className="star-container circle">
          <img src={star} alt="Star" className="star-icon" />
        </div>
        <header>
          <h1 className="prompt">How did we do?</h1>
          <div className="request">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </div>
        </header>
        <main>
          <Review> </Review>
        </main>
      </div>
    </div>
  );
}

export default Card;

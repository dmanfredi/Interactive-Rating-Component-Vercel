import { useNavigate } from 'react-router-dom';
import {useState } from 'react';

const Review = () => {
  // Button route hack
  const navigate = useNavigate();
  const [rating, setRating] = useState(-1);

  function handleClick(path, rating) {
    navigate(path, {
      state: {
        val: rating,
      },
    })
  }

  function handleSelect(e) {
    setRating(+e.target.innerHTML);
    document.querySelectorAll('.review-num').forEach((ele) => {
      ele.style.color = '#959eac';
      ele.style.backgroundColor = '#272e38';
      ele.classList.add('review-num-hover');
    });

    e.target.classList.remove('review-num-hover');
    e.target.style.backgroundColor = '#fb7413';
    e.target.style.color = 'white';
  }

  return (
    <>
      <div className="buttons-container">
        <button
          onClick={(e) => handleSelect(e)}
          className="review-num review-num-hover circle"
        >
          1
        </button>
        <button
          onClick={(e) => handleSelect(e)}
          className="review-num review-num-hover circle"
        >
          2
        </button>
        <button
          onClick={(e) => handleSelect(e)}
          className="review-num review-num-hover circle"
        >
          3
        </button>
        <button
          onClick={(e) => handleSelect(e)}
          className="review-num review-num-hover circle"
        >
          4
        </button>
        <button
          onClick={(e) => handleSelect(e)}
          className="review-num review-num-hover circle"
        >
          5
        </button>
      </div>
      {/* <Link className="submit" role="button" to="/submitted">SUBMIT</Link> */}
      <button
        className="submit"
        onClick={() => handleClick('submitted', rating)}
      >
        SUBMIT
      </button>
    </>
  );
};

export default Review;


var maxArea = function(height) {
  let maxArea = 0
  let lIndex = 0;
  let rIndex = height.length - 1;
  
  while (lIndex !== rIndex) {
    let left = height[lIndex];
    let right = height[rIndex];

    let length = rIndex - lIndex;
    let height = Math.max(left, right);

    maxArea = maxArea > length * height ? maxArea : length * height;

    console.log(maxArea);
    if (left < right) lIndex++;
    else if (right < left) rIndex--;
    else lIndex++;
  }

  console.log(maxArea);
};

import React from "react";
import "./styles.css";

/* Instructions (codesandbox.io):
1. Create a component that contains 2 buttons (Like/Dislike) which can be toggled but only one button can be active at any given time.
These buttons will have the following states:
  1. If a button is not active and clicked, the button will increment count and become active.
  2. In addition to #1, if the other button is active, the other button will decrement count and become inactive.
  3. If a button is active and clicked, the button will decrement count and become inactive.
Note: Only one button can be active at any time, but both buttons can be inactive.
2. Add styling to the buttons
3. Add 1 or 2 tests
4. Convert to a typescript file
5. Add Debouncer
*/

const VotingApp = (props) => {
  const [likes, setLikes] = React.useState(100);
  const [dislikes, setDislikes] = React.useState(25);
  const [vote, setVote] = React.useState(null);
  const timerRef = React.useRef(null);

  const handleLike = () => {
    setLikes(vote === "like" ? likes - 1 : likes + 1);
    if (vote === "dislike") setDislikes(dislikes - 1);
    setVote(vote === "like" ? null : "like");
  };

  const handleDislike = () => {
    setDislikes(vote === "dislike" ? dislikes - 1 : dislikes + 1);
    if (vote === "like") setLikes(likes - 1);
    setVote(vote === "dislike" ? null : "dislike");
  };

  const handleVote = (vt) => {
    if (vt === "like") {
      handleLike();
    } else {
      handleDislike();
    }
  };

  /*
  Write a debounce function that takes as arguments:
    a. a function to debounce,
    b. the wait time in milliseconds before executing the debounced function
    ** the timer should reset every time the function is called.
  */
  const debounce = (vt, delay, now) => {
    //let timer;
    let callNow = now;
    return (...params) => {
      let later = () => {
        clearTimeout(timerRef.current);
        timerRef.current = null;
        console.log("after", timerRef.current);
        if (!callNow) handleVote(vt);
      };

      if (callNow && !timerRef.current) {
        console.log("before", timerRef.current);
        handleVote(vt);
      }
      timerRef.current = setTimeout(later, delay);
      console.log("current", timerRef.current);
    };
  };

  let likedClasses = `button ${vote === "like" ? "active" : ""}`;
  let dislikedClasses = `button ${vote === "dislike" ? "active" : ""}`;

  return (
    <div className="container">
      <div className="title">Javascript is the best language</div>
      <div>
        <div
          data-testid="like"
          className={likedClasses}
          onClick={() => handleVote("like")}
          // onClick={debounce("like", 1000, true)}
        >
          <span>Like</span>
          <span> | </span>
          <span className="likes-counter">{likes}</span>
        </div>
        <div
          data-testid="dislike"
          className={dislikedClasses}
          onClick={() => handleVote("dislike")}
          // onClick={debounce("dislike", 1000)}
        >
          <span>Dislike</span>
          <span> | </span>
          <span className="dislikes-counter">{dislikes}</span>
        </div>
      </div>
    </div>
  );
};

export default VotingApp;

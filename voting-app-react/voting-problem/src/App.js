import React from "react";
import "./styles.css";

/* Instructions (codesandbox.io):
1. Create a component that contains 2 buttons (Like/Dislike) that can be toggled (active/inactive).
Note: Only one button can be active at any time, but both buttons can be inactive.
2. Add counters to these buttons with the following states:
  1. If a button is not active and clicked, the button will increment count and become active.
  2. If the other button is active, the other button will decrement count and become inactive.
  3. If a button is active and clicked, the button will decrement count and become inactive.
3. Add styling to the buttons
4. Add 1 or 2 tests
5. Convert to typescript
*/
const VotingApp = (props) => {
  const [likes, setLikes] = React.useState(100);
  const [dislikes, setDislikes] = React.useState(25);

  const handleVote = (vt) => {};

  return (
    <div className="container">
      <div className="title">Javascript is the best language</div>
      <div>
        <div data-testid="like" className="button">
          <span>Like</span>
          <span> | </span>
          <span className="likes-counter">{likes}</span>
        </div>
        <div data-testid="dislike" className="button">
          <span>Dislike</span>
          <span> | </span>
          <span className="dislikes-counter">{dislikes}</span>
        </div>
      </div>
    </div>
  );
};

export default VotingApp;

const VotingApp = props => {
  const [likes, setLikes] = React.useState(100);
  const [dislikes, setDislikes] = React.useState(25);
  const [vote, setVote] = React.useState(null);
  const timerRef = React.useRef(null);
  
  const handleLike = () => {
  	//const { likes, dislikes, vote } = this.state;
    if (vote === 'like') {
    	setLikes(likes - 1);
      setVote(null);
    } else if (vote === 'dislike') {
      setLikes(likes + 1);
      setDislikes(dislikes - 1);
      setVote('like');
    } else {
      setLikes(likes + 1);
      setVote('like');
    }
  };
  
  const handleDislike = () => {
    if (vote === 'like') {
      setLikes(likes - 1);
      setDislikes(dislikes + 1);
      setVote('dislike');
    } else if (vote === 'dislike') {
      setDislikes(dislikes - 1);
      setVote(null);
    } else {
      setDislikes(dislikes + 1);
      setVote('dislike');
    }
  };
  
  const handleVote = (vt) => {
    if (vt === 'like') {
      handleLike();
    } else {
      handleDislike();
  	}
  }
  
  const debounce = (vt, delay, now) => {
    //let timer;
    let callNow = now;
    return (
      (...params) => {
        let later = () => {
          clearTimeout(timerRef.current);
          timerRef.current = null;
          console.log('after', timerRef.current);
          if (!callNow) handleVote(vt);
        };
        
        if (callNow && !timerRef.current) {
        	console.log('before', timerRef.current);
          handleVote(vt);   
        }
        timerRef.current = setTimeout(later, delay);
        console.log('current', timerRef.current);
        
      }
    );
 }
  
  let likedClasses = `button like-button ${vote === 'like' ? 'liked' : ''}`;
  let dislikedClasses = `button dislike-button ${vote === 'dislike' ? 'disliked' : ''}`;
      
  return (
    <div className="container">
      <div className="title">Is Javascript the best language?</div>
      <div>
        <div className={likedClasses} onClick={debounce('like', 1000, true)}>
          <span>Like</span>
          <span> | </span>
          <span className="likes-counter">{likes}</span>
        </div>
        <div className={dislikedClasses} onClick={debounce('dislike', 1000)}>
          <span>Dislike</span>
          <span> | </span>
          <span className="dislikes-counter">{dislikes}</span>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<VotingApp />, document.querySelector("#app"));

import VideoPlayer from "./VideoPlayer.js";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import ThumbsUpDown from "./ThumbsUpDown.js";
import Comments from "./Comments.js";


function App() {
  const [thumbsUpCount, setThumbsUpCount] = useState(0);
  const [thumbsDownCount, setThumbsDownCount ] = useState(0);
  const [showComments, setShowComments] = useState(true);

  const handleThumbsUpClick = () => {
    //function used to update state variable thumbsUpCount
    //takes previous state ('PrevCount') and returns a new state by incrementing it by 1
    setThumbsUpCount(PrevCount => PrevCount + 1);
  }

  const handleThumbsDownClick = () => {
    //function used to update setThumbsDownCount
    setThumbsDownCount(PrevCount => PrevCount +1);
  }

  const handleToggleComments = () => {
    setShowComments((prevShowComments) => !prevShowComments);
  };

  return (
    <div className="App">
      
      <h2>React Today and Tomorrow and 90% Cleaner React with Hooks</h2>
      <h6>730707 Views|Uploaded Oct 26,2018</h6>

      <ThumbsUpDown 
      onThumbsUp={handleThumbsUpClick}
      onThumbsDown={handleThumbsDownClick}
      thumbsUpCount={thumbsUpCount}
      thumbsDownCount={thumbsDownCount}
      />

      
      <button onClick={handleToggleComments}>
        {showComments ? 'Hide Comments' : 'Show Comments'}
      </button>

      <hr />
      { showComments && <Comments /> }


    </div>
  );
}

export default App;

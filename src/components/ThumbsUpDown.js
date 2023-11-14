import React from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faStar, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';


 const ThumbsUpDown = ({onThumbsUp, onThumbsDown, thumbsUpCount, thumbsDownCount }) => {
    return (
        <div>
            <FontAwesomeIcon icon={faThumbsUp} onClick={onThumbsUp} />
            <p>Thumbs Up Count: { thumbsUpCount} </p>
            <FontAwesomeIcon icon={faThumbsDown} onClick={onThumbsDown} />
            <p>Thumbs Down Count:{ thumbsDownCount}</p>
        </div>
    );
 };

 export default ThumbsUpDown;
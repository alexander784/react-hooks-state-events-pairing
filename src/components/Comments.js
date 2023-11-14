import React, { useEffect, useState } from "react";
import App from "./App";


const Comments = () => {
    const [comments, setComments ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001')
        .then(response => response.json())
        .then(data => setComments(data.comments))
        .catch(error => console.error("Error fetching comments:", error));
    }, []);

    return (
        <div>
            <p>2 Comments</p>
            <p>duane - first!</p>
            <p>gaergon - What a great tutorial!</p>

        </div>
    );
};

export default Comments;
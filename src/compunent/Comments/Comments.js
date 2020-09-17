import React, { useEffect, useState } from 'react';
import Comment from '../Comment/Comment';

const Comments = (props) => {

    const { postId } = props;

    const [comment, setComment] = useState([])

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setComment(data)
            })
    }, [postId])

    // console.log(comment)
    return (
        <div>
            <h4>Comments:</h4>
            {
                comment.map(comment => <Comment comment={comment} ></Comment>)
            }
        </div>
    );
};

export default Comments;
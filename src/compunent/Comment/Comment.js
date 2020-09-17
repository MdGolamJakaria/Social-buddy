import React from 'react';
import './Comment.css'
const Comment = (props) => {
    console.log(props.comment)
    const { name, email, body } = props.comment
    return (
        <div className='com-area'>
            <div className="images-area">
                <img src="https://images.pexels.com/photos/936229/pexels-photo-936229.jpeg" alt="" />
            </div>
            <div className="content-area">
                <h5>{body}</h5>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
            </div>
        </div>
    );
};

export default Comment;
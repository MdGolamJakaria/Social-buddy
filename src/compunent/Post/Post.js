import React from 'react';
import { Link } from 'react-router-dom';
import './post.css'
const Post = (props) => {

    // console.log(props.post)
    const { userId, id, title, body } = props.post;
    return (
        <div>
            <div className="card">
                <div className="title">
                    <h2>{title}</h2>
                </div>
                <div>
                    <Link to={"post/" + id} ><button className="more-btn"> See More</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Post;
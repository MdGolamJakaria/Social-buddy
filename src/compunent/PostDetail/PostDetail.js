import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import './PostDetail.css'

const PostDetail = () => {
    const { postId } = useParams()
    const [postDetail, setPostDetail] = useState([])
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPostDetail(data)
            })
    }, [])
    return (
        <div>
            <div className="detail-card">
                <h4>Id:{postDetail.id}</h4>
                <h2> Name: {postDetail.title}</h2>
                <p>{postDetail.body}</p>
                <Link to='/home'><button className='home-btn'>Go Home</button></Link>
            </div>
            <br />
            <div className="comment-area">
                <Comments postId={postDetail.id}></Comments>
            </div>
        </div>
    );
};

export default PostDetail;
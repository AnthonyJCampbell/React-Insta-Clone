import React from 'react';
import CommentSection from './../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import './PostContainer.css';

const PostContainer = ({ props }) => {
    return (
        <div className="PostContainer">
            <div className="accountBar"><img src={props.thumbnailUrl} alt={props.username}/><a href="google.com">{props.username}</a></div>   
            <img src={`${props.imageUrl}`} alt="sd" />
            <div className="clickContainer">
                <i className="far fa-heart"></i>
                <i class="far fa-comment"></i>
            </div>

            <h4>{props.likes} likes</h4>
            <CommentSection comments={props.comments} />
        </div>
    );
}

export default PostContainer;

PostContainer.propTypes = {
    props: PropTypes.shape({
            username: PropTypes.string.isRequired,
            thumbnailUrl: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            likes: PropTypes.number.isRequired,
            timestamp: PropTypes.string.isRequired,
        }).isRequired,
}
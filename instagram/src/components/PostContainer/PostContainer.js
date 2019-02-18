import React from 'react';
import CommentSection from './../CommentSection/CommentSection';
import PropTypes from 'prop-types';

const PostContainer = ({ props }) => {
    return (
        <div>
                <img src={`${props.imageUrl}`} alt="sd" />
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
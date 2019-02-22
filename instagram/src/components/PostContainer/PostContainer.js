import React from 'react';
import CommentSection from './../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import './PostContainer.css';

import styled from 'styled-components';

const StyledPostContainer = styled.div`
    width: 99%;
    margin: 0 auto;
`;
const AccountBar = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    font-weight: 700;
    img {
        margin: 10px 12px 10px 10px;
        max-width: 5.5%;
        border-radius: 100%;
    }
`;
const Lowercontainer = styled.div`
    margin: 5px 12px;
    div {
        display: flex;
        align-items: center;
        i {
            transform: scale(1.4);
            margin: 5px 20px 10px 5px;
            transition: 1s;
            &:hover {
                transform: scale(1.8);
            }
        }
    }
    h4 {
        margin: 5px 0 3px;
        transition: 1s;
        &:hover {
            color: royalblue;
        }
    }
`;


const PostContainer = ({ props, num, addComment, addLike }) => {

    const likeHandler = (id) => {
        return addLike(id);
    }
    
    return (
        <StyledPostContainer className="PostContainer">
            <AccountBar className="accountBar">
                <img src={props.thumbnailUrl} alt={props.username}/><a href="google.com">{props.username}</a>
            </AccountBar>
            <img src={`${props.imageUrl}`} alt="sd" />
            <Lowercontainer >
                <div className="clickContainer">
                    <i onClick={() => likeHandler(num)} className="far fa-heart"></i>
                    <i className="far fa-comment"></i>
                </div>

                <h4>{props.likes} likes</h4>
            </Lowercontainer>
                <CommentSection comments={props.comments} num={num} addComment={addComment} />
        </StyledPostContainer>
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
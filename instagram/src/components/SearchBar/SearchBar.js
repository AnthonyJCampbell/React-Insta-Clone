import React from 'react';
import './SearchBar.css';

import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 22px 15px 22px;
    flex-wrap: wrap;
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 5px;
`;

const Left = styled.div`
    font-size: 1em;
    width: 25%;
    display: flex;
    align-items: center;
    min-width: 140px;
    margin: 14px 0px 14px 14px;
    a {
    text-decoration: none;
    color: initial;
    }
    i {
        transform: scale(1.8);
        &:hover {
            transform: scale(2);
        }
    }
    h1 {
    font-size: 1em;
    margin-left: 14px;
    }
`;

const Search = styled.input`  
    width: 30%;
    transition: 1s;
    font-size: 1em;
    text-align: center;
    margin: 10px 0;
    &:hover, &:focus, &:active {
    transition: 1s;
    transform: scale(1.25);
    color: royalblue;
    outline: none;
    border-radius: 15px;
}
`;

const Right = styled.div`
    display: flex;
    width: 20%;
    min-width: 120px;
    justify-content: space-around;
    margin: 10px 0;
    i {
        transform: scale(1.5);
        &:hover {
            transition: 1s;
            transform: scale(1.75);
            color: royalblue;
            outline: none;
            border-radius: 15px;
        }
    }
`;

const SearchBar = ({ filterPosts, logOut }) => {
    const changeHandler = (event) => {
        return filterPosts(event.target.value);
    }

    return (
        <Header className="SearchBar">
            <Left className="left">
                <i className="fab fa-instagram"></i>
                <a href="google.com"><h1> | INSTAGRAM</h1></a>
            </Left>
            <Search onChange={changeHandler} type="text" placeholder="Search" />
            <Right className="right">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i onClick={logOut} className="far fa-user"></i>
            </Right>
        </Header>
    );
}

export default SearchBar;

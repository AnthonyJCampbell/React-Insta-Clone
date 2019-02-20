import React from 'react';
import './SearchBar.css';

const SearchBar = ({ filterPosts, logOut }) => {
    const changeHandler = (event) => {
        return filterPosts(event.target.value);
    }

    return (
        <div className="SearchBar">
            <div className="left">
                <i className="fab fa-instagram"></i>
                <a href="google.com"><h1> | INSTAGRAM</h1></a>
            </div>
            <input id="search" onChange={changeHandler} type="text" placeholder="Search" />
            <div className="right">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i onClick={logOut} className="far fa-user"></i>
            </div>
        </div>
    );
}

export default SearchBar;

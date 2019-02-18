import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="SearchBar">
            <div className="left">
                <i className="fab fa-instagram"></i>
                <a href="google.com"><h1> | INSTAGRAM</h1></a>
            </div>
            <input type="text" placeholder="Search" />
            <div className="right">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>
        </div>
    );
}

export default SearchBar;

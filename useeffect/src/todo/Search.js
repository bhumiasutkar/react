import React from 'react';
import { filterTask } from '../store/actionCreator';
import { useDispatch } from 'react-redux';

function Search ({ searchHandler }) {
    return (
        <>
            <div className="search-box">
                <i className="material-icons">&#xE8B6;</i>
                <input type="text" className="form-control" placeholder="Search&hellip;" onChange={e => searchHandler(e)} />
            </div>
        </>

    );
}

export default Search;
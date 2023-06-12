import React from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {
    return (
        <>
        <h2>Контакты</h2>
        <Link to="/"> <button>Home</button> </Link>
        <Link to="/users"> <button>Users</button> </Link>    
        </>
    );
}

export default Posts;
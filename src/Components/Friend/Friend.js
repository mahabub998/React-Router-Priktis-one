
import Button from 'react-bootstrap/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {
    const {id,name,email} =props.friend;
    return (
        <div className="friend-cart">
            <p>Id : {id}</p>
            <h4>Name : {name}</h4>
            <h4>Email : {email}</h4>
            <p><Link to={`/friend/${id}`}> <Button variant="primary">ShowDetail</Button></Link></p>
        </div>
    );
};

export default Friend;
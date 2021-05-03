import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const {friendDetail} = useParams()
   const [friendId,setFriendId] = useState({})
   

   useEffect( () => {
       const url = `https://jsonplaceholder.typicode.com/users/${friendDetail}`
       fetch(url)
       .then( res => res.json())
       .then(data => setFriendId(data))
   },[])
    return (
        <div> 
            <h4>Name: {friendId.name}</h4>
            <h5>UserName : {friendId.username}</h5>
            <p>phone : {friendId.phone}</p>
            <p>website : {friendId.website}</p>            
            
        </div>
    );
};

export default FriendDetail;
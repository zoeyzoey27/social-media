import React from 'react';

const CloseFriend = ({user}) => {
  return <li className='sidebar-listitem'>
       <img src={user.profilePicture} alt="" className="sidebar-friend-img"/>
       <span className='sidebar-friend-name'>{user.username}</span> 
  </li>;
};

export default CloseFriend;

import React from 'react';

const Online = ({user}) => {
  return  <li className='rightbar-friend'>
     <div className='rightbar-profileImg-container'>
         <img className='rightbar-profileImg' src={user.profilePicture} alt=''/>
         <span className='rightbar-online'></span>
     </div>
     <p className='rightbar-username'>{user.username}</p>
   </li>;
};

export default Online;

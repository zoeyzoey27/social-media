import React from 'react';

const Friend = ({user}) => {
  return <div className='listfriend-bottom-item'>
       <img className='listfriend-bottom-img' src={user.profilePicture} alt=''/>
       <div className='listfriend-bottom-info'>
            <strong className='listfriend-bottom-name'>{user.username}</strong>
            <i className="listfriend-bottom-icon fas fa-ellipsis-h"></i>
        </div>
  </div>;
};

export default Friend;

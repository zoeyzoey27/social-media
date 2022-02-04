import React from 'react';
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import ProfileTop from '../components/ProfileTop';
import ListFriend from '../components/ListFriend';

const Friends = () => {
  return <div>
      <Topbar/>
      <div className='profile'>
          <Sidebar/>
          <div className='profile-right'>
              <div className="profile-right-top">
                  <ProfileTop/>
              </div>
              <div className="profile-right-bottom about">
                  <ListFriend/>
              </div>
          </div>
      </div>
  </div>;
};

export default Friends;

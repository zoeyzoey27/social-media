import React from 'react';
import Feed from '../components/Feed';
import ProfileRightbar from '../components/ProfileRightbar';
import ProfileTop from '../components/ProfileTop';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

const Profile = () => {
  return <div>
      <Topbar />
      <div className='profile'>
          <Sidebar/>
          <div className='profile-right'>
              <div className='profile-right-top'>
                  <ProfileTop/>
              </div>
              <div className='profile-right-bottom'>
                  <Feed/>
                  <ProfileRightbar/>
              </div>
          </div>
      </div>
  </div>;
};

export default Profile;

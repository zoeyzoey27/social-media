import React from 'react';
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import HomeRightbar from '../components/HomeRightbar';
import Feed from '../components/Feed';

const Home = () => {
  return <div>
      <Topbar/>
      <div className='home-container'>
          <Sidebar/>
          <Feed/>
          <HomeRightbar/>
      </div>
  </div>;
};

export default Home;

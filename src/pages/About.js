import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import ProfileTop from '../components/ProfileTop';
import AboutMenu from '../components/AboutMenu';
import AboutOverview from '../components/AboutOverview';

const About = () => {
  return <div>
      <Topbar/>
      <div className='profile'>
          <Sidebar/>
          <div className='profile-right'>
              <div className='profile-right-top'>
                  <ProfileTop/>
              </div>
              <div className='profile-right-bottom about'>
                  <div className='about-left'>
                      <AboutMenu/>
                  </div>
                  <div className='about-right'>
                      <AboutOverview/>
                  </div>
              </div>
          </div>
      </div>
  </div>;
};

export default About;

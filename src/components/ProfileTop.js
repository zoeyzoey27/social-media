import React from 'react';
import { Link } from 'react-router-dom';

const ProfileTop = () => {
  return <div>
      <div className='profile-cover'>
            <img className='profile-cover-img' src='/assets/images/cover.jpg' alt=''/>
            <img className='profile-user-img' src='/assets/images/person/1.jpeg' alt=''/>
      </div>
      <div className='profile-info'>
            <h4 className='profile-info-name'>Zoey Zoey</h4>
            <p className='profile-info-decs'>|08.07.2021|</p>
      </div>
      <hr className='hr-profile'/>
            <div className='profile-menu-options'>
                <Link to='/profile' className='link'><p className='profile-menu-option'>Bài viết</p></Link>
                <Link to='/about' className='link'><p className='profile-menu-option'>Giới thiệu</p></Link>
                <Link to='/friends' className='link'><p className='profile-menu-option'>Bạn bè</p></Link>
                <p className='profile-menu-option'>Ảnh</p>
                <p className='profile-menu-option'>Video</p>
            </div>
  </div>;
};

export default ProfileTop;

import React from 'react';
import { Users } from '../data';
import Online from './Online';

const HomeRightbar = () => {
 
  return <div className='rightbar home-rightbar'>
    <div className='rightbar-wrapper'>
        <div className='birthday-container'>
          <img src='/assets/images/gift.png' alt='' className='birthday-img'/>
          <span className='birthday-text'>Hôm nay là sinh nhật của <b>Nguyễn Thành Trung</b>. Hãy chúc mừng anh ấy nào!</span>
        </div>
        <img src='/assets/images/ad.png' alt='' className='rightbar-ad-img'/>
        <h4 className='rightbar-title'>Người liên hệ</h4>
        <ul className='rightbar-friendlist'>
          {Users.map((u)=>(
             <Online key={u.id} user={u} />
          ))}
        </ul>
    </div>
  </div>;
};

export default HomeRightbar;

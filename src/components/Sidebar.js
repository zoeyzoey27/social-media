import React from 'react';
import { Users } from '../data';
import CloseFriend from './CloseFriend';

const Sidebar = () => {
  return <div className='sidebar'>
     <div className='sidebar-wrapper'>
        <ul className='sidebar-list'>
            <li className='sidebar-listitem'>
                <i className="sidebar-icon fas fa-user-friends"></i>
                <span className='sidebar-listitem-text'>Bạn bè</span> 
            </li>
            <li className='sidebar-listitem'>
                <i className="sidebar-icon fas fa-history"></i>
                <span className='sidebar-listitem-text'>Kỷ niệm</span> 
            </li>
            <li className='sidebar-listitem'>
                <i className="sidebar-icon fas fa-users"></i>
                <span className='sidebar-listitem-text'>Nhóm</span> 
            </li>
            <li className='sidebar-listitem'>
                <i className="sidebar-icon fas fa-store"></i>
                <span className='sidebar-listitem-text'>Marketplace</span> 
            </li>
            <li className='sidebar-listitem'>
                <i className="sidebar-icon fas fa-tv"></i>
                <span className='sidebar-listitem-text'>Watch</span> 
            </li>
            <li className='sidebar-listitem'>
                <i className="sidebar-icon fas fa-star"></i>
                <span className='sidebar-listitem-text'>Yêu thích</span> 
            </li>
            <li className='sidebar-listitem'>
                <i className="sidebar-icon fas fa-bookmark"></i>
                <span className='sidebar-listitem-text'>Đã lưu</span> 
            </li>
            <li className='sidebar-listitem'>
                <i className="sidebar-icon fas fa-calendar-day"></i>
                <span className='sidebar-listitem-text'>Sự kiện</span> 
            </li>
        </ul>
        <button className='showmore-btn'><i className="fas fa-chevron-down"></i>Xem thêm</button>
        <hr/>
        <h4 className='shortcuts-title'>Lối tắt của bạn</h4>
        <ul className='sidebar-list'>
            {Users.map((u)=> (
                <CloseFriend key={u.id} user={u}/>
            ))}
        </ul>
      
     </div>
  </div>;
};

export default Sidebar;

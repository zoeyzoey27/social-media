import React from 'react';
import { Users } from '../data';
import Friend from './Friend';

const ListFriend = () => {
  return <div className='friends'>
      <div className='listfriend-top'>
          <div className='listfriend-top-left'>
              <h3 className='about-left-title '>Bạn bè</h3>
          </div>
          <div className='listfriend-top-right'>
              <div className='listfriend-search-box show-1'>
                  <i className="listfriend-search-icon fas fa-search"></i>
                  <input className='listfriend-input' type='text' placeholder='Tìm kiếm'/>
              </div>
              <div className='listfriend-search-box show-2'>
                  <i className="listfriend-search-icon fas fa-search"></i>
                  <div className='listfriend-search-box-down'>
                      <div className='listfriend-search-box-down-container'>
                         <i className="listfriend-search-icon search-friend-icon-down fas fa-search"></i>
                         <input className='listfriend-search-box-down-input' type='text' placeholder='Tìm kiếm'/>
                      </div>
                  </div>
              </div>
              <p className="friend-request">Lời mời kết bạn</p>
          </div>
      </div>
      <div className='listfriend-bottom'>
           {Users.map((u)=>(
               <Friend key={u.id} user={u}/>
           ))}
         
         
         
      </div>
  </div>;
};

export default ListFriend;

import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return <div className='topbar-container'>
      <div className='topbar-left'>
          <Link to='/home' className='link'> <span className='logo'>Social Media</span></Link>
      </div>
      <div className='topbar-center'>
          <div className='search-box search-show-1'>
              <i className="search-icon fas fa-search"></i>
              <input className='search-input' type='text' placeholder='Tìm kiếm' />
          </div>
          <div className='search-box search-show-2'>
              <i className="search-icon fas fa-search"></i>
              <div className='search-box-down-container'>
                   <div className='search-box-down'>
                       <i className="search-icon fas fa-search"></i>
                       <input className='search-input' type='text' placeholder='Tìm kiếm' />
                   </div>
              </div>
              
          </div>
      </div>
      <div className='topbar-right'>
          <div className='topbar-links'>
              <Link to='/home' className='link'><p className='topbar-link'>Trang chủ</p></Link>
              <Link to='/profile' className='link'><p className='topbar-link'>Dòng thời gian</p></Link>
          </div>
          <div className='topbar-icons'>
              <div className='topbar-icon-item'>
                  <i className="icon-item fas fa-user"></i>
                  <span className='topbar-icon-badge'>1</span>
              </div>
              <div className='topbar-icon-item'>
                  <i className="icon-item fas fa-comment"></i>
                  <span className='topbar-icon-badge'>2</span>
              </div>
              <div className='topbar-icon-item'>
                  <i className="icon-item fas fa-bell"></i>
                  <span className='topbar-icon-badge'>3</span>
              </div>
          </div>
          <div className='top-bar-options'>
             <img src="/assets/images/person/1.jpeg" alt='' className='topbar-img top'/>
             <div className='topbar-menu-down'>
                <i className="topbar-menu-down-icon fas fa-sort-down"></i>
                <div className='topbar-menu-down-box'>
                    <div className='topbar-menu-down-profile'>
                          <img src="/assets/images/person/1.jpeg" alt='' className='topbar-img '/>
                          <Link to='/profile' className='link'>
                          <div className='topbar-menu-down-profile-text'>
                              <p className='topbar-menu-down-profile-name'>Zoey Zoey</p>
                              <p className='topbar-menu-down-profile-desc'>Xem dòng thời gian của bạn</p>
                          </div>
                          </Link>
                          
                    </div>
                    <hr/>
                    <ul className='topbar-menu-down-optionMenu'>
                        <li className='topbar-menu-down-optionMenu-item'>
                             <i className="optionMenu-item-icon fas fa-exclamation-circle"></i>
                             <span className='optionMenu-item-title'>Đóng góp ý kiến</span>
                        </li>
                        <li className='topbar-menu-down-optionMenu-item'>
                             <i className="optionMenu-item-icon fas fa-cog"></i>
                             <span className='optionMenu-item-title'>Cài đặt & quyền riêng tư</span>
                        </li>
                        <li className='topbar-menu-down-optionMenu-item'>
                             <i className="optionMenu-item-icon fas fa-question-circle"></i>
                             <span className='optionMenu-item-title'>Trợ giúp & hỗ trợ</span>
                        </li>
                        <Link to ='/' className='link'>
                        <li className='topbar-menu-down-optionMenu-item'>
                             <i class="optionMenu-item-icon fas fa-sign-out-alt"></i>
                             <span className='optionMenu-item-title'>Đăng xuất</span>
                        </li>
                        </Link>
                        
                    </ul>
                </div>
             </div>
          </div>
         
      </div>
  </div>;
};

export default Topbar;

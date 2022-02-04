import React from 'react';

const ProfileRightbar = () => {
  return <div className='rightbar profile-rightbar'>
       <div className='rightbar-wrapper'>
       <h4 className='rightbar-title profile-rightbar-title'>Giới thiệu</h4>
        <div className='rightbar-info'>
            <div className='rightbar-info-item'>
                 <div className='rightbar-info-key'><i className="fas fa-graduation-cap"></i></div>
                 <div className='rightbar-info-value'>Học tại <strong>Học viện Công nghệ Bưu chính Viễn thông</strong></div>
            </div>
            <div className='rightbar-info-item'>
                 <div className='rightbar-info-key'><i className="fas fa-home"></i></div>
                 <div className='rightbar-info-value'>Sống tại <strong>Hà Nội</strong></div>
            </div>
            <div className='rightbar-info-item'>
                 <div className='rightbar-info-key'><i className="fas fa-map-marker-alt"></i></div>
                 <div className='rightbar-info-value'>Đến từ <strong>Phú Thọ</strong></div>
            </div>
            <div className='rightbar-info-item'>
                 <div className='rightbar-info-key'><i className="fas fa-heart"></i></div>
                 <div className='rightbar-info-value'>Đang hẹn hò với <strong>Nguyễn Thành Trung</strong></div>
            </div>
        </div>
        <img className='rightbar-featured-photo' src='/assets/images/person/4.jpeg' alt=''/>
        <div className='rightbar-title-box'>
            <h4 className='rightbar-title profile-rightbar-title'>Bạn bè</h4>
            <small className='rightbar-title-more'>Xem tất cả</small>
        </div>
        <div className='rightbar-profile-friends'>
           <div className='rightbar-profile-friend'>
               <img src='/assets/images/person/2.jpeg' alt='' className='rightbar-friend-profileImg'/>
               <p className='rightbar-friend-name'>Ngoc Anh</p>
           </div>
           <div className='rightbar-profile-friend'>
               <img src='/assets/images/person/3.jpeg' alt='' className='rightbar-friend-profileImg'/>
               <p className='rightbar-friend-name'>John Doe</p>
           </div>
           <div className='rightbar-profile-friend'>
               <img src='/assets/images/person/4.jpeg' alt='' className='rightbar-friend-profileImg'/>
               <p className='rightbar-friend-name'>Nguyễn Thành Trung</p>
           </div>
           <div className='rightbar-profile-friend'>
               <img src='/assets/images/person/5.jpeg' alt='' className='rightbar-friend-profileImg'/>
               <p className='rightbar-friend-name'>Miew Miew</p>
           </div>
           <div className='rightbar-profile-friend'>
               <img src='/assets/images/person/6.jpeg' alt='' className='rightbar-friend-profileImg'/>
               <p className='rightbar-friend-name'>Kwann</p>
           </div>
           <div className='rightbar-profile-friend'>
               <img src='/assets/images/person/7.jpeg' alt='' className='rightbar-friend-profileImg'/>
               <p className='rightbar-friend-name'>Nga Lê</p>
           </div>
        </div>
       </div>
  </div>;
};

export default ProfileRightbar;

import React from 'react';

const Share = () => {
  return <div className='share'>
      <div className='share-wrapper'>
          <div className='share-top'>
              <img src='/assets/images/person/1.jpeg' alt='' className='share-profile-img'/>
              <input type='text' placeholder='Bạn đang nghĩ gì?' className='share-input'/>
          </div>
          <hr/>
          <div className='share-bottom'>
              <div className='share-options'>
                  <div className='share-option'>
                      <i className="share-option-icon fas fa-video"></i>
                      <span className='share-option-text'>Phát trực tiếp</span>
                  </div>
                  <div className='share-option'>
                      <i className="share-option-icon fas fa-photo-video"></i>
                      <span className='share-option-text'>Hình ảnh/Video</span>
                  </div>
                  <div className='share-option share-option-emoji'>
                      <i className="share-option-icon far fa-laugh-beam"></i>
                      <span className='share-option-text'>Cảm xúc/Hoạt động</span>
                  </div>
              </div>
              <button className='share-btn'>Đăng</button>
          </div>
      </div>
  </div>;
};

export default Share;

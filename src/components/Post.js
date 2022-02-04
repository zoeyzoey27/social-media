import React from 'react';
import { Users } from '../data';
import { useState } from 'react';

const Post = ({post}) => {
  const [like,setLike] = useState(post.like);
  const [isLiked,setIsLiked] = useState(false);
  const likeHandler = () => {
      setLike (isLiked ? like-1 : like+1);
      setIsLiked(!isLiked);
  }
  return <div className='post'>
      <div className='post-wrapper'>
          <div className='post-top'>
              <div className='post-top-left'>
                  <img src={Users.filter((u)=> u.id===post.userId)[0].profilePicture} alt='' className='post-profileImg'/>
                  <div className='post-top-info'>
                    <p className='post-username'>{Users.filter((u)=> u.id===post.userId)[0].username}</p>
                    <p className='post-time'>{post.date}</p>
                  </div>
              </div>
              <div className='post-top-right'><i class="fas fa-ellipsis-h"></i></div>
          </div>
          <div className='post-center'>
              <p className='post-cap'>{post.desc}</p>
              <img src={post.photo} alt='' className='post-img'/>
          </div>
          <div className='post-bottom'>
              <div className='post-bottom-left'>
                  <img src='/assets/images/like.png' alt='' className='like-icon'/>
                  <img src='/assets/images/heart.png' alt='' className='like-icon'/>
                  <span className='post-like-counter'>{like}</span>
              </div>
              <div className='post-bottom-right'>
                  <span className='post-bottom-right-text'>{post.comment} bình luận</span>
                  <span className='post-bottom-right-text'>{post.share} lượt chia sẻ</span>
              </div>
          </div>
          <div className='post-bottom-options'>
              <div className='post-bottom-option option-like' onClick={likeHandler}>
                  <i className="post-bottom-option-icon far fa-thumbs-up"></i>
                  <span className='post-bottom-option-text'>Thích</span>
                  <div className='post-bottom-like'>
                    <img src='/assets/images/like.png' alt='' className='post-bottom-like-icon'/>
                    <img src='/assets/images/heart.png' alt='' className='post-bottom-like-icon'/>
                  </div>
              </div>
              <div className='post-bottom-option'>
                  <i className="post-bottom-option-icon far fa-comment"></i>
                  <span className='post-bottom-option-text'>Bình luận</span>
              </div>
              <div className='post-bottom-option'>
                  <i className="post-bottom-option-icon fas fa-share"></i>
                  <span className='post-bottom-option-text'>Chia sẻ</span>
              </div>
          </div>
          <div className='post-comment'>
              <img src='/assets/images/person/1.jpeg' alt='' className='post-comment-img'/>
              <div className='post-comment-box'>
                    <input type='text' placeholder='Viết bình luận' className='post-comment-input'/>
                    <i className="post-comment-icon far fa-paper-plane"></i>
              </div>
          </div>
      </div>
  </div>;
};

export default Post;

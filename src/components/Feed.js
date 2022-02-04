import React from 'react';
import Share from './Share'
import Post from './Post';
import { Posts } from '../data';

const Feed = () => {
  return <div className='feed'>
    <div className='feed-wrapper'>
       <Share/>
       {Posts.map((p)=> (
         <Post key={p.id} post={p}/>
       ))}
    </div>
  </div>;
};

export default Feed;

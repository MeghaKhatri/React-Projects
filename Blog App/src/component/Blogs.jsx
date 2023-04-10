import React, { useContext } from 'react'
import { Appcontext } from '../context/Appcontext';
import Spiner from './Spiner';
import './Blog.css';

function Blogs() {
  const {posts, loading} = useContext(Appcontext);
  return (
    <div className='blogs'>
      {
        loading ? (<Spiner/>): 
        (posts.length ===0 ? (<div> <p>page not found</p></div>) : 
        (posts.map((post)=>(
          <div key={post.id}>
            <p className='title'>{post.title}</p>
            <p>By <span>{post.author}</span>on {post.category}</p>
            <p>Posted on {post.date}</p>
            <p>{post.content}</p>
            <div className='tags'>
              {post.tags.map((tag , index)=>{
                return <span key={index}>{`#${tag}`}</span>

              })}
            </div>
          </div>
        )) ) )
      }
    </div>
  )
}

export default Blogs;


import React, { useContext, useEffect } from 'react'
import Header from './component/Header';
import Blogs from './component/Blogs';
import Pagination from './component/Pagination';
import { Appcontext } from './context/Appcontext';

function App() {
  const {fetchBlogPosts} = useContext(Appcontext);
  useEffect(()=>{
    fetchBlogPosts();
  },[]);
  return (
    <div>
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default App;

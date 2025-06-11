import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/slices/postsSlice';
import { Navbar } from '@/layout/Navbar';
import Link from 'next/link';
import { useRouter } from 'next/router';

function PostsList() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.posts);
  const router = useRouter();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  const handleChange = (dynamic) => {
    router.push(`/posts/${dynamic}`)
  }

  return (
    <div className='bg-gray-100 min-h-screen pt-15 p-3 w-full flex flex-col justify-center items-start'>
      <Navbar />
      <h2 className='text-xl font-bold'>Posts</h2>
      {items.map((post) => (
        <div className='bg-blue-100 border border-gray-300 my-4 p-3' key={post.id}>
          <Link href={`/posts/${post.id}`}><h4 className='text-lg font-semibold'>{post.title}</h4></Link>
          <p>{post.body}</p>
          <button onClick={()=> {handleChange(post.id)}}>Click me</button>
        </div>
      ))}
    </div>
  );
}

export default PostsList;

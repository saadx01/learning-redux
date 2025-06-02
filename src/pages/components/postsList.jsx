// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchPosts } from '../redux/slices/postsSlice';

// function PostsList() {
//   const dispatch = useDispatch();
//   const { items, status, error } = useSelector((state) => state.posts);

//   useEffect(() => {
//     if (status === 'idle') {
//       dispatch(fetchPosts());
//     }
//   }, [status, dispatch]);

//   if (status === 'loading') return <p>Loading...</p>;
//   if (status === 'failed') return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h2 className='text-xl font-bold m-2 my-4'>Posts</h2>
//       {items.map((post) => (
//         <div className='bg-blue-100 border border-gray-300 m-2 my-4 p-3' key={post.id}>
//           <h4 className='text-lg font-semibold'>{post.title}</h4>
//           <p>{post.body}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default PostsList;

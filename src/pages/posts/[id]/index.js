import React from 'react';
import { Navbar } from '@/layout/Navbar';

// This is the main component that shows one post
export default function SinglePost({ post }) {
  return (
    <div className='bg-gray-100 min-h-screen pt-15 p-3 w-full flex flex-col justify-center items-center gap-2'>
      <Navbar />
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

// This runs on the server before the page is shown
export async function getServerSideProps(context) {
  const postId = context.params.id;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const post = await res.json();

  // If post not found, show 404 page
  if (!post.id) {
    return { notFound: true };
  }

  // Send post data as a prop to the page
  return { props: { post } };
}












// import React from 'react';
// import { Navbar } from '@/layout/Navbar';
// import { useParams } from 'next/navigation';

// // This is the main component that shows one post
// export default function SinglePost() {
//     const Params = useParams();
//     console.log("Params:", Params);

//     return (
//         <div className="bg-gray-100 min-h-screen pt-15 p-3 w-full flex flex-col justify-center items-start">
//             <Navbar />
//             <p>Index</p>
//         </div>
//     );
// }


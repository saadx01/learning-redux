import React from 'react'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className='w-full p-4 bg-blue-300 text-sm flex justify-center fixed top-0 left-0 shadow'>
        <ul className='flex flex-row  gap-6 font-semibold'>
            <Link href = "/users-list">
                <li>Users</li>
            </Link>
            <Link href = "/counter">
                <li>Counter</li>
            </Link>
            <Link href = "/posts">
                <li>Posts</li>
            </Link>
        </ul>
    </div>
  )
}

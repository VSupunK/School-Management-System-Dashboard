import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
      {/* Search Bar */}
      <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 p-2'>
        <Image src="/search.png" alt='searchIcon' width={14} height={14} />
        <input type='text' placeholder='Search here...' className='rounded-full px-4 py-1'/>
      </div>

      {/* Icon and user */}
      <div className='flex items-center gap-6'>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
          <Image src="/message.png" alt='chatIcon' width={20} height={20}/>
        </div>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'>
          <Image src="/announcement.png" alt='announcementIcon' width={20} height={20}/>
          <div className='absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-pink-500 text-white text-sm rounded-full'>1</div>
        </div>
          <span className='text-xs leading-3 font-medium'>Supun Kalhara</span>
          <span className='text-[10px] to-gray-500 text-right'></span>
          <Image src="/avatar.png" alt='Provide_Avatar' width={36} height={36} className='rounded-full'/>
        <div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
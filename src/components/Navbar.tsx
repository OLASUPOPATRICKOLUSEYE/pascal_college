import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>

        {/* ICON AND USER */}
        <div className='flex items-center gap-6 justify-end w-full'>
            <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
                <Image src="/message.png" alt="" width={20} height={20} />
            </div>
            <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'>
                <Image src="/announcement.png" alt="" width={20} height={20} />
                <div className='absolute -top-3 -right-3 w-5 h-5 items-center flex justify-center bg-purple-500 rounded-full text-xs text-white'>1</div>
            </div>
            <div className='flex flex-col '>
                <span className='leading-3 text-xs font-medium'>Zach Pascal</span>
                <span className='text-[10px] text-gray-500 text-right'>Admin</span>
            </div>
            <Image src="/avatar.png" alt="" width={36} height={36} className='rounded-full'/>
        </div>
    </div>
  )
}

export default Navbar
import React from 'react'

const Announcement = () => {
  return (
    <div className="flex flex-col gap-4 px-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Events</h1>
          <span className='text-xs text-gray-400'>View All</span>
        </div>
        <div className="flex flex-col gap-4">
          <div className="bg-skyColor rounded-md p-4">
            <div className="flex items-center justify-between">
              <h1 className='font-medium'>Lorem ipsum dolor</h1>
              <span className="text-xs text-gray-400 bg-white py-1 px-2 rounded-sm">2024-10-05</span>
            </div>
            <p className='mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam amet, accusantium cupiditate voluptas unde doloremque nemo reprehenderit neque inventore quas</p>
          </div>

          <div className="bg-YellowColor rounded-md p-4">
            <div className="flex items-center justify-between">
              <h1 className='font-medium'>Lorem ipsum dolor</h1>
              <span className="text-xs text-gray-400 bg-white py-1 px-2 rounded-sm">2024-10-05</span>
            </div>
            <p className='mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam amet, accusantium cupiditate voluptas unde doloremque nemo reprehenderit neque inventore quas</p>
          </div>

          <div className="bg-PurpleColor rounded-md p-4">
            <div className="flex items-center justify-between">
              <h1 className='font-medium'>Lorem ipsum dolor</h1>
              <span className="text-xs text-gray-400 bg-white py-1 px-2 rounded-sm">2024-10-05</span>
            </div>
            <p className='mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam amet, accusantium cupiditate voluptas unde doloremque nemo reprehenderit neque inventore quas </p>
          </div>
          
        </div>
    </div>
  )
}

export default Announcement
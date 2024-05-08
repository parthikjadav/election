import React from 'react'

const CustomContainer = ({ children }) => {
  return (
    <div className='px-5 2xl:w-[1400px] mt-5 xl:w-[1120px] lg:w-[992px] md:w-[768px] sm:w-[576px] mx-auto'>
      {children}
    </div>
  )
}

export default CustomContainer

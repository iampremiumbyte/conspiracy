import React from 'react'

const PageOne = ({level, handlePageOneClick}) => {
  return (
    <div className={`${level === 1 ? 'flex' : 'hidden'} items-center justify-center w-screen h-screen`}>
      <img src='/PAGE 1 - TEMPLATES/BACKGROUND TEXTURE 1920X1080.png' className='w-full h-full absolute' />
      <div className="absolute w-full h-full flex items-center justify-center w-screen h-screen">
        <button className='w-1/4 cursor-pointer' onClick={handlePageOneClick}>
          <img src='/PAGE 1 - TEMPLATES/TRIANGLE.png' className='w-full'/>
        </button>
      </div>
    </div>
  )
}

export default PageOne
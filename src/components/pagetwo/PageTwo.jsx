import React from 'react'

const PageTwo = ({level, setLevel}) => {
  return (
    <div className={`${level === 3 ? 'flex' : 'hidden'} items-center justify-center w-screen h-screen`}>
      <img src='/PAGE 3 - TEMPLATES/BACKGROUND.png' className='w-full h-full absolute' />
      <div className="flex flex-col justify-center items-center gap-6  absolute w-full h-full">
          <img src='/PAGE 3 - TEMPLATES/LOGOTOP.png' className='w-1/4' />
          <img src='/PAGE 3 - TEMPLATES/YES.png' className='w-1/4 cursor-pointer' onClick={()=> setLevel(4)} />
          <img src='/PAGE 3 - TEMPLATES/NO.png' className='w-1/4 cursor-pointer' onClick={()=> setLevel(1)} />
      </div>
    </div>
  )
}

export default PageTwo
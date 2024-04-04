import React from 'react'

const Intro = ({videoRef, level, handleVideoEnded}) => {
  return (
    <div className={`${level === 2 ? 'flex' : 'hidden'} items-center justify-center w-screen h-screen`}>
        <video ref={videoRef} src='/intro.mp4' onEnded={handleVideoEnded} className='w-full h-full object-fill'/>
    </div>
  )
}

export default Intro
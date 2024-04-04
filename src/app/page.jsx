"use client"

import Intro from '@/components/intro/Intro';
import PageOne from '@/components/pageone/PageOne';
import PageThree from '@/components/pagethree/PageThree';
import PageTwo from '@/components/pagetwo/PageTwo';
import React, { useRef, useState } from 'react'

const home = () => {
  const [level, setLevel] = useState(1);
  const videoRef = useRef(); 

  const handlePageOneClick = () => {
    setLevel(2);
    videoRef.current.play();
  }

  const handleVideoEnded = () => {
    setLevel(3);
  }

  return (
    <>
    <PageOne 
      level={level} 
      handlePageOneClick={handlePageOneClick} 
    />
    <Intro 
      videoRef={videoRef} 
      handleVideoEnded={handleVideoEnded}
      level={level} 
    />
    <PageTwo level={level} setLevel={setLevel} />
    <PageThree level={level} />
    </>
  )
}

export default home
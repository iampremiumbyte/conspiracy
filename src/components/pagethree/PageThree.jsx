'use client'

import { generateRandomString } from '@/utils/helpers';
import React, { useState } from 'react'

const PageThree = ({level}) => {
    const [code, setCode] = useState("666");

    const handleSubmit = () => {

        if(code.length !== 6){
          alert("Enter 3 character codes")
        }

        if(!code.includes("666")){
            alert("Code must begin with 666");
            return;
        }

        const tweet = `I am now solving the biggest  %23COINSPIRACY %0A%0A Enter my code to join the mystery: ${ `666-${generateRandomString().toLocaleUpperCase()}`} %0A%0A @CoinspiracySOL %0A%0A https://coinspiracy.wtf`;
        const url = `https://twitter.com/intent/tweet?text=${tweet}`
        window.location.href = url;

    }
  return (
    <div className={`${level === 4 ? 'flex' : 'hidden'} items-center justify-center w-screen h-screen`}>
      <img src='/PAGE 2 - TEMPLATES/BG-TEXTURE 1920X1080.png' className='w-full h-full absolute' />
      <div className="flex flex-col justify-center items-center gap-6  absolute w-full h-full">
          <img src='/PAGE 2 - TEMPLATES/TRIANGLE.png' className='w-1/2 sm:w-1/5' />
          <div className="w-full sm:w-1/3 relative">
              <img src='/PAGE 2 - TEMPLATES/CODESPACE.png' className='w-full cursor-pointer' />
              <input 
                type="text" 
                value={code} 
                maxLength={6}
                onInput={e => setCode(e.target.value)}
                className='absolute w-full h-full top-0 bg-transparent text-black font-black text-center'
                style={{
                    letterSpacing: "3vmin",
                    fontSize: "6vmin",
                    textTransform: "uppercase",
                    outline: "none",
                    border: "none",
                    marginTop: "-2%"
                }}
            />
          </div>
          <img src='/PAGE 2 - TEMPLATES/ENTERCODE.png' className='w-2/3 sm:w-1/4 cursor-pointer' onClick={handleSubmit} />
      </div>
    </div>
  )
}

export default PageThree
import React from 'react'
import './switchStyle.css'
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function BgSwitcher({ bgIndex, setBgIndex, bgVideos }) {
  

  const handleNext = () => {
    setBgIndex((prevIndex) => (prevIndex + 1) % bgVideos.length);
  }

  const handlePrev = () => {
    setBgIndex((prevIndex) => (prevIndex - 1 + bgVideos.length) % bgImages.length);
  }

  return(
    
    <div 
      className='bg-switcher'
   
    >
      
        <>
          <button 
            onClick={handlePrev}
            className='arrow-switch-left'>
            <ChevronLeft size={25} />
          </button>


          <div className='dots'>
            {bgVideos.map((_, index) => (
              <button
                key={index}
                onClick={() => setBgIndex(index)}
                className={
                `dot ${index === bgIndex ? 'active' : ''}`}
              >
                &nbsp;
              </button> 

            ))}
          </div>


          
          <button 
            onClick={handleNext}
            className='arrow-switch-right'>
            <ChevronRight size={25}/>
          </button>
          
        </>
      

     
    </div>
  )
}
import React from 'react'
import './bgStyle.css'
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function BgSwitcher({ bgIndex, setBgIndex, bgImages }) {
  

  const handleNext = () => {
    setBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
  }

  const handlePrev = () => {
    setBgIndex((prevIndex) => (prevIndex - 1 + bgImages.length) % bgImages.length);
  }

  return(
    <div 
      className='bg-switcher'
   
    >
      
        <>
          <button 
            onClick={handlePrev}
            className='arrow-switch-left'>
            <ChevronLeft size={32} />
          </button>
          <button 
            onClick={handleNext}
            className='arrow-switch-right'>
            <ChevronRight size={32} />
          </button>
          
        </>
      

      <div className='dots'>
        {bgImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setBgIndex(index)}
            className={`dot ${index === bgIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}
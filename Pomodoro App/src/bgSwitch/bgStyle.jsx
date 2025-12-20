import { useState } from 'react'
import './bgStyle.css'
import {image1, image2, image3} from '../assets/images'
import BgSwitcher from './bgSwitcher.jsx'

export default function BgStyle({ children }) {
  const [bgIndex, setBgIndex] = useState(0);
  const bgImages = [image1, image2, image3];

  return(
    <div
      style={{
        backgroundImage: `url(${bgImages[bgIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        width: '100vw',
        position: 'fixed',
        overflow: 'hidden',
        top:0,
        left:0,
      }}
    >
      {children}

      <BgSwitcher 
        bgIndex={bgIndex}
        setBgIndex={setBgIndex} 
        bgImages={bgImages} 
      />
    </div>
  )
}
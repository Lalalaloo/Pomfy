import { useState } from 'react'
import './switchStyle.css'
import {vid1, vid2, vid3, vid4, vid5, vid6, vid7, vid8 } from '../assets/videos'
import BgSwitcher from './bgSwitcher.jsx'

export default function BgStyle({ children }) {
  const [bgIndex, setBgIndex] = useState(0);
  const bgVideos = [vid1, vid2, vid3, vid4, vid5, vid6, vid7, vid8];

  return(
    <div
      style={{
        backgroundImage: `url(${bgVideos[bgIndex]})`,
        backgroundSize: 'cover',
        position: 'fixed',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
      }}
    >

      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}

        src={bgVideos[bgIndex]}
      >
        <source src={bgVideos[bgIndex]} type="video/mp4" />
      </video>
      {children}

      <BgSwitcher 
        bgIndex={bgIndex}
        setBgIndex={setBgIndex} 
        bgVideos={bgVideos} 
      />
    </div>
  )
}
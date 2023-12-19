import React from 'react';
import { Tilt } from 'react-tilt';
import image from './IMG_8708Small2.png'
import "./Tilt.css"

const TiltImage = () => {
  return (
    <div className='center'>
      <Tilt className="Tilt" options={{  }} >
        <div className="Tilt-inner"> <img className="image" alt="mountain pic" src={image}></img> </div>
      </Tilt>
    </div>

  )
}
export default TiltImage 
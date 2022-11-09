import React from 'react'

const ScreenSize = () => {
    const height = window.innerHeight;
    const width = window.innerWidth;
  return (
    <div>
        <p>height: {height}</p>
        <p>width: {width}</p>
    </div>
  )
}

export default ScreenSize;

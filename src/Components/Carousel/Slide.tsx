import React, { FC } from 'react'

const Slide:FC = ({children}) => {
  return (
    <div className='slider'>
        {children}
    </div>
  )
}

export default Slide
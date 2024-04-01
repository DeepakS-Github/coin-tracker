import React from 'react'
import './heading.css'

const Heading = ({headingText}) => {
  return (
    <p className='heading'>
        {headingText}
    </p>
  )
}

export default Heading
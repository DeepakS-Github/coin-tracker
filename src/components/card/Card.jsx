import React from 'react'
import './card.css'


const Card = ({image, cardHeadText, cardSubheadText}) => {
  return (
    <div className='card-container'>
        <img className='card-img' src={image} alt='cardimg'/>
        <div className='card-innercontainer'>
            <span className='card-headtxt'>{cardHeadText}</span>
            <span className='card-subtxt'>{cardSubheadText}</span>
        </div>
    </div>
  )
}

export default Card
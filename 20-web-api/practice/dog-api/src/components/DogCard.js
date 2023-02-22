import React from 'react'

export default function DogCard(props) {
  return(
    <div className='dogCard'>
    <img src={props.dog.image} alt='dog'/>
    DogCard
    </div>
  )
}
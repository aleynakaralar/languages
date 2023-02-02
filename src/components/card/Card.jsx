import React from 'react'
import "../card/card.css"
import { useState } from 'react'


const Card = ({name,img,options}) => {
  const [click, setClick] = useState(true)
 
  const change = () => {
    setClick(!click)
  }
  
   
  return (
    <div className='main'>
    <div className='card-container'>
      <div className="cards" onClick={change} >
        { 
          click ? (
            <div>
              <div className='image'>
                <img src={img} alt="images" />
              </div>
              <div className="title">
                <h1>{name}</h1>
              </div>
            </div>
          ) : <div><p>{options}</p></div>
        }
      </div>
    </div>
    </div>
  )
}

export default Card
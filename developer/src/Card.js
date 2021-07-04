import React from 'react'
import './Card.css'
export default function Card({imgsrc,name,mail}) {
    return (
        <div className="fancy">
         <img src={imgsrc}></img>
         <p>my name is {name}</p>
         <p>{mail}</p>
        </div>
    )
}

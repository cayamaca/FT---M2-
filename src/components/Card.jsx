import React from 'react';
import './Card.css'

export default function Card(props) {
  // acá va tu código
  return (
    <div className='containCard'>
      <button onClick={props.onClose}>X</button>
      {/* <h1>{props.key}</h1> */}
      <h1>{props.name}</h1>
      <h3>min</h3>
      <p>{props.min}</p>
      <h3>max</h3>
      <p>{props.max}</p>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='son de cielo' />
      
    </div>)
  };
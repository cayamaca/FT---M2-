import React from 'react';
import Card from './Card';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div>
      {
        props.cities.map((e)=>(
          <Card
          key= {e.id}
          name={e.name}
          min={e.main.temp_min}
          max={e.main.temp_max}
          img={e.weather[0].icon}
          onClose={() => alert(e.name)} />
        ))
      }
  
    </div>
    )
  };

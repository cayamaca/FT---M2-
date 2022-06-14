import React from 'react';
import { Fragment } from 'react';


export default function SearchBar(props) {
  // acá va tu código
  return (
  <Fragment>
  <div>Search Bar Component</div>
  <input type={'text'} placeholder='ciudad'/>
  <button onClick={()=> props.onSearch('buscando...')}>AGREGAR</button>
</Fragment>
  )

};
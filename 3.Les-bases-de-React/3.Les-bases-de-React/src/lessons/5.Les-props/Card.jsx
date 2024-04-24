import React from 'react'

function Card({id, state}) {

    console.log(id, state);
  return (
    <div>

    <p>User n°{id}</p>
    <p>Props du parent {state}</p>

    </div>
  )
}

export default Card
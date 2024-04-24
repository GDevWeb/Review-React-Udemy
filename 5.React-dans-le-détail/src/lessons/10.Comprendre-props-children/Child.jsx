import React, { useEffect } from 'react'

function Child(props) {

    // 1.State :

    useEffect(() =>{
        document.title = "Comprendre les props.children"
    })

    console.log(props);
  return (
    <>
    {props.children}
    </>
  )
}

export default Child

/* 
CQFD à propos des props.children




*/
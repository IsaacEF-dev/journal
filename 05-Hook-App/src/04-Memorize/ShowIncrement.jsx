import React from 'react'

export const ShowIncrement = React.memo(({incremente}) => {
    console.log("cargando")
  return (
    <button className='btn btn-primary'
    onClick={()=>incremente(3)}>Incrementar</button>
  )
})

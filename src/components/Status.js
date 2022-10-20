import React from 'react'

function Status1({ status, name }) {

  return (

    <>
      <div><h1>{name}</h1></div>
      <div className='circle-color' style={{
        backgroundColor: status ? 'red' : 'green', width: '100px',
        height: '100px', borderRadius: '100px'
      }}>
      </div>
    </>
  )
}

export default Status1
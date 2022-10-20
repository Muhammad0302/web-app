import React from 'react'

function Status1(props) {
  const {status} = props
  return (
    
    <>
    <div><h1>Status1</h1></div>
    <div className='circle-color' style= {{backgroundColor: status? 'red' : 'green',width: '100px',
        height: '100px',borderRadius:'100px'}}>
    </div>
    </>
  )
}

export default Status1
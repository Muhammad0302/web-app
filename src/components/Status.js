import React from 'react'
import './status.css';

function Status1({ status, name }) {

  return (
    <>  
      <td>{name}</td>
      <td>
        <div className='circle-color' style={{
          backgroundColor: status ? 'red' : 'green', width: '40px',
          height: '40px', borderRadius: '100px' , border:'1px solid black'
        }}>
        </div>
      </td>
    </>
  )
}

export default Status1
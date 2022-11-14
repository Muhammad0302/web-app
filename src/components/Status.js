import React from 'react'
import './status.css';

function Status1({ status, name }) {

  return (

    <>
      <div>
        
              <td>{name}</td>
              <td><div className='circle-color' style={{
        backgroundColor: status ? 'red' : 'green', width: '40px',
        height: '40px', borderRadius: '100px' , border:'1px solid black'
      }}>
      </div></td>
            
              
           
      </div>
      
    </>
  )
}

export default Status1
import React from 'react'
import './status.css';

function Status1({ status1, status2, status3, name1, name2, name3 }) {

  return (

    <>
      <div>
        <table>
          <thead>
            <th>Sensor ID</th>
            <th>Status</th>
          </thead>
          <tbody>
            <tr>
              <td>{name1}</td>
              <td><div className='circle-color' style={{
        backgroundColor: status1 ? 'red' : 'green', width: '60px',
        height: '60px', borderRadius: '100px' , border:'1px solid black'
      }}>
      </div></td>
            </tr>
            <tr>
              <td>{name2}</td>
              <td><div className='circle-color' style={{
        backgroundColor: status2 ? 'red' : 'green', width: '60px',
        height: '60px', borderRadius: '100px', border:'1px solid black'
      }}>
      </div></td>
            </tr>
            <tr>
              <td>{name3}</td>
              <td><div className='circle-color' style={{
        backgroundColor: status3 ? 'red' : 'green', width: '60px',
        height: '60px', borderRadius: '100px' , border:'1px solid black'
      }}>
      </div></td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </>
  )
}

export default Status1